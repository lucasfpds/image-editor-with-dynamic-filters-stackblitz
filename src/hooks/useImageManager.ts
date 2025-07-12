'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import { ImageFile } from '@/types';

export const useImageManager = () => {
  const [imageFile, setImageFile] = useState<ImageFile | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setImageFile({
        file,
        url,
        name: file.name,
        size: file.size,
      });
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp']
    },
    multiple: false,
  });

  const removeImage = useCallback(() => {
    if (imageFile) {
      URL.revokeObjectURL(imageFile.url);
      setImageFile(null);
    }
  }, [imageFile]);

  const downloadImage = useCallback(async (elementId: string, filename?: string) => {
    setIsLoading(true);
    try {
      const element = document.getElementById(elementId);
      if (!element) {
        throw new Error('Element not found');
      }

      const canvas = await html2canvas(element, {
        allowTaint: true,
        useCORS: true,
        scale: 2,
        backgroundColor: null,
      });

      canvas.toBlob((blob) => {
        if (blob) {
          const name = filename ?? `edited-${Date.now()}.png`;
          saveAs(blob, name);
        }
      }, 'image/png');
    } catch (error) {
      console.error('Error downloading image:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    imageFile,
    isLoading,
    isDragActive,
    getRootProps,
    getInputProps,
    removeImage,
    downloadImage,
  };
};
