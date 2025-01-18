'use client';

import { useState, useEffect } from 'react';
import { University, universities } from '../types/university';

// Define the category type locally
type UniversityCategory = 'all' | 'us_colleges' | 'non_us_colleges' | 'ivy_plus';

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
  'Caltech',
  'Carnegie Mellon University',
  'University of Chicago',
  'Johns Hopkins University',
  'The Johns Hopkins University',
  'Northwestern University',
  'Duke University',
  'Rice University',
  'Vanderbilt University',
  'Washington University in St. Louis'
]);

const UniversityList: React.FC = () => {
  const [classYearFilter, setClassYearFilter] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<UniversityCategory>('all');
  const [visibleCount, setVisibleCount] = useState<number>(20);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [allUniversities, setAllUniversities] = useState<University[]>([]);

  useEffect(() => {
    console.log('Loading universities...');
    console.log('Class year filter:', classYearFilter);
    console.log('Category filter:', categoryFilter);

    let filtered = universities;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(uni => 
        uni.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

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

    // Sort universities: Ivy+ first, then alphabetically
    filtered = filtered.sort((a, b) => {
      const aIsIvy = IVY_PLUS.has(a.name);
      const bIsIvy = IVY_PLUS.has(b.name);
      
      if (aIsIvy !== bIsIvy) return bIsIvy ? 1 : -1;
      
      return a.name.localeCompare(b.name);
    });

    console.log('Filtered universities length:', filtered.length);
    setAllUniversities(filtered);
    setVisibleCount(20); // Reset visible count when filters change

  }, [classYearFilter, categoryFilter, searchQuery]);

  const getGraduates = (university: University): number => {
    if (!classYearFilter) {
      return Object.values(university.graduatesByYear).reduce((a, b) => a + b, 0);
    }
    const year = parseInt(classYearFilter);
    return university.graduatesByYear[year] || 0;
  };

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
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-full px-4 pb-4">
          <h1 className="text-2xl md:text-3xl lg:text-5xl leading-relaxed tracking-tight font-['Trebuchet MS'] font-black text-black mx-auto">
            Where Inspirit AI Alumni Continue Their Journey
          </h1>
          <p className="text-[#000000] text-lg md:text-xl lg:text-2xl mt-4">
            Charting the paths of excellence across global universities
          </p>
        </div>

        {/* Filters Section */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search universities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none w-64 bg-white/90 backdrop-blur-sm"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* Category Filter */}
          <div className="relative w-64">
            <select
              className="w-full px-4 py-3 bg-white border-2 border-[#565889] rounded-xl appearance-none text-[#2F3167] cursor-pointer focus:outline-none focus:border-[#2F3167] focus:ring-2 focus:ring-[#2F3167]/20 transition-all duration-300"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value as UniversityCategory)}
            >
              <option value="all">All Universities</option>
              <option value="ivy_plus">Ivy League+</option>
              <option value="us_colleges">US Colleges</option>
              <option value="non_us_colleges">Non-US Colleges</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-[#565889]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Year Filter */}
          <div className="relative w-64">
            <select
              className="w-full px-4 py-3 bg-white border-2 border-[#565889] rounded-xl appearance-none text-[#2F3167] cursor-pointer focus:outline-none focus:border-[#2F3167] focus:ring-2 focus:ring-[#2F3167]/20 transition-all duration-300"
              value={classYearFilter}
              onChange={(e) => setClassYearFilter(e.target.value)}
            >
              <option value="">Filter by Class of</option>
              <option value="2026">Class of 2028</option>
              <option value="2027">Class of 2027</option>
              <option value="2028">Class of 2026</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-[#565889]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center mb-16">
          <p className="text-[#000000] text-lg">
            Showing {totalGraduates} graduates
            {classYearFilter ? ` from Class of ${classYearFilter}` : ' across all years'}
            {categoryFilter !== 'all' ? ` in ${getCategoryDisplayName(categoryFilter)}` : ''}
          </p>
        </div>

        {/* University Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {visibleUniversities.map((university, index) => (
            <div
              key={index}
              className="group relative bg-[#2F3167] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Content Container */}
              <div className="relative p-6">
                <div className="flex flex-col items-center text-center">
                  {/* Logo Container */}
                  <div className="relative w-24 h-24 mb-4 bg-white rounded-xl p-2">
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
                  <p className="text-white">
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
              className="px-8 py-4 bg-[#565889] text-white rounded-xl font-semibold hover:bg-[#2F3167] transition-all duration-300"
            >
              <span>Load More</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversityList;
