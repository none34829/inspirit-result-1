'use client';

import { useState, useEffect } from 'react';
import { University, universities, UniversityCategory } from '../types/university';

// Define Ivy+ universities
const IVY_PLUS = new Set([
  // Ivy League
  'Harvard University',
  'Yale University',
  'Princeton University',
  'Columbia University',
  'University of Pennsylvania',
  'Brown University',
  'Dartmouth College',
  'Cornell University',
  // Top 20 and other elite institutions
  'Stanford University',
  'Massachusetts Institute of Technology',
  'California Institute of Technology',
  'Carnegie Mellon University',
  'University of Chicago',
  'Johns Hopkins University',
  'Northwestern University',
  'Duke University',
  'Rice University',
  'Vanderbilt University',
  'Washington University in St. Louis'
]);

const UniversityList = () => {
  const [allUniversities, setAllUniversities] = useState<University[]>([]);
  const [classYearFilter, setClassYearFilter] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<UniversityCategory>('all');
  const [visibleCount, setVisibleCount] = useState<number>(20);

  const getGraduates = (university: University): number => {
    if (!classYearFilter) {
      return Object.values(university.graduatesByYear).reduce((a, b) => a + b, 0);
    }
    const year = parseInt(classYearFilter);
    return university.graduatesByYear[year] || 0;
  };

  useEffect(() => {
    console.log('Loading universities...');
    console.log('Class year filter:', classYearFilter);
    console.log('Category filter:', categoryFilter);

    let filtered = universities;

    // Apply category filter
    if (categoryFilter !== 'all') {
      if (categoryFilter === 'us_colleges') {
        filtered = filtered.filter(uni => uni.country === "United States");
      } else if (categoryFilter === 'non_us_colleges') {
        filtered = filtered.filter(uni => uni.country !== "United States");
      } else if (categoryFilter === 'ivy_plus') {
        filtered = filtered.filter(uni => IVY_PLUS.has(uni.name));
      }
    }

    // Apply year filter
    if (classYearFilter) {
      filtered = filtered.filter(uni => 
        uni.graduatesByYear[parseInt(classYearFilter)] > 0
      );
    }

    console.log('Filtered universities length:', filtered.length);
    setAllUniversities(filtered);
    setVisibleCount(20); // Reset visible count when filters change
  }, [classYearFilter, categoryFilter]);

  const totalGraduates = allUniversities.reduce((sum, university) => sum + getGraduates(university), 0);
  const defaultLogo = "https://img2.storyblok.com/0x60/f/112543/256x256/3c32249a6e/default-university.png";

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 20, allUniversities.length));
  };

  const visibleUniversities = allUniversities.slice(0, visibleCount);
  const hasMore = visibleCount < allUniversities.length;

  const getCategoryDisplayName = (category: UniversityCategory): string => {
    switch (category) {
      case 'us_colleges':
        return 'US Colleges';
      case 'non_us_colleges':
        return 'Non-US Colleges';
      case 'ivy_plus':
        return 'Ivy League+';
      default:
        return 'All Universities';
    }
  };

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
        <div className="flex justify-center gap-4 mb-8">
          {/* Category Filter */}
          <div className="relative w-64">
            <select
              className="w-full px-4 py-3 bg-gray-800/50 border-2 border-purple-500/30 rounded-xl appearance-none backdrop-blur-sm text-white cursor-pointer focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value as UniversityCategory)}
            >
              <option value="all">All Universities</option>
              <option value="us_colleges">US Colleges</option>
              <option value="non_us_colleges">Non-US Colleges</option>
              <option value="ivy_plus">Ivy League+</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-purple-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Year Filter */}
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
            Showing {visibleUniversities.length} of {allUniversities.length} universities with {totalGraduates} graduates
            {classYearFilter ? ` from Class of ${classYearFilter}` : ' across all years'}
            {categoryFilter !== 'all' ? ` in ${getCategoryDisplayName(categoryFilter)}` : ''}
          </p>
        </div>

        {/* University Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {visibleUniversities.map((university, index) => (
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
                  <div className="relative w-24 h-24 mb-4">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full filter blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={university.logo || defaultLogo}
                      alt={`${university.name} logo`}
                      className="w-full h-full object-contain relative z-10"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = defaultLogo;
                      }}
                    />
                  </div>

                  {/* University Name */}
                  <h3 className="text-xl font-semibold text-white mb-2">{university.name}</h3>
                  
                  {/* Graduate Count */}
                  <p className="text-blue-400">
                    {getGraduates(university)} graduate{getGraduates(university) !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMore}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Button Content */}
              <div className="relative flex items-center space-x-2">
                <span>Load More</span>
                <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversityList;
