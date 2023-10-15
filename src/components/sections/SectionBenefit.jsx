import React, { useEffect } from "react";
import { landingImg2, arrow } from "../../assets/img/";
import { benefits } from "../../constants/contents/ongoing";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { SplitText } from "gsap-trial/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const sectionBenefit = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const tl = gsap.timeline(
      {
        scrollTrigger: {
          trigger: ".container-content",
          start: "top 100%",
          end: "top 40%",
          scrub: 5,
          // markers: true,
        },
      },
      []
    );

    tl.from(".left-img", { xPercent: -100, yPercent: 150 }).to(".left-img", {
      xPercent: 0,
      yPercent: 0,
      duration: 2,
    });

    // SplitText Animate
    let textToSplit = new SplitText(".title", { types: "chars" });
    let myText = textToSplit.chars;
    let timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".title",
        start: "top 80%",
        end: "top 30%",
      },
    });

    timeLine.from(myText, {
      opacity: 0,
      yPercent: 20,
      duration: 2,
      ease: "back",
      stagger: 0.05,
    });
  }, []);
  return (
    <div className='wrapper pt-[120px]' id='reasons'>
      <div className='text-center'>
        <p className='title text-[#676767] text-xl font-base'>Reasons.</p>
        <h1 className='title text-[32px] mb-8 font-HaasMd'>Why should choose Greenverse?</h1>
      </div>
      <div className='container-content flex justify-between items-start flex-wrap lg:flex-nowrap gap-3'>
        <div className='left-img bg-white w-full lg:w-1/2 flex justify-center rounded-[30px] mr-1 mb-3'>
          <img src={landingImg2} alt='' className='w-[70%] px-6 pt-6' />
        </div>
        <div className='w-full lg:w-1/2 '>
          <div className='right-benefit gap-3 grid grid-cols-2'>
            {benefits.map((benefit) => (
              // eslint-disable-next-line react/jsx-key
              <div className='card pt-[20px] px-[10px] pb-[50px] bg-white rounded-[30px]'>
                <p className='my-[10px] mx-[10px] bg-gradient-to-r from-[#50FF96] to-white inline py-[4px] pl-[12px] pr-5 rounded-full'>
                  {benefit.id}
                </p>
                <h3 className='title-heading my-[10px] mx-[10px] text-2xl  font-HaasMd'>{benefit.title}</h3>
                <p className='my-[10px] mx-[10px]'>{benefit.desc} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default sectionBenefit;
