import Link from "next/link";
import React from "react";
import {
  RiFacebookFill,
  RiWhatsappFill,
  RiInstagramFill,
  RiTwitterFill,
  RiGithubFill,
  RiLinkedinFill,
  RiDribbbleFill,
} from "react-icons/ri";
const SocialIcons = () => {
  return (
    <div className="flex gap-6 pr-4 ">
      <Link
        href={"/"}
        className="text-[blue] text-2xl hover:scale-150 transition-all duration-500 "
      >
        <RiFacebookFill />
      </Link>
      <Link
        href={"/"}
        className="text-[#ff8f4e] text-2xl hover:scale-150 transition-all duration-500 "
      >
        <RiInstagramFill />
      </Link>
      <Link
        href={"/"}
        className="text-[#6060b3] text-2xl hover:scale-150 transition-all duration-500 "
      >
        <RiTwitterFill />
      </Link>
      <Link
        href={"/"}
        className="text-[#6180e6] text-2xl hover:scale-150 transition-all duration-500 "
      >
        <RiLinkedinFill />
      </Link>
      <Link
        href={"/"}
        className="text-[green] text-2xl hover:scale-150 transition-all duration-500 "
      >
        <RiWhatsappFill />
      </Link>
      <Link
        href={"/"}
        className="text-[black] text-2xl hover:scale-150 transition-all duration-500 "
      >
        <RiGithubFill />
      </Link>
    </div>
  );
};

export default SocialIcons;
