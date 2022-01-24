import React from "react";
import Link from "next/link";

const Card = ({ breeds }) => {
  return (
    <div className="p-4">
      <div className="flex flex-wrap pl-20 pr-20 mt-6 justify-between">
        {breeds.map((breed) => {
          return (
            <div
              className="flex flex-col basis-60 box-content card relative"
              key={`breed-${breed._id}`}
            >
              <img
                className="rounded-2xl h-60"
                src={breed.image}
                alt={breed.name}
              />
              <div className="text-base font-semibold mt-6">{breed.name}</div>
              <Link
                href={{
                  pathname: `/breed/${breed._id}`,
                  // query: { id: breed._id },
                }}
              >
                <a className="absolute inset-0">
                  {/* <!-- Write your comments here --> */}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
