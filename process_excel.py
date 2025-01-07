import pandas as pd
import numpy as np
from datetime import datetime

# Read the Excel file
def read_and_clean_data():
    # Read the Excel file
    df = pd.read_excel('Inspirit Students at colleges.xlsx')
    print(f"\nInitial row count: {len(df)}")
    
    # Print all columns
    print("\nColumns in the Excel file:")
    print(df.columns.tolist())
    
    # Show sample of raw data
    print("\nSample of raw data (first 5 rows):")
    print(df.head())
    
    # Remove rows where University Name is NaN
    df = df.dropna(subset=['University Name LinkedIn'])
    print(f"\nRows after removing empty university names: {len(df)}")
    
    # Convert End Year to numeric, keeping only valid years
    df['University End Year'] = pd.to_numeric(df['University End Year'], errors='coerce')
    df = df.dropna(subset=['University End Year'])
    df['University End Year'] = df['University End Year'].astype(int)
    
    # Filter to keep only years 2024-2028
    df = df[df['University End Year'].between(2024, 2028)]
    print(f"Rows after filtering years 2024-2028: {len(df)}")
    
    # Count distribution of years
    year_dist = df['University End Year'].value_counts().sort_index()
    print("\nDistribution of students by year:")
    print(year_dist)
    
    # Show sample of cleaned data
    print("\nSample of cleaned data (first 5 rows):")
    print(df.head())
    
    return df

def process_data(df):
    # Group by University and End Year to get student counts
    grouped = df.groupby(['University Name LinkedIn', 'University End Year']).size().reset_index(name='Student Count')
    
    # Create a pivot table with universities as rows and class years as columns
    processed_df = grouped.pivot(index='University Name LinkedIn', 
                               columns='University End Year',
                               values='Student Count').reset_index()
    
    # Rename the University column
    processed_df = processed_df.rename(columns={'University Name LinkedIn': 'University'})
    
    # Fill NaN values with 0
    processed_df = processed_df.fillna(0)
    
    # Convert student counts to integers
    for col in processed_df.columns:
        if col != 'University':
            processed_df[col] = processed_df[col].astype(int)
    
    # Sort universities alphabetically
    processed_df = processed_df.sort_values('University')
    
    return processed_df

def main():
    # Read and clean the data
    df = read_and_clean_data()
    
    # Process the data
    processed_df = process_data(df)
    
    # Save to new Excel file
    output_file = 'Updated_University_Data.xlsx'
    with pd.ExcelWriter(output_file, engine='openpyxl') as writer:
        # Write the main data
        processed_df.to_excel(writer, index=False, sheet_name='Students by Class Year')
        
        # Calculate total students per year
        yearly_totals = {col: int(processed_df[col].sum()) for col in processed_df.columns if col != 'University'}
        
        # Create a summary sheet
        summary = pd.DataFrame({
            'Total Universities': [len(processed_df)],
            'Total Students': [sum(yearly_totals.values())],
            'Class Years Available': [', '.join(map(str, sorted(yearly_totals.keys())))],
            **{f'Students in {year}': count for year, count in yearly_totals.items()}
        })
        summary.to_excel(writer, sheet_name='Summary', index=False)
    
    print(f"\nFinal Summary:")
    print(f"- Total universities: {len(processed_df)}")
    print(f"- Class years included: {', '.join(map(str, sorted(yearly_totals.keys())))}")
    print("\nStudents per year:")
    for year, count in sorted(yearly_totals.items()):
        print(f"  {year}: {count} students")
    print(f"\nTotal students: {sum(yearly_totals.values())}")
    print(f"Output saved to: '{output_file}'")

if __name__ == "__main__":
    main()
