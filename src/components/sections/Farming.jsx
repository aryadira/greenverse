/* eslint-disable react/jsx-key */
import React from "react";
import { verticalFarming } from "../../constants/contents/services/vertical-farming";

const Farming = () => {
  let number = 1;

  return (
    <div className='border-t border-[#0000004d] grid grid-cols-1 lg:grid-cols-2 gap-20'>
      <div className='bg-white p-12 rounded-[30px] lg:mt-16 h-max w-full relative lg:sticky top-10 lg:top-24'>
        <div className='wrapper'>
          <div className='container '>
            <p className='desc mb-8 text-lg font-HaasMd'>Read the full article or jump to a specific section:</p>
            {verticalFarming.map((vertical) => (
              <ul className='list-none' key={vertical.id}>
                <li className='mt-2 leading-6'>
                  <a href={`#${vertical.id_text}`} className='links no-underline'>
                    {number++}.{"     "}
                    {vertical.title}
                  </a>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className='container-farming mt-4'>
        <div className='farming-wrapper pt-80 lg:pt-0 relative'>
          {verticalFarming.map((data) => (
            <div className='irrigation-section border-b-[2px] pb-8 border-[#3d3d3d4d] pt-16' id={data.id_text} key={data.id}>
              <h1 className='max-w-[510px] title text-3xl lg:text-3xl font-HaasMd lg:mt-8 mb-4 '>{data.title}</h1>
              {data.desc.map((descContent) => (
                <p className='desc mt-4 max-w-[510px]' key={descContent.id}>
                  {descContent.text}
                </p>
              ))}
              {data.content.map((contentList) => (
                <div className='content'>
                  <div className='text'>
                    <h2 className='font-HaasMd text-2xl mt-4'>{contentList.sub_title}</h2>
                    {contentList.paragraph.map((paragraphContent) => (
                      <p className='text max-w-[710px]'>{paragraphContent.text}</p>
                    ))}
                  </div>

                  <div className='img my-7'>
                    <img src={contentList.img} className='max-w-[300px]' alt='' />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Farming;
