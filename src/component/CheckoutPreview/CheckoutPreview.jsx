import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "../../redux/cartReducer/cartActions";

function CheckoutPreview({ items, increseItems, decreaseItems }) {
  const { price, title, quantity, productImages } = items;
  return (
    <div className='flex justify-between items-center pt-6 mt-6 border-t'>
      <div className='flex items-center'>
        {" "}
        <img
          src={productImages[0]}
          width='60'
          className='rounded-full'
          alt='img'
        />
        <div className='flex flex-col ml-3 '>
          {" "}
          <span className='text-md font-medium w-auto'>{title}</span>{" "}
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='pr-8 flex'>
          {" "}
          <span
            className='font-semibold cursor-pointer'
            onClick={() => decreaseItems(items)}>
            -
          </span>{" "}
          <span className='focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2'>
            {quantity}
          </span>{" "}
          <span
            className='font-semibold cursor-pointer'
            onClick={() => increseItems(items)}>
            +
          </span>{" "}
        </div>
        <div className='pr-8'>
          {" "}
          <span className='text-xs font-medium cursor-pointer'>
            {price}
          </span>{" "}
        </div>
        <div>
          {" "}
          <i className='fa fa-close text-xs font-medium'></i>{" "}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  increseItems: (items) => dispatch(addItem(items)),
  decreaseItems: (items) => dispatch(removeItem(items)),
});

export default connect(null, mapDispatchToProps)(CheckoutPreview);
