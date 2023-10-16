/* eslint-disable react/jsx-key */
import React from "react";
import { smartIrrigation } from "../../constants/contents/services/smart-irrigation";
import { Link } from "react-router-dom";
import { Button } from "../parts";

const SmartIrrigation = ({ idText, ...props }) => {
  let number = 1;

  return (
    <div id='top' className='border-t border-[#0000004d] grid grid-cols-1 lg:grid-cols-2 gap-20'>
      <div className='bg-white p-12 rounded-[30px] lg:mt-16 h-max w-full relative lg:sticky top-10 lg:top-24'>
        <div className='wrapper'>
          <div className='container '>
            <p className='desc mb-8 text-lg font-HaasMd'>Read the full article or jump to a specific section:</p>
            {smartIrrigation.map((dataGreen) => (
              <ul className='list-none' key={dataGreen.id}>
                <li className='mt-2 leading-6'>
                  <a href={`#${dataGreen.id_text}`} className='links no-underline'>
                    {number++}.{"     "}
                    {dataGreen.title}
                  </a>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <Button className={`bg-[#313A36] text-white p-2 text-lg rounded-full hover:bg-[#0f231a] mt-10 inline-block `} href='#reasons'>
          Contact us
        </Button>
      </div>

      <div className='container-irrigation mt-4'>
        <div className='irrigation-wrapper pt-80 lg:pt-0 relative '>
          {smartIrrigation.map((data) => (
            <div className='irrigation-section border-b border-[#3d3d3d4d] pt-24' id={data.id_text} key={data.id}>
              <h1 className='max-w-[510px] title text-3xl lg:text-3xl font-HaasMd'>{data.title}</h1>
              {data.content.map((content) => (
                <div className='irrigation-content mt-12' key={content.id}>
                  <p className='text-xl font-HaasMd'>{content.sub_title}</p>

                  {content.paragraph.map((paragraph) => (
                    <div className='text'>
                      <p key={paragraph.id} className='text-sm md:text-base mt-4 lg:max-w-[500px] xl:max-w-[610px]'>
                        {paragraph.text}
                      </p>
                    </div>
                  ))}
                  {content.img.map((imgContent) => (
                    <div className='img mb-12' key={imgContent.id}>
                      <img src={imgContent.path} className='max-w-[290px] h-auto my-8' alt='' />
                      <p className='max-w-[610px]'>{imgContent.desc_img}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
          <div className='mt-20 my-10 border-t border-b py-20 border-black'>
            <a
              className='cursor-pointer links max-w-fit text-9xl'
              href='https://extension.okstate.edu/fact-sheets/smart-irrigation-technology-controllers-and-sensors.html '>
              Sources
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartIrrigation;
