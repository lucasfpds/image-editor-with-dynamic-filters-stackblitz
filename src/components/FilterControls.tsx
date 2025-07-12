'use client';

import React from 'react';
import { ImageFilters } from '@/types';
import { FILTER_CONFIG, FILTER_LABELS } from '@/utils/filterConfig';

interface FilterControlsProps {
  filters: ImageFilters;
  onFilterChange: (filterName: keyof ImageFilters, value: number) => void;
  onReset: () => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  filters,
  onFilterChange,
  onReset,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Controles de Filtros
        </h2>
        <button
          onClick={onReset}
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
        >
          Resetar
        </button>
      </div>

      <div className="space-y-6">
        {Object.entries(FILTER_CONFIG).map(([filterName, config]) => {
          const currentValue = filters[filterName as keyof ImageFilters];

          return (
            <div key={filterName} className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor={filterName}
                  className="text-sm font-medium text-gray-700"
                >
                  {FILTER_LABELS[filterName]}
                </label>
                <span className="text-sm text-gray-500">
                  {currentValue}{config.unit}
                </span>
              </div>

              <div className="relative">
                <input
                  id={filterName}
                  type="range"
                  min={config.min}
                  max={config.max}
                  step={config.step}
                  value={currentValue}
                  onChange={(e) => onFilterChange(
                    filterName as keyof ImageFilters,
                    parseFloat(e.target.value)
                  )}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />

                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>{config.min}{config.unit}</span>
                  <span>{config.max}{config.unit}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterControls;
