export interface ImageFilters {
  brightness: number;
  contrast: number;
  saturation: number;
  hue: number;
  blur: number;
  grayscale: number;
  sepia: number;
}

export interface ImageFile {
  file: File;
  url: string;
  name: string;
  size: number;
}

export interface FilterRange {
  min: number;
  max: number;
  step: number;
  default: number;
  unit?: string;
}

export interface FilterConfig {
  [key: string]: FilterRange;
}
