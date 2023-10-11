import React, { useState, useEffect, useRef } from "react";
import { landingImg1 } from "../../assets/img";
import ButtonDark from "../parts/ButtonDark";
import ButtonLight from "../parts/ButtonLight";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";
gsap.registerPlugin(SplitText, ScrollTrigger)


const SectionLanding = () => {
  const ourText = new SplitText('.left-title', { types: 'chars' });
  const chars = ourText.chars

  useEffect(() => {
  gsap.from(
    chars,
    { 
      yPercent: 30,
      stagger: 0.02,
      ease: "back.out",
      duration: 1,
      opacity: 0
      // scrollTrigger: {
      //   trigger: ".left-title",
      //   markers: true,
      //   start: "top 20%",
      //   scrub: true
      // }
    }
  )
  }, []);

  return (
    <div className="wrapper flex justify-between items-center flex-wrap">
      <div className="left">
        <h1 className="left-title text-6xl leading-tight">
          Providing Solutions for <br /> Greening the World
        </h1>
        <h1 className="left-desc font-medium mt-[17px] max-w-lg leading-6">
          We are fully prepared to be the main facilitator in realizing a
          greener world in the future by committing to developing innovative,
          sustainable and environmentally friendly solutions.
        </h1>
        <div className="btn flex items-cent31er">
          <ButtonDark title={"Get Started"} />
          <ButtonLight title={"Explore"} />
        </div>
      </div>
      <div className="right md:w-[550px] w-[200px] my-10">
        <img src={landingImg1} />
      </div>
    </div>
  );
};

export default SectionLanding;
