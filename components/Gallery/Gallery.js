import React from "react";

const Gallery = ({ galleries }) => {
  return (
    <div className="flex flex-col pt-8 pb-8">
      <div className="text-4xl font-semibold leading-10 pb-4">Other photos</div>
      <div className="flex flex-wrap mt-6 justify-between">
        {galleries.map((gallery) => {
          console.log(gallery);
          return (
            <div className="flex basis-72 h-72 card rounded-2xl overflow-hidden mb-10">
              <img
                key={`gallery-${galleries._id}`}
                className="w-full h-full object-cover"
                src={gallery.image}
                alt={gallery.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
