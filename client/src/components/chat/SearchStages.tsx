/**
 * Search Stages Component
 */

import React from 'react';
import { SEARCH_STAGES } from '@/constants';
import { truncateText } from '@/utils';
import type { SearchStagesProps } from '@/types';

export const SearchStages: React.FC<SearchStagesProps> = ({ searchInfo }) => {
  if (!searchInfo || !searchInfo.stages || searchInfo.stages.length === 0) {
    return null;
  }

  return (
    <div className="mb-3 mt-1 relative pl-4">
      <div className="flex flex-col space-y-4 text-sm text-gray-700">
        
        {/* Searching Stage */}
        {searchInfo.stages.includes(SEARCH_STAGES.SEARCHING) && (
          <div className="relative">
            <div className="absolute -left-3 top-1 w-2.5 h-2.5 bg-teal-400 rounded-full z-10 shadow-sm" />
            
            {searchInfo.stages.includes(SEARCH_STAGES.READING) && (
              <div className="absolute -left-[7px] top-3 w-0.5 h-[calc(100%+1rem)] bg-gradient-to-b from-teal-300 to-teal-200" />
            )}

            <div className="flex flex-col">
              <span className="font-medium mb-2 ml-2">Searching the web</span>
              
              <div className="flex flex-wrap gap-2 pl-2 mt-1">
                <div className="bg-gray-100 text-xs px-3 py-1.5 rounded border border-gray-200 inline-flex items-center">
                  <svg className="w-3 h-3 mr-1.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  {searchInfo.query}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reading Stage */}
        {searchInfo.stages.includes(SEARCH_STAGES.READING) && (
          <div className="relative">
            <div className="absolute -left-3 top-1 w-2.5 h-2.5 bg-teal-400 rounded-full z-10 shadow-sm" />
            
            <div className="flex flex-col">
              <span className="font-medium mb-2 ml-2">Reading</span>
              
              {searchInfo.urls && searchInfo.urls.length > 0 && (
                <div className="pl-2 space-y-1">
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(searchInfo.urls) ? (
                      searchInfo.urls.map((url, index) => (
                        <div 
                          key={index} 
                          className="bg-gray-100 text-xs px-3 py-1.5 rounded border border-gray-200 truncate max-w-[200px] transition-all duration-200 hover:bg-gray-50"
                        >
                          {typeof url === 'string' ? truncateText(url, 30) : JSON.stringify(url).substring(0, 30)}
                        </div>
                      ))
                    ) : (
                      <div className="bg-gray-100 text-xs px-3 py-1.5 rounded border border-gray-200 truncate max-w-[200px] transition-all duration-200 hover:bg-gray-50">
                        {typeof searchInfo.urls === 'string' ? truncateText(searchInfo.urls, 30) : JSON.stringify(searchInfo.urls).substring(0, 30)}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Writing Stage */}
        {searchInfo.stages.includes(SEARCH_STAGES.WRITING) && (
          <div className="relative">
            <div className="absolute -left-3 top-1 w-2.5 h-2.5 bg-teal-400 rounded-full z-10 shadow-sm" />
            <span className="font-medium pl-2">Writing answer</span>
          </div>
        )}

        {/* Error State */}
        {searchInfo.stages.includes(SEARCH_STAGES.ERROR) && (
          <div className="relative">
            <div className="absolute -left-3 top-1 w-2.5 h-2.5 bg-red-400 rounded-full z-10 shadow-sm" />
            <span className="font-medium pl-2">Search error</span>
            <div className="pl-4 text-xs text-red-500 mt-1">
              {searchInfo.error || "An error occurred during search."}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
