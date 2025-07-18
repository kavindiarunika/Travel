import React, { useState } from 'react';
import { gallery } from '../../assets/gallery';

const Gallery = () => {
  const categoryList = ["all", "ella", "polonnaruwa", "galle", "kandy"];
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter images
  const filteredGallery =
    selectedCategory === "all"
      ? gallery
      : gallery.filter((item) => item.category === selectedCategory);

  return (
    <div className='mt-32 p-4'>
      {/* Category Buttons */}
      <div className='flex flex-row flex-wrap gap-4 sm:gap-6 mb-6'>
        {categoryList.map((cat, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`py-1 px-3 sm:w-[120px] text-center rounded cursor-pointer prata-regular font-semibold ${
              selectedCategory === cat
                ? 'bg-green-700 text-white'
                : 'bg-green-300 text-black'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </div>
        ))}
      </div>

      {/* Gallery Images */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {filteredGallery.map((item) => (
          <img
            key={item._id}
            src={item.image}
            alt={item.category}
            className='w-full h-auto rounded shadow fade-in'
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
