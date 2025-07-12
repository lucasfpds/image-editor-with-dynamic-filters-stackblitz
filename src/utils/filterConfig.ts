import { FilterConfig } from '@/types';

export const FILTER_CONFIG: FilterConfig = {
  brightness: {
    min: 0,
    max: 200,
    step: 1,
    default: 100,
    unit: '%',
  },
  contrast: {
    min: 0,
    max: 200,
    step: 1,
    default: 100,
    unit: '%',
  },
  saturation: {
    min: 0,
    max: 200,
    step: 1,
    default: 100,
    unit: '%',
  },
  hue: {
    min: -180,
    max: 180,
    step: 1,
    default: 0,
    unit: '°',
  },
  blur: {
    min: 0,
    max: 10,
    step: 0.1,
    default: 0,
    unit: 'px',
  },
  grayscale: {
    min: 0,
    max: 100,
    step: 1,
    default: 0,
    unit: '%',
  },
  sepia: {
    min: 0,
    max: 100,
    step: 1,
    default: 0,
    unit: '%',
  },
};

export const FILTER_LABELS: Record<string, string> = {
  brightness: 'Brilho',
  contrast: 'Contraste',
  saturation: 'Saturação',
  hue: 'Matiz',
  blur: 'Desfoque',
  grayscale: 'Escala de Cinza',
  sepia: 'Sépia',
};
