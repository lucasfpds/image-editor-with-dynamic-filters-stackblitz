'use client';

import { useState, useCallback } from 'react';
import { ImageFilters } from '@/types';

const DEFAULT_FILTERS: ImageFilters = {
  brightness: 100,
  contrast: 100,
  saturation: 100,
  hue: 0,
  blur: 0,
  grayscale: 0,
  sepia: 0,
};

export const useImageFilters = () => {
  const [filters, setFilters] = useState<ImageFilters>(DEFAULT_FILTERS);

  const updateFilter = useCallback((filterName: keyof ImageFilters, value: number) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value,
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, []);

  const getFilterString = useCallback(() => {
    return [
      `brightness(${filters.brightness}%)`,
      `contrast(${filters.contrast}%)`,
      `saturate(${filters.saturation}%)`,
      `hue-rotate(${filters.hue}deg)`,
      `blur(${filters.blur}px)`,
      `grayscale(${filters.grayscale}%)`,
      `sepia(${filters.sepia}%)`,
    ].join(' ');
  }, [filters]);

  return {
    filters,
    updateFilter,
    resetFilters,
    getFilterString,
  };
};
