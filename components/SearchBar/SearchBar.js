import React from "react";
import Image from "next/image";
import search from "../../assets/image/search.png";
import Link from "next/link";

const SearchBar = ({ onChangeHandler, response }) => {
  console.log(response.length);

  return (
    <div className="flex absolute top-[22rem] left-24 flex-col">
      <label className="relative">
        <span className="sr-only">Search</span>
        <span className="absolute flex top-5 ml-72">
          <Image
            className="h-3 w-3 fill-black"
            viewBox="0 0 20 20"
            src={search}
            alt="Search Icon"
          />
        </span>
        <input
          className="placeholder:text-black block w-full border font-medium border-black rounded-full py-4 pl-8 pr-20 shadow-sm focus:outline-none focus:border-white focus:ring-white focus:ring-1 text-lg"
          type="text"
          name="search"
          onChange={onChangeHandler}
          autoComplete="off"
        />
      </label>
      {response && response.length !== 0 && (
        <div className="mt-4 w-full bg-white overflow-hidden overflow-y-auto rounded-3xl">
          {response.map((breed) => {
            return (
              <div key={`breed-${breed._id}`}>
                <Link
                  href={{
                    pathname: `/breed/${breed._id}`,
                    // query: { id: breed._id },
                  }}
                >
                  <div className="w-full h-12 flex align-middle text-black font-medium p-4 mb-2 hover:bg-[#E3E1DC]">
                    {breed.name}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
