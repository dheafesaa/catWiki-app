import React from "react";
import Image from "next/image";
import img1 from "../../assets/image/image1.png";
import img2 from "../../assets/image/image2.png";
import img3 from "../../assets/image/image3.png";

const About = () => {
  return (
    <div className="pl-20 pr-20 flex flex-wrap justify-between">
      <div className="flex flex-col mt-36">
        <div className="text-4xl font-bold w-72">
          Why should you have a cat?
        </div>
        <div className="text-lg font-medium w-[25rem] mt-12">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </div>
        <div className="text-lg font-bold mt-10 text-[#29150799]">
          READ MORE
        </div>
      </div>
      <div className="flex justify-between mt-16">
        <div className="flex-col">
          <div className="flex-1 h-48 w-72">
            <Image src={img2} alt="Image 2" />
          </div>
          <div className="flex-1 h-80 w-52 mt-4 ml-20">
            <Image className="" src={img1} alt="Image 1" />
          </div>
        </div>
        <div className="flex-1 h-80 w-64 ml-8">
          <Image className="" src={img3} alt="Image 3" />
        </div>
      </div>
    </div>
  );
};

export default About;
