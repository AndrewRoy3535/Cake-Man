import React from "react";

function About() {
  return (
    <main className='grid h-screen place-items-center relative bg-gradient-to-r from-yellow-400 to-yellow-500 z-0'>
      <div className='absolute h-4/5 w-9/12 transform bg-yellow-200 rounded-full overflow-hidden shadow-xl'>
        <div className='absolute h-screen w-96 transform rotate-12 bg-yellow-500 bottom-0 -left-40'></div>
        <div className='absolute h-screen w-96 transform rotate-12 bg-yellow-400 top-0 -right-40'></div>
      </div>
      <div className='relative h-96 w-96'>
        <div className='card bg-cyan-400 shadow-md inline-block w-96 h-96 rounded-3xl absolute bottom-0 transform -rotate-12'></div>
        <div className='card bg-indigo-400 shadow-lg inline-block w-96 h-96 rounded-3xl absolute bottom-0 transform -rotate-6'></div>
        <div className='card bg-pink-500 shadow-lg inline-block w-96 h-96 rounded-3xl absolute bottom-0 transform rotate-6'></div>
        <div className='card bg-white transition shadow-xl w-96 h-96 rounded-3xl absolute bottom-0 z-10 grid place-items-center'>
          <div className='card bg-white shadow-inner h-4/5 w-3/4 rounded-2xl overflow-hidden relative'>
            <h1 className='shadow-md text-xl font-thin text-center text-gray-600 uppercase p-3 indie'>
              About us
            </h1>
            <p className='text-center p-3 '>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              aspernatur assumenda totam illo dolore id officia voluptatum
              ratione magnam dignissimos iusto itaque, architecto dolorum
              similique repellendus quaerat, commodi excepturi aut.
            </p>
            <button className='card bg-gray-700 hover:bg-gray-600 transition text-gray w-full h-1/6 absolute bottom-0 '>
              Back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
