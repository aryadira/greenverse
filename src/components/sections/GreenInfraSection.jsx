/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from "react";
import { greenInfra } from "../../constants/contents/services/green-infrastructure";
import { Button } from "../parts";

const GreenInfraSection = () => {
  let number = 1;

  return (
    <div className='border-t border-[#0000004d] grid grid-cols-1 lg:grid-cols-2 gap-20'>
      <div className='bg-white p-12 rounded-[30px] lg:mt-16 h-max w-full relative lg:sticky top-10 lg:top-24'>
        <div className='wrapper'>
          <div className='container '>
            <p className='desc mb-8 text-lg font-HaasMd'>Read the full article or jump to a specific section:</p>
            {greenInfra.map((dataGreen) => (
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

      <div className='articles lg:px-0 px-5'>
        {greenInfra.map((data) => (
          <div className='infrastructure-section pb-12 pt-28' key={data.id} id={data.id_text}>
            <h1 className='max-w-[610px] title text-3xl lg:text-3xl font-HaasMd'>{data.title}</h1>
            <p className='mt-4 max-w-[610px]'>{data.desc}</p>
            {data.content.map((contentSection) => (
              <div className='infrastructure-content' key={contentSection.id}>
                {contentSection.img.map((imgContent) => (
                  <div className='img-content mt-8' key={imgContent.id}>
                    <h1 className='font-HaasMd text-xl'>{imgContent.title_img}</h1>
                    <img className='mt-8' src={imgContent.path} alt='' />
                    <p className='max-w-[710px]'>{imgContent.desc_img}</p>
                  </div>
                ))}
                <p>{contentSection.sub_title}</p>

                {contentSection.paragraph.map((paragraphContent) => (
                  <div className='paragraph mt-4 lg:max-w-[600px] xl:max-w-[716px]' key={paragraphContent.id}>
                    <div className='text'>{paragraphContent.text}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
        <div className='mt-20 my-10 border-t border-b py-20 border-black'>
          <a className='cursor-pointer links max-w-fit text-9xl' href='https://www.usa-shade.com/resources/articles/what-is-green-infrastructure '>
            Sources
          </a>
        </div>
      </div>
    </div>
  );
};

export default GreenInfraSection;
