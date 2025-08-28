/* eslint-disable react/no-children-prop */
import React, { useEffect } from "react";
import { infra1, infra2, infra3, infra4 } from "../../assets/img/";
import check from "../../assets/img/check.png";
import Label from "../parts/Label";
import { Button } from "../parts";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);

const SectionInfrastructure = (props) => {
  useEffect(() => {
    // Animation Tag
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".btn-group",
        start: "top 100%",
        end: "top 52%",
        // markers: true,
        scrub: 1,
      },
    });

    tl.from(".tag1", { xPercent: 200 }).to(".tag1", {
      yPercent: 0,
      xPercent: 0,
      duration: 1,
    });
    tl.from(".tag2", { xPercent: 200 }).to(".tag2", {
      yPercent: 0,
      xPercent: 0,
      duration: 1,
    });
    tl.from(".tag3", { xPercent: 200 }).to(".tag3", {
      yPercent: 0,
      xPercent: 0,
      duration: 1,
    });
    tl.from(".tag4", { xPercent: 200 }).to(".tag4", {
      yPercent: 0,
      xPercent: 0,
      duration: 1,
    });
    tl.from(".tag5", { xPercent: 200 }).to(".tag5", {
      yPercent: 0,
      xPercent: 0,
      duration: 1,
    });
    tl.from(".tag6", { xPercent: 200 }).to(".tag6", {
      yPercent: 0,
      xPercent: 0,
      duration: 1,
    });
    tl.from(".tag7", { xPercent: 500 }).to(".tag7", {
      yPercent: 0,
      xPercent: 0,
      duration: 1,
    });
    tl.from(".tag8", { xPercent: 200 }).to(".tag8", {
      yPercent: 0,
      xPercent: 0,
      duration: 1,
    });

    // SplitText Animation
    let split = new SplitText(".title", { types: "chars" });
    let mySplit = split.chars;
    let time = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top 80%",
        end: "top 30%",
        // markers: true,
      },
    });

    time.to(mySplit, {
      yPercent: 0,
      duration: 1,
      stagger: 0.2,
    });

    // Animation Infra
    gsap.to(".cover1", {
      yPercent: 100,
      scrollTrigger: {
        trigger: ".cover1",
        start: "top 100%",
        end: "top 52%",
        // markers: true,
        scrub: 10,
      },
    });
    gsap.to(".cover2", {
      xPercent: 100,
      scrollTrigger: {
        trigger: ".cover2",
        start: "top 100%",
        end: "top 52%",
        // markers: true,
        scrub: 10,
      },
    });
    gsap.to(".cover3", {
      xPercent: -100,
      scrollTrigger: {
        trigger: ".cover3",
        start: "top 100%",
        end: "top 52%",
        // markers: true,
        scrub: 10,
      },
    });
  });

  return (
    <div className="wrapper">
      <p className="text-[#676767] text-xl font-base">And Then...</p>
      <p className="title text-[32px] text-[#676767] max-w-md">
        <span className="text-black font-HaasMd">Keep Exploring.</span> We have
        any solutions from our services!
      </p>

      <div className="container my-[100px] -top mt-8 grid lg:grid-cols-2 place-content-center col-reverse">
        <div className="left mt-10">
          <img
            src={infra1}
            alt=""
            className="animate-[updown_2s_ease-in-out_infinite]"
          />
        </div>
        <div className="right max-w-[581px]">
          <h1 className="text-[32px] font-HaasMd">
            Green Infrastructure Design
          </h1>
          <p className="max-w-md text-[#676767] text-[18px] my-2 leading-6">
            Green infrastructure integrates plants and other natural elements to
            make urban spaces more sustainable and environmentally friendly.
          </p>
          <div className="btn-group">
            <div className="flex gap-2">
              <div className="tag1">
                <Label title="Parks and urban forest" />
              </div>
              <div className="tag2">
                <Label title="Bioswales and rain gardens" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="tag3">
                <Label title="Forests and nature reserves" />
              </div>
              <div className="tag4">
                <Label title="Green Transportation" />
              </div>
            </div>
            <div className="third flex gap-2">
              <div className="tag5">
                <Label title="Wetlands and constructed wetlands" />
              </div>
              <div className="tag6">
                <Label title="Green streets" />
              </div>
            </div>
            <div className="fourth flex gap-2">
              <div className="tag7">
                <Label title="Green roofs and walls" />
              </div>
              <div className="tag8">
                <Label title="Wildlife habitats and corridors" />
              </div>
            </div>
          </div>
          <Button
            className={`bg-[#313A36] text-white hover:bg-[#0f231a] inline-block mt-7`}
            link="/services/green-infrastructure"
          >
            Learn more
          </Button>
        </div>
      </div>

      <div className="container my-[100px] flex w-full justify-evenly items-center flex-wrap ">
        <div className="left-content w-full md:w-[35%] py-10 relative">
          <div className="cover1 w-full h-full absolute bg-[#F5F5F7]"></div>
          <h2 className="text-[30px] font-HaasMd w-full ">
            Smart Irrigation Technology
          </h2>
          <p className="w-full text-[18px] my-2 leading-6 text-[#676767]">
            There is a broad spectrum of smart irrigation technology that
            consumers can benefit from utilizing. Choosing the correct
            technology for the situation is essential to achieve potential water
            savings.
          </p>
          <div className="btn-left mt-10">
            <Button
              className={`bg-[#313A36] text-white hover:bg-[#0f231a] inline mt-7`}
              link="/services/smart-irrigation"
            >
              Learn more
            </Button>
          </div>
        </div>
        <div className="left-content w-full md:w-[50%] flex justify-end ">
          <img
            src={infra2}
            alt=""
            className="animate-[updown_2s_ease-in-out_infinite]"
          />
        </div>
      </div>

      <div className="container my-[100px] flex w-full justify-evenly items-center flex-wrap flex-col-reverse md:flex-row">
        <div className="left-content w-full md:w-[35%] flex justify-end">
          <img
            src={infra3}
            alt=""
            className="animate-[updown_2s_ease-in-out_infinite]"
          />
        </div>
        <div className="right-content w-full md:w-[35%] py-10 relative">
          <div className="cover2 w-full h-full absolute bg-[#F5F5F7]"></div>
          <h2 className="text-[30px] font-HaasMd w-full">
            Agriculture Plantation
          </h2>
          <p className="w-full text-[18px] my-2 leading-6 text-[#676767]">
            Plantation agriculture is the clearing of forest or land to create
            an area of farming for one specific crop, which is grown on a large
            scale.
          </p>
          <div className="btn-left mt-10">
            <Button
              className={`bg-[#313A36] text-white hover:bg-[#0f231a] inline mt-7`}
              link="/services/agriculture-plantation"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>

      <div className="container my-[100px] flex w-full justify-evenly items-center flex-wrap">
        <div className="left-content w-full md:w-[35%] mt-10 relative">
          <div className="cover3 w-full h-[150%] absolute bg-[#F5F5F7]"></div>
          <h2 className="text-[30px] font-HaasMd w-full">Vertical Farming</h2>
          <p className="w-full text-[18px] my-2 leading-6 text-[#676767]">
            Vertical farming is an innovative method of growing crops and plants
            by stacking them on vertical multi-level racks inside a
            controlled-environment building.
          </p>
          <div className="btn-left mt-10">
            <Button
              className={`bg-[#313A36] text-white hover:bg-[#0f231a] inline mt-7`}
            >
              Learn more
            </Button>
          </div>
        </div>
        <div className="left-content w-full md:w-[35%] py-10">
          <img
            src={infra4}
            alt=""
            className="animate-[updown_2.8s_ease-in-out_infinite]"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionInfrastructure;
