import json
import re

def find_missing_logos():
    with open('src/types/university.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all university entries
    universities = []
    current_uni = {}
    current_line = 0
    name_line = 0
    
    for line in content.split('\n'):
        current_line += 1
        line = line.strip()
        if line.startswith('{'):
            current_uni = {'_line': current_line}
        elif line.startswith('}'):
            if current_uni:
                universities.append(current_uni)
        elif '"name":' in line:
            current_uni['name'] = line.split(':')[1].strip().strip('",')
            name_line = current_line
        elif '"logo":' in line:
            current_uni['logo'] = line.split(':')[1].strip().strip('",')
            current_uni['_logo_line'] = current_line

    # Print universities without logos
    for uni in universities:
        if 'logo' in uni and (not uni['logo'] or uni['logo'] == '""' or uni['logo'] == "''"):
            print(f'University without logo: {uni["name"]} (logo on line {uni.get("_logo_line", "unknown")})')

if __name__ == '__main__':
    find_missing_logos()
