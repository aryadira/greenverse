/* eslint-disable react/jsx-key */
import React from "react";
import { plantation } from "../../constants/contents/services/plantation";
import { Button } from "flowbite-react";

const Plantation = () => {
  let number = 1;
  let numParagraph = 1;

  return (
    <div className='border-t border-[#0000004d] grid grid-cols-1 lg:grid-cols-2 gap-20'>
      <div className='bg-white p-12 rounded-[30px] lg:mt-16 h-max w-full relative lg:sticky top-10 lg:top-24'>
        <div className='wrapper'>
          <div className='container '>
            <p className='desc mb-8 text-lg font-HaasMd'>Read the full article or jump to a specific section:</p>
            {plantation.map((dataPlant) => (
              <ul className='list-none' key={dataPlant.id}>
                <li className='mt-2 leading-6'>
                  <a href={`#${dataPlant.id_text}`} className='links no-underline'>
                    {number++}.{"     "}
                    {dataPlant.title}
                  </a>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className='container-plantation lg:pt-0 mt-4'>
        <div className='plantation-wrapper'>
          {plantation.map((data) => (
            <div className='plantation section relative pt-28' key={data.id} id={data.id_text}>
              <h1 className='text-[28px] lg:text-3xl font-HaasMd'>
                {numParagraph++}.{"    "}
                {data.title}
              </h1>
              <p className='mb-4 max-w-[400px] lg:max-w-[420px] xl:max-w-[690px]'>{data.desc}</p>
              {data.content.map((contentList) => (
                <div className='plantation-contentList mt-6' key={contentList.id}>
                  <h1 className='text-lg md:text-xl font-HaasMd'>{contentList.sub_title}</h1>
                  {contentList.paragraph.map((paragraphList) => (
                    <p className='max-w-[600px]' key={paragraphList.id}>
                      {paragraphList.text}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          ))}
          <div className='mt-20 my-10 border-t border-b py-20 border-black'>
            <a
              className='cursor-pointer links max-w-fit text-9xl'
              href='https://www.hellovaia.com/explanations/human-geography/agricultural-geography/plantation-agriculture/ '>
              Sources
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plantation;
