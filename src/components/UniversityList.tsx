'use client';

import { useState, useEffect } from 'react';
import { University, universities } from '../types/university';

const UniversityList = () => {
  // Add state for universities to force re-render
  const [allUniversities, setAllUniversities] = useState<University[]>([]);
  const [classYearFilter, setClassYearFilter] = useState<string>('');

  // Calculate total graduates for a university based on selected class year
  const getGraduates = (university: University): number => {
    if (!classYearFilter) {
      // If no year selected, sum all years
      return Object.values(university.graduatesByYear).reduce((a, b) => a + b, 0);
    }
    const year = parseInt(classYearFilter);
    return university.graduatesByYear[year] || 0;
  };

  // Load and filter universities on mount or when filter changes
  useEffect(() => {
    console.log('Loading universities...');
    console.log('Class year filter:', classYearFilter);

    // Filter universities to only show those with graduates in the selected year
    const filtered = classYearFilter 
      ? universities.filter(uni => uni.graduatesByYear[parseInt(classYearFilter)] > 0)
      : universities;

    console.log('Filtered universities length:', filtered.length);
    setAllUniversities(filtered);
  }, [classYearFilter]); // Re-run when filter changes

  // Calculate total graduates for the current view
  const totalGraduates = allUniversities.reduce((sum, university) => sum + getGraduates(university), 0);

  // Default university logo
  const defaultLogo = "https://img2.storyblok.com/0x60/f/112543/256x256/3c32249a6e/default-university.png";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Where Inspirit AI Alumni Continue Their Journey
          </h1>
          <p className="text-gray-300 text-lg">Charting the paths of excellence across global universities</p>
        </div>

        {/* Filters Section */}
        <div className="flex justify-center mb-8">
          <div className="relative w-64">
            <select
              className="w-full px-4 py-3 bg-gray-800/50 border-2 border-blue-500/30 rounded-xl appearance-none backdrop-blur-sm text-white cursor-pointer focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
              value={classYearFilter}
              onChange={(e) => setClassYearFilter(e.target.value)}
            >
              <option value="">Filter by Class of</option>
              <option value="2024">Class of 2024</option>
              <option value="2025">Class of 2025</option>
              <option value="2026">Class of 2026</option>
              <option value="2027">Class of 2027</option>
              <option value="2028">Class of 2028</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-blue-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center mb-16">
          <p className="text-gray-300 text-lg">
            Showing {allUniversities.length} universities with {totalGraduates} graduates
            {classYearFilter ? ` from Class of ${classYearFilter}` : ' across all years'}
          </p>
        </div>

        {/* University Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allUniversities.map((university, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/40 rounded-2xl overflow-hidden backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/50 transition-all duration-500"
            >
              {/* Background Gradient Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-transparent via-blue-500/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              {/* Content Container */}
              <div className="relative p-6">
                <div className="flex flex-col items-center text-center">
                  {/* Logo Container with Glow Effect */}
                  <div className="relative w-32 h-32 mb-6">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
                    <div className="relative w-full h-full rounded-xl bg-gray-900/50 p-4 backdrop-blur-sm flex items-center justify-center border border-blue-500/30 group-hover:border-blue-400/50 transition-colors duration-300">
                      {university.logo ? (
                        <img
                          src={university.logo}
                          alt={`${university.name} logo`}
                          className="max-w-full max-h-full object-contain drop-shadow-2xl"
                        />
                      ) : (
                        <img
                          src={defaultLogo}
                          alt="Default University Logo"
                          className="max-w-full max-h-full object-contain drop-shadow-2xl"
                        />
                      )}
                    </div>
                  </div>

                  {/* University Info with Hover Effects */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {university.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{university.country}</p>
                  <p className="text-blue-400 font-semibold">
                    {getGraduates(university)} {getGraduates(university) === 1 ? 'Graduate' : 'Graduates'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityList;
