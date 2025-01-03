'use client';

import { useState } from 'react';
import { University, universities } from '../types/university';

const UniversityList = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [campusFilter, setCampusFilter] = useState<string>('');

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
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <div className="relative w-full sm:w-64">
            <select
              className="w-full px-4 py-3 bg-gray-800/50 border-2 border-blue-500/30 rounded-xl appearance-none backdrop-blur-sm text-white cursor-pointer focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">Filter by Category</option>
              <option value="public">Public Universities</option>
              <option value="private">Private Universities</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-blue-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="relative w-full sm:w-64">
            <select
              className="w-full px-4 py-3 bg-gray-800/50 border-2 border-blue-500/30 rounded-xl appearance-none backdrop-blur-sm text-white cursor-pointer focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
              value={campusFilter}
              onChange={(e) => setCampusFilter(e.target.value)}
            >
              <option value="">Filter by Campus</option>
              <option value="United States">United States</option>
              <option value="Japan">Japan</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-blue-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* University Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {universities.map((university, index) => (
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
                      <img
                        src={university.logo}
                        alt={`${university.name} logo`}
                        className="max-w-full max-h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* University Info with Hover Effects */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {university.name}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {university.country}
                  </p>

                  {/* Graduates Badge with Animated Background */}
                  <div className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-blue-500/30 group-hover:border-blue-400/50 transition-colors duration-300">
                    <span className="text-blue-400 font-semibold text-sm group-hover:text-blue-300 transition-colors duration-300">
                      {university.graduates} Graduates
                    </span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-3xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityList;
