'use client';

import React from 'react';
import Image from 'next/image';
import { ImageFile } from '@/types';

interface ImagePreviewProps {
  imageFile: ImageFile;
  filterString: string;
  onRemove: () => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  imageFile,
  filterString,
  onRemove
}) => {
  return (
    <div className="relative w-full">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="absolute top-2 right-2 z-10">
          <button
            onClick={onRemove}
            className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-colors duration-200"
            title="Remover imagem"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div id="image-preview" className="flex items-center justify-center bg-gray-50 min-h-[300px]">
          <div
            className="relative max-w-full max-h-96 transition-all duration-200"
            style={{ filter: filterString }}
          >
            <Image
              src={imageFile.url}
              alt={imageFile.name}
              width={500}
              height={400}
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

        <div className="p-4 bg-white border-t">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900 truncate">
                {imageFile.name}
              </p>
              <p className="text-xs text-gray-500">
                {(imageFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <div className="text-xs text-gray-500">
              Preview em tempo real
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
