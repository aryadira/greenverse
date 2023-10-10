import React from 'react'

const items = [1,2,3,4,5,6];

const Marquee = () => {
  return (
    <div className='marquee text-white uppercase font-bold text-lg px-0 py-3 overflow-hidden w-full h-[100px]'>
        <div className="marquee_inner my-auto w-fit flex items-center flex-row antialiased bg-[#222] ">
        {items.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <div className="marquee_part flex items-center flex-shrink-0 px-4 font-smooth">
                <svg className='pr-5' xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                <path d="M33.61 0L35.28 14.81C36.29 23.82 43.4 30.92 52.41 31.94L67.22 33.61L52.41 35.28C43.4 36.29 36.3 43.4 35.28 52.41L33.61 67.22L31.94 52.41C30.93 43.4 23.82 36.3 14.81 35.28L0 33.61L14.81 31.94C23.82 30.93 30.92 23.82 31.94 14.81L33.61 0Z" fill="white"/>
                </svg>The Greening World Will Come With Us
            </div>
        ))}
        </div>
    </div>
  )
}

export default Marquee