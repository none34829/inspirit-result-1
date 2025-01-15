import pandas as pd
import json
from collections import defaultdict
import sys
import os

# Set output encoding to UTF-8
sys.stdout.reconfigure(encoding='utf-8')

# Read the original Excel file
df = pd.read_excel('Inspirit Students at colleges.xlsx')

# Clean the data
df = df.dropna(subset=['University Name LinkedIn', 'University End Year'])
df['University End Year'] = pd.to_numeric(df['University End Year'], errors='coerce')
df = df[df['University End Year'].between(2026, 2028)]

# Count students by university and year
university_counts = defaultdict(lambda: defaultdict(int))
country_map = {}  # Store country for each university
for _, row in df.iterrows():
    uni_name = row['University Name LinkedIn'].strip()
    year = int(row['University End Year'])
    university_counts[uni_name][year] += 1
    if 'Country' in row and pd.notna(row['Country']):
        country_map[uni_name] = row['Country']
    else:
        country_map[uni_name] = 'United States'  # Default to US

# Create the universities list
universities = []
for uni_name, year_counts in sorted(university_counts.items()):
    university_data = {
        'name': uni_name,
        'country': country_map[uni_name],
        'logo': '',  # Will be filled in later
        'graduatesByYear': {
            2026: year_counts.get(2026, 0),
            2027: year_counts.get(2027, 0),
            2028: year_counts.get(2028, 0)
        }
    }
    universities.append(university_data)

# Keep existing university logos
existing_logos = {
    "University of Chicago": "https://img2.storyblok.com/0x60/filters:format(webp)/f/112543/1200x1523/cc92fcdba3/1200px-university_of_chicago_shield-svg.png",
    "Stanford University": "https://img2.storyblok.com/0x60/filters:format(webp)/f/112543/394x589/7de8201fea/su_new_blockstree_2color_darkbgrd.png",
    "Columbia University": "https://img2.storyblok.com/0x60/f/112543/820x530/c2b5ed5878/columbia.png",
    "New York University": "https://img2.storyblok.com/0x60/f/112543/203x197/2fdf345a94/nyu.png",
    "Boston University": "https://img2.storyblok.com/0x60/f/112543/2000x930/2c5d84220e/boston-university.png",
    "Cornell University": "https://img2.storyblok.com/0x60/filters:format(webp)/f/112543/256x256/3c32249a6e/cornell.png",
    "Harvard University": "https://img2.storyblok.com/0x60/f/112543/3840x2160/97b777b67b/harvard-symbol.png",
    "Yale University": "https://img2.storyblok.com/0x60/f/112543/1200x1260/853f8e7976/yale.png",
    "University of Pennsylvania": "https://img2.storyblok.com/0x60/f/112543/1760x2000/8897dec29f/universityofpennsylvania.png",
    "Babson College": "https://img2.storyblok.com/0x60/f/112543/256x256/3c32249a6e/babson.png",
    "Barnard College": "https://img2.storyblok.com/0x60/f/112543/256x256/3c32249a6e/barnard.png"
}

# Add logos to universities
for university in universities:
    if university['name'] in existing_logos:
        university['logo'] = existing_logos[university['name']]

# Calculate total students by year
total_students = defaultdict(int)
for uni in universities:
    for year, count in uni['graduatesByYear'].items():
        total_students[year] += count

# Generate TypeScript code
ts_code = """export interface University {
  name: string;
  country: string;
  logo: string;
  graduatesByYear: {
    [key: number]: number;  // key is the year (2026-2028), value is number of graduates
  };
}

export const universities: University[] = """

ts_code += json.dumps(universities, indent=2)
ts_code += ";\n\n"

# Add statistics
ts_code += f"""// Statistics:
// Total universities: {len(universities)}
// Total students: {sum(total_students.values())}

// Students by year:
"""
for year in sorted(total_students.keys()):
    ts_code += f"//   {year}: {total_students[year]} students\n"

# Write to university.ts
with open(os.path.join('src', 'types', 'university.ts'), 'w', encoding='utf-8') as f:
    f.write(ts_code)
