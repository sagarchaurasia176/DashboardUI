import gsap from "gsap";
import React, { useRef } from "react";
import { subHeader } from "../../apis/HeroData";

const HeroSections = () => {
  // common way to used the gsap
  //   const titleRef = useRef();
  //   gsap.to(titleRef.current, {
  //     scale: 0,
  //     translateX: 2,
  //   });
  return (
    <>
      <div className="  h-screen">
        <div className="pointer-events-none inset-0  p-12">
          {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "> */}
          <h1 className="text-12xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-400 to-slate-900 text-center">
            {subHeader.decp}
          </h1>
          <h1 className="text-4xl sm:text-7xl text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-3   ">
            {subHeader.next}
          </h1>
          <div className=" text-white font-thin text-center text-2xl">
            <span>{subHeader.para}</span>
          </div>
          {/* <h1 className=" text-center">{subHeader.next}</h1> */}
        </div>
      </div>
    </>
  );
};

export default HeroSections;
