import React, {useEffect} from "react";
import CardProduct from "../parts/CardProduct";
import { product1, product2, product3, product4 } from "../../assets/img";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";
gsap.registerPlugin(SplitText, ScrollTrigger)

const SectionProducts = () => {
  
  const ourText = new SplitText('#heading', { types: 'chars' });
  const el = ourText.chars

  useEffect(() => {
  gsap.from(
    el,
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
    <div>
      <p className='text-[#676767] text-xl font-base'>Let's Explore</p>
      <p className='text-[32px] text-[#676767] max-w-md'>
        <span className='text-black'>Explore.</span> find your favorite products to get the solutions
      </p>
      <div className='card'>
        <div className='product-card gap-6 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 my-12'>
          <CardProduct number={"1"} desc={"Quality seeds for abundant harvests"} img={product1} />
          <CardProduct number={"2"} desc={"Environmentally friendly fertilizer"} img={product2} />
          <CardProduct number={"3"} desc={"Quality \n agricultural materials"} img={product3} />
          <CardProduct number={"4"} desc={"Advanced \n agricultural tools"} img={product4} />
        </div>
      </div>
    </div>
  );
};

export default SectionProducts;
