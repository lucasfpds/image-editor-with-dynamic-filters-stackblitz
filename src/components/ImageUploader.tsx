'use client';

import React from 'react';
import { useDropzone } from 'react-dropzone';
import { ImageFile } from '@/types';

interface ImageUploaderProps {
  onImageUpload: (imageFile: ImageFile) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const handleDrop = React.useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      const imageFile = {
        file,
        url,
        name: file.name,
        size: file.size,
      };
      onImageUpload(imageFile);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp']
    },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`
        w-full h-64 border-2 border-dashed rounded-lg 
        flex flex-col items-center justify-center cursor-pointer
        transition-all duration-200 ease-in-out
        ${isDragActive
          ? 'border-blue-500 bg-blue-50 text-blue-600'
          : 'border-gray-300 hover:border-gray-400 text-gray-600'
        }
      `}
    >
      <input {...getInputProps()} />
      <div className="text-center p-6">
        <svg
          className="mx-auto h-12 w-12 mb-4"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-lg font-medium mb-2">
          {isDragActive ? 'Solte a imagem aqui' : 'Arraste uma imagem aqui'}
        </p>
        <p className="text-sm">
          ou <span className="text-blue-500 font-medium">clique para selecionar</span>
        </p>
        <p className="text-xs mt-2 text-gray-500">
          PNG, JPG, JPEG, GIF, BMP, WEBP até 10MB
        </p>
      </div>
    </div>
  );
};

export default ImageUploader;
