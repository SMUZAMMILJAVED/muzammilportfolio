import { MoveRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import SocialIcons from "./SocialIcons";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-padd-container">
      <div>
        <div>
          <h1>From Pixels to Perfection Exploring the Essence of Web Design</h1>
          <p>
            Explore my portfolio where creativity and functionality converge,
            showcasing innovative web development projects crafted with
            precision and passion for digital excellence.
          </p>
          <div>
            <Button className='gap-x-2 shadow-xl '>
             Hire me <MoveRight size={20}/>
            </Button>
            <Button className='shadow-xl bg-black hover:bg-[#222] text-white'>
                Download CV
            </Button>
          </div>
          <div> 
            <SocialIcons/>
          </div>
        </div>
        <div>
            <div>
                <Image src={'/bg.png'} height={488} width={488} priority alt="" className="drop-shadow-sm"></Image>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
