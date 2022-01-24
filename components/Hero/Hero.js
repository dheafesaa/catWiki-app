import React from "react";
import Image from "next/image";
import catwiki from "../../public/img/HeroImagelg.png";
import whiteCat from "../../assets/image/white.png";
import SearchBar from "../SearchBar/SearchBar";
import Explore from "../Explore/Explore";

const Hero = ({ breeds, onChangeHandler, response }) => {
  return (
    <div className="flex w-full h-full flex-col">
      <div className="pt-6 relative overflow-hidden">
        <Image
          className="rounded-t-3xl object-cover w-full h-full"
          src={catwiki}
          alt="CatWikiLg"
        />
        <div className="absolute top-40 left-24">
          <div className="flex flex-row">
            <div className="self-center text-5xl text-white">CatWiki</div>
            <div className="w-16 ml-4">
              <Image src={whiteCat} alt="White Cat" />
            </div>
          </div>
        </div>
        <div className="absolute top-60 left-24 text-2xl text-white w-80">
          Get to know more about your cat breed
        </div>
        <SearchBar placeholder="Enter your breed" response={response} onChangeHandler={onChangeHandler} />
        <Explore breeds={breeds} /> 
      </div>
    </div>
  );
};

export default Hero;
