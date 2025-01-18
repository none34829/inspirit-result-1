import re

def update_logos():
    # Define the logos to update
    logo_updates = {
        "Rice University School of Engineering and Computing": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Rice_University_seal.svg/150px-Rice_University_seal.svg.png",
        "University of Reading logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/University_of_Reading_Logo.svg/200px-University_of_Reading_Logo.svg.png",
        "Unversity of Texas at Austin": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Seal_of_the_University_of_Texas_at_Austin.svg/150px-Seal_of_the_University_of_Texas_at_Austin.svg.png"
    }

    # Read the file
    with open('src/types/university.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Update each university's logo
    for name, logo in logo_updates.items():
        # Create the pattern to match the university entry
        pattern = f'"name": "{re.escape(name)}",[^}}]*"logo": [^,]*,'
        replacement = f'"name": "{name}",\n    "logo": "{logo}",'
        
        # Make the replacement
        content = re.sub(pattern, replacement, content)

    # Write the updated content back to the file
    with open('src/types/university.ts', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    update_logos()
