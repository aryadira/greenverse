import React, { useEffect } from "react";
import CardProduct from "../parts/CardProduct";
import { product1, product2, product3, product4 } from "../../assets/img";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";
gsap.registerPlugin(SplitText, ScrollTrigger);
gsap.registerPlugin(SplitText, ScrollTrigger);

const SectionProducts = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".product-card",
        start: "top 100%",
        end: "top 35%",
        // markers: true,
        scrub: 1,
      },
    });

    tl.from(".card1", { yPercent: 100, xPercent: -120 }).to(".card1", {
      yPercent: 0,
      xPercent: 0,
      duration: 1,
    });
    tl.from(".card2", { yPercent: 100, xPercent: -120 }).to(".card2", {
      yPercent: 0,
      xPercent: 0,
      duration: 1,
    });
    tl.from(".card3", { yPercent: 100, xPercent: 120 }).to(".card3", {
      yPercent: 0,
      xPercent: 0,
      duration: 1,
    });
    tl.from(".card4", { yPercent: 100, xPercent: 120 }).to(".card4", {
      yPercent: 0,
      xPercent: 0,
      duration: 1,
    });

    // splittext animation
    let textToSplit = new SplitText(".title", { types: "chars" });
    let myText = textToSplit.chars;
    let timeLine = gsap.timeline(
      {
        scrollTrigger: {
          trigger: ".title",
          start: "top 80%",
          end: "top 30%",
        },
      },
      []
    );

    timeLine.from(
      myText,
      {
        opacity: 0,
        yPercent: 10,
        duration: 1,
        ease: "back.out",
        stagger: 0.03,
      },
      []
    );
  }, []);

  return (
    <div className="  ">
      <div>
        <p className="title text-[#676767] text-xl font-base">Let's Explore</p>
        <p className="title text-[32px] text-[#676767] max-w-md">
          <span className="text-black font-HaasMd">Explore.</span> find your
          favorite products to get the solutions
        </p>
      </div>

      <div className="product-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
        <div className="card1">
          <CardProduct
            number={"1"}
            desc={"Quality seeds for abundant harvests"}
            img={product1}
          />
        </div>
        <div className="card2">
          <CardProduct
            number={"2"}
            desc={"Environmentally friendly fertilizer"}
            img={product2}
          />
        </div>
        <div className="card3">
          <CardProduct
            number={"3"}
            desc={"Quality \n agricultural materials"}
            img={product3}
          />
        </div>
        <div className="card4">
          <CardProduct
            number={"4"}
            desc={"Advanced \n agricultural tools"}
            img={product4}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionProducts;
