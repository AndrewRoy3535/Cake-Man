import React from "react";
import hero_1 from "../../assets/Hero_1.png";
import Button from "../Button/Button";

function Hero() {
  return (
    <section>
      <div className='bg-black text-white py-20'>
        <div className='container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24'>
          <div className='flex flex-col w-full lg:w-1/3 justify-center items-start p-8'>
            <h1 className='text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose'>
              Cake Man
            </h1>
            <h2 className='text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2'>
              Test Remains Timeless Infinity
            </h2>
            <p className='text-sm md:text-base text-gray-50 mb-4'>
              It is a long established fact that a reader will be distracted.
            </p>
            <Button href={"https://m.me/cakeman365"}>Messenger</Button>
          </div>
          <div className='p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center'>
            <div className='h-48 flex flex-wrap content-center justify-center'>
              <img
                className='inline-block mt-24 md:mt-0 p-8 md:p-0'
                src={hero_1}
                alt='tor matha'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
