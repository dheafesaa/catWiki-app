import React from "react";
import Card from "../Card/Card";

const Explore = ({breeds}) => {
  return (
    <div className="mt-[-0.5rem] ">
      <div className="bg-[#E3E1DC] flex flex-col rounded-b-3xl">
        <div className="flex flex-col rounded-b-lg mb-10 w-full">
          <div className="pl-24 pr-24">
            <div className="mt-8 text-base font-medium">
              Most Searched Breeds
            </div>
          </div>
          <div className="pl-24 pr-24 flex flex-row justify-between">
            <div className="mt-6 text-4xl font-bold w-[22rem]">
              <p>66+ Breeds For you to discover</p>
            </div>
            <div className="text-xs font-bold self-end text-[#29150799]">
              <p>SEE MORE</p>
            </div>
          </div>
          <Card breeds={breeds} />
        </div>
      </div>
    </div>
  );
};

export default Explore;
