'use client';

import React, { useState } from 'react';
import { useImageFilters } from '@/hooks/useImageFilters';
import { ImageFile } from '@/types';
import ImageUploader from './ImageUploader';
import ImagePreview from './ImagePreview';
import FilterControls from './FilterControls';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';

const ImageEditor: React.FC = () => {
  const [imageFile, setImageFile] = useState<ImageFile | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const { filters, updateFilter, resetFilters, getFilterString } = useImageFilters();

  const handleImageUpload = (file: ImageFile) => {
    setImageFile(file);
  };

  const handleRemoveImage = () => {
    if (imageFile) {
      URL.revokeObjectURL(imageFile.url);
      setImageFile(null);
      resetFilters();
    }
  }; const handleExportImage = async () => {
    if (!imageFile) return;

    setIsExporting(true);
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = imageFile.url;
      });

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        throw new Error('Canvas context not available');
      }

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      ctx.filter = getFilterString();
      ctx.drawImage(img, 0, 0);

      canvas.toBlob((blob) => {
        if (blob) {
          const name = `edited-${imageFile.name.split('.')[0]}-${Date.now()}.png`;
          saveAs(blob, name);
        }
      }, 'image/png');

    } catch (error) {
      console.error('Error exporting image:', error);

      try {
        const element = document.getElementById('image-preview');
        if (!element) {
          throw new Error('Preview element not found');
        }

        const canvas = await html2canvas(element, {
          allowTaint: true,
          useCORS: true,
          scale: 1,
          backgroundColor: 'rgb(249, 250, 251)',
          ignoreElements: (element) => {
            return element.tagName === 'BUTTON';
          }
        });

        canvas.toBlob((blob) => {
          if (blob) {
            const name = `edited-${imageFile.name.split('.')[0]}-${Date.now()}.png`;
            saveAs(blob, name);
          }
        }, 'image/png');
      } catch (fallbackError) {
        console.error('Fallback export also failed:', fallbackError);
        alert('Erro ao exportar a imagem. Tente novamente.');
      }
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Editor de Imagens
          </h1>
          <p className="text-lg text-gray-600">
            Aplique filtros dinâmicos em tempo real nas suas imagens
          </p>
        </div>

        {!imageFile ? (
          <div className="max-w-2xl mx-auto">
            <ImageUploader onImageUpload={handleImageUpload} />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ImagePreview
                imageFile={imageFile}
                filterString={getFilterString()}
                onRemove={handleRemoveImage}
              />

              <div className="mt-4 flex justify-center">
                <button
                  onClick={handleExportImage}
                  disabled={isExporting}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg shadow-sm transition-colors duration-200 flex items-center gap-2"
                >
                  {isExporting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Exportando...
                    </>
                  ) : (
                    <>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Baixar Imagem
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <FilterControls
                filters={filters}
                onFilterChange={updateFilter}
                onReset={resetFilters}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageEditor;
