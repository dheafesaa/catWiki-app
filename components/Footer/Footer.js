import React from "react";
import Image from "next/image";
import whiteCat from "../../assets/image/white.png";

const Footer = () => {
  return (
    <div className="flex w-full h-full mt-16">
      <div className="bg-[#000000] rounded-t-3xl w-full">
        <div className="pl-24 pr-24 mt-6 mb-6 text-white">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-row">
              <div className="self-center text-2xl">CatWiki</div>
              <div className="w-10 ml-2">
                <Image src={whiteCat} alt="Black Cat" />
              </div>
            </div>
            <div className="flex flex-row justify-items-center">
              <div className="text-2xl mr-2">©</div>
              <div className="text-lg">
                created by depsaaa - devChallenge.io 2021
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
