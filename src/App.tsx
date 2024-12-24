import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { ImageCarousel } from './components/ImageCarousel';
import { ContactForm } from './components/ContactForm';
import { furnitureImages } from './constants/images';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % furnitureImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? furnitureImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center pt-20 pb-12 px-4">
        <div className="mb-8">
          <Logo />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
          Coming Soon
        </h1>
        
        <p className="text-gray-600 max-w-2xl text-center text-lg mb-12">
          Discover the perfect blend of craftsmanship and contemporary design. 
          At Office Gate, we're crafting furniture that transforms spaces into 
          living works of art. Each piece tells a story of dedication to quality 
          and timeless elegance.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="relative max-w-4xl mx-auto mb-20 px-4">
        <ImageCarousel
          images={furnitureImages}
          currentIndex={currentImageIndex}
          onNext={nextImage}
          onPrev={prevImage}
        />
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Stay Updated
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;