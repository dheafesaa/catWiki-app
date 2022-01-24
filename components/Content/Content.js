import React from "react";
import Meta from "../Meta/Meta";

const Content = ({breed}) => {
  return (
    <div className="flex flex-wrap justify-between pr-10 pl-10 pt-6">
      <div className="flex basis-96 h-96 card overflow-hidden rounded-2xl">
        <img className="w-full h-full" src={breed.image} alt={breed.name} />
      </div>
      <div className="flex flex-col w-[62%] p-2">
        <div className="text-4xl font-semibold">{breed.name}</div>
        <div className="text-lg font-medium max-w-[34rem] mt-8">
          {breed.description}
        </div>
        <div className="flex flex-row mt-8">
          <div className="text-base font-bold">Temperament:</div> &nbsp;
          <div className="text-base font-medium">
            {breed.temperament}
          </div>
        </div>
        <div className="flex flex-row mt-6">
          <div className="text-base font-bold">Origin:</div> &nbsp;
          <div className="text-base font-medium">{breed.origin}</div>
        </div>
        <div className="flex flex-row mt-6">
          <div className="text-base font-bold">Life Span:</div> &nbsp;
          <div className="text-base font-medium">{breed.lifeSpan} years</div>
        </div>
        <Meta breed={breed.metaData} />
      </div>
    </div>
  );
};

export default Content;
