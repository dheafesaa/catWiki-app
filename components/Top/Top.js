import React from "react";
import Link from "next/link";

const Top = ({ searched }) => {
  return (
    <div className="flex flex-col pt-6">
      <div className="text-4xl font-bold pb-12">
        Top 10 most searched searchs
      </div>
      {searched.map((breed, index) => {
        console.log(breed);
        return (
          <div
            className="card flex flex-row pb-10 relative"
            key={`breed-${breed._id}`}
          >
            <div className="flex basis-52 h-44 card overflow-hidden rounded-2xl">
              <img
                className="w-full h-full"
                src={breed.image}
                alt={breed.name}
              />
            </div>
            <div className="w-full">
              <div className="flex flex-col pl-12 w-[80%]">
                <div className="text-3xl font-semibold">
                  {++index}. {breed.name}
                </div>
                <div className="text-lg font-medium leading-5 mt-6">
                  {breed.description}
                </div>
              </div>
            </div>
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
  );
};

export default Top;
