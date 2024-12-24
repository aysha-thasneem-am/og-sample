import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export function ImageCarousel({ images, currentIndex, onNext, onPrev }: ImageCarouselProps) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
      <img
        src={images[currentIndex]}
        alt="Furniture preview"
        className="w-full h-full object-cover transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20" />
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
      >
        <ChevronLeft className="text-gray-900" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
      >
        <ChevronRight className="text-gray-900" />
      </button>
    </div>
  );
}