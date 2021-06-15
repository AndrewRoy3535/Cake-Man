import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../redux/cartReducer/cartSelector";
import { createStructuredSelector } from "reselect";
import CheckoutPreview from "../component/CheckoutPreview/CheckoutPreview";
import { selectCartTotal } from "../redux/cartReducer/cartSelector";
function Checkout({ cartItems, total }) {
  return (
    <div className='py-12 '>
      <div className='max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl'>
        <div className='md:flex '>
          <div className='w-full p-4 px-5 py-5'>
            <div className='md:grid md:grid-cols-1 gap-2 '>
              <div className='col-span-2 p-5'>
                <h1 className='text-xl font-medium '>Shopping Cart</h1>
                {/* map starts here */}
                {cartItems.map((el) => (
                  <CheckoutPreview items={el} key={el.id} />
                ))}

                {/* map ends here */}
                <div className='flex justify-between items-center mt-6 pt-6 border-t'>
                  <div className='flex items-center'>
                    {" "}
                    <i className='fa fa-arrow-left text-sm pr-2'></i>{" "}
                    <span className='text-md font-medium text-blue-500'>
                      Continue Shopping
                    </span>{" "}
                  </div>
                  <div className='flex justify-center items-end'>
                    {" "}
                    <span className='text-sm font-medium text-gray-400 mr-1'>
                      Subtotal:
                    </span>{" "}
                    <span className='text-lg font-bold text-gray-800 '>
                      {" "}
                      ${Math.floor(total)}
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
