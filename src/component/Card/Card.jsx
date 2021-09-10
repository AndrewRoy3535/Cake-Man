import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cartReducer/cartActions";
import { Link } from "react-router-dom";

function Card({ item, addItem }) {
  const { title, price, productImages, des } = item;

  return (
    <div className='p-5 transform hover:-translate-y-0.5 transition-transform duration-25 ease-in-out'>
      <div className='max-w-sm rounded-md overflow-hidden shadow-lg'>
        <img
          className='w-full h-96'
          src={productImages[0]}
          alt='productsImage'
        />
        <div className='px-6 py-4'>
          <h4 className='mt-1 text-xl font-semibold uppercase leading-tight truncate'>
            {title}
          </h4>
          <p className='text-sm line-clamp-3'>{des}</p>
          <div className='mt-1 flex'>
            $ {price} /per pound
            <div className='ml-1'>
              {/* <div className='flex'>
                <button className='text-white text-center text-md font-semibold  px-3 bg-gray-800 focus:bg-gray-600 focus:outline-none border border-gray-800 focus:border-gray-600'>
                  -
                </button>
                <div className='flex w-2/12 mr-1 ml-1'>
                  <span>1</span>
                </div>
                <button className='text-white text-center text-md font-semibold  px-3 bg-gray-800 focus:bg-gray-600 focus:outline-none border border-gray-800 focus:border-gray-600'>
                  +
                </button>
                <span className='text-gray-600 text-sm pl-1'>/pound</span>
              </div> */}
            </div>
          </div>
          <div className='mt-4'>
            <span className='text-teal-600 text-md font-semibold'>
              5 start{" "}
            </span>
            <Link to='/viewmore' className='text-sm text-gray-600'>
              (View more)
            </Link>
          </div>
          <div className='inline-flex w-full justify-start py-3'>
            <a
              href='https://m.me/cakeman365'
              target='_blank'
              rel='noopener noreferrer'>
              <button
                className=' 
              bg-gray-800  hover:bg-black text-yellow-300 hover:text-yellow-300 rounded-xl shadow hover:shadow-lg py-4 px-4 border border-yellow-300 hover:border-transparent'>
                Messenger
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispathchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispathchToProps)(Card);
