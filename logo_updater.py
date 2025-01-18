import json
import requests
from bs4 import BeautifulSoup
import time
import re
import urllib.parse

def clean_university_name(name):
    # Remove department/college names for main university search
    name = name.strip()
    separators = [' - ', ' School of ', ' College of ', ' Department of ']
    for sep in separators:
        if sep in name:
            name = name.split(sep)[0]
    return name

def get_seeklogo_url(university_name):
    try:
        # Clean up university name for search
        search_name = clean_university_name(university_name).lower().replace("&", "and").replace("-", " ")
        search_name = re.sub(r'\s+', '-', search_name)
        url = f"https://seeklogo.com/search/{search_name}"
        
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Look for logo in search results
        logo_link = soup.find('img', class_='logo-item')
        if logo_link and 'src' in logo_link.attrs:
            return logo_link['src']
        return None
    except Exception as e:
        print(f"Error in get_seeklogo_url: {str(e)}")
        return None

def is_valid_logo(url):
    # Skip disambiguation, warning, and other Wikipedia system images
    invalid_patterns = [
        'Disambig_',
        'Ambox_',
        'SGateCampCrop',
        'red_Americas'
    ]
    
    # Skip small images (likely icons)
    small_image_patterns = [
        '30px-',
        '40px-',
        '42px-',
        '65px-'
    ]
    
    for pattern in invalid_patterns + small_image_patterns:
        if pattern in url:
            return False
    
    return True

def get_wikipedia_url(university_name):
    try:
        # Clean up university name for search
        search_name = clean_university_name(university_name)
        
        # Try direct Wikipedia search first
        search_url = f"https://en.wikipedia.org/wiki/{search_name.replace(' ', '_')}"
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(search_url, headers=headers)
        
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            # Try to find logo in infobox
            infobox = soup.find('table', class_='infobox')
            if infobox:
                img = infobox.find('img')
                if img and 'src' in img.attrs:
                    logo_url = "https:" + img['src'] if img['src'].startswith("//") else img['src']
                    if is_valid_logo(logo_url):
                        return logo_url
            
            # Try to find logo in the main content
            content = soup.find('div', id='mw-content-text')
            if content:
                img = content.find('img')
                if img and 'src' in img.attrs:
                    logo_url = "https:" + img['src'] if img['src'].startswith("//") else img['src']
                    if is_valid_logo(logo_url):
                        return logo_url
        
        return None
    except Exception as e:
        print(f"Error in get_wikipedia_url: {str(e)}")
        return None

def get_google_image_url(university_name):
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        # Try full name first
        search_query = f"{university_name} logo site:edu OR site:ac.uk OR site:edu.au"
        search_url = f"https://www.google.com/search?q={urllib.parse.quote(search_query)}&tbm=isch"
        
        response = requests.get(search_url, headers=headers)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find image elements
        img_tags = soup.find_all('img')
        for img in img_tags[1:]:  # Skip first image as it's usually Google's logo
            if img.get('src', '').startswith('http'):
                if is_valid_logo(img['src']):
                    return img['src']
        
        # If no results, try with cleaned university name
        clean_name = clean_university_name(university_name)
        if clean_name != university_name:
            search_query = f"{clean_name} logo site:edu OR site:ac.uk OR site:edu.au"
            search_url = f"https://www.google.com/search?q={urllib.parse.quote(search_query)}&tbm=isch"
            
            response = requests.get(search_url, headers=headers)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            img_tags = soup.find_all('img')
            for img in img_tags[1:]:
                if img.get('src', '').startswith('http'):
                    if is_valid_logo(img['src']):
                        return img['src']
        
        return None
    except Exception as e:
        print(f"Error in get_google_image_url: {str(e)}")
        return None

def update_university_logos():
    with open('src/types/university.ts', 'r', encoding='utf-8') as file:
        content = file.read()

    # Find the universities array
    universities_match = re.search(r'export const universities: University\[\] = \[(.*?)\];', content, re.DOTALL)
    if not universities_match:
        print("Could not find universities array")
        return

    universities_str = universities_match.group(1)
    universities = []
    current_university = {}
    
    # Parse the universities array
    for line in universities_str.split('\n'):
        line = line.strip()
        if line.startswith('{'):
            current_university = {}
        elif line.startswith('}'):
            if current_university:
                universities.append(current_university)
        elif '"name":' in line:
            current_university['name'] = line.split(':')[1].strip().strip('",')
        elif '"logo":' in line:
            current_university['logo'] = line.split(':')[1].strip().strip('",')

    # Update logos
    updated_content = content
    for university in universities:
        name = university['name']
        current_logo = university['logo']
        
        if not current_logo or current_logo == '""' or current_logo == "''":
            print(f"Searching logo for: {name}")
            
            # Try seeklogo first
            logo_url = get_seeklogo_url(name)
            if logo_url and is_valid_logo(logo_url):
                print(f"Found logo from seeklogo: {logo_url}")
            else:
                logo_url = None
            
            # If no logo found, try Wikipedia
            if not logo_url:
                logo_url = get_wikipedia_url(name)
                if logo_url:
                    print(f"Found logo from wikipedia: {logo_url}")
            
            # If still no logo, try Google Images
            if not logo_url:
                logo_url = get_google_image_url(name)
                if logo_url and is_valid_logo(logo_url):
                    print(f"Found logo from google: {logo_url}")
                else:
                    logo_url = None
            
            if logo_url:
                # Update the logo in the content
                pattern = f'"name": "{re.escape(name)}",[^}}]*"logo": [^,]*,'
                replacement = f'"name": "{name}",\n    "logo": "{logo_url}",'
                updated_content = re.sub(pattern, replacement, updated_content)

    # Write the updated content back to the file
    with open('src/types/university.ts', 'w', encoding='utf-8') as file:
        file.write(updated_content)

if __name__ == "__main__":
    update_university_logos()
