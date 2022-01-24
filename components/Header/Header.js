import React from "react";
import Image from "next/image";
import blackCat from "../../assets/image/black.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row pt-6 relative">
      <div className="self-center text-2xl">CatWiki</div>
      <div className="w-10 ml-2">
        <Image src={blackCat} alt="Black Cat" />
      </div>
      <Link href="/">
        <a className="absolute inset-0">
          {/* <!-- Write your comments here --> */}
        </a>
      </Link>
    </div>
  );
};

export default Header;
