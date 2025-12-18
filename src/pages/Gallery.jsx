import React from 'react';

const Gallery = () => {
  // Dynamically import all images from the gallery folder
  const images = import.meta.glob('../assets/images/gallery/*.png', { eager: true });

  // Convert into an array and sort numerically by filename
  const galleryImages = Object.keys(images)
    .map((key) => images[key].default)
    .sort((a, b) => {
      // Extract number from path (e.g., ".../1.png" -> 1)
      const getNum = (path) => {
        const match = path.match(/\/(\d+)\.png$/);
        return match ? parseInt(match[1], 10) : 0;
      };
      return getNum(a) - getNum(b);
    });

  // Duplicate images to create a longer, more balanced masonry grid
  const allImages = [...galleryImages, ...galleryImages];

  return (
    <div className="container mx-auto px-4 py-8 lg:py-16 font-poppins">
      {/* Page Title */}
      <h1 className="text-[30px] font-bold text-[#d98a12] mb-12 text-center">
        Glimpses of Our Journey
      </h1>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {allImages.map((src, index) => (
          <div key={index} className="break-inside-avoid rounded-lg overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300">
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
