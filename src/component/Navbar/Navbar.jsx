import React, { useState } from "react";
import Logo from "../../assets/cakeman.png";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cartReducer/cartSelector";
import { NavLink, Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { Transition } from "@headlessui/react";
import Button from "../../component/Button/Button";
import { removeItem } from "../../redux/cartReducer/cartActions";

function Navbar({ cartItems, removeItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setOpenCart(false);
  };
  const handleCartOpen = () => {
    setOpenCart(!openCart);
  };
  return (
    <div className='fixed inset-x-0 top-0 h-24 z-10'>
      <nav className='bg-black'>
        <div className='max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <Link to='/'>
                  <img
                    className='h-20 w-20 rounded-full'
                    src={Logo}
                    alt='Workflow'
                  />
                </Link>
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <NavLink
                    to='/'
                    className=' hover:bg-yellow-700 text-white px-3 py-2 rounded-md font-medium text-2xl indie'
                    exact>
                    Home
                  </NavLink>
                  <NavLink
                    to='/about'
                    className=' hover:bg-yellow-700 text-white px-3 py-2 rounded-md text-2xl indie font-medium'>
                    About
                  </NavLink>
                  <NavLink
                    to='/contact'
                    className=' hover:bg-yellow-700 text-white px-3 py-2 rounded-md text-2xl indie font-medium'>
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={handleCartOpen}
                className='focus:outline-none focus:ring-t mr-2'
                type='button'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10 text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-controls='mobile-menu'
                  aria-expanded='false'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
                <span className='sr-only'>cart option</span>
              </button>
              <button
                onClick={handleClick}
                type='button'
                className='bg-yellow-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-800 focus:ring-white mr-4'
                aria-controls='mobile-menu'
                aria-expanded='false'>
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className='md:flex  justify-end hidden items-center'>
              <button
                onClick={handleCartOpen}
                className='focus:outline-none mr-5 p-2 focus:ring-t'
                type='button'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10 text-white '
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </button>
              <SocialIcon
                url='https://www.facebook.com'
                bgColor='#ffffff'
                className='items-end justify-end'
                style={{ height: 35, width: 35 }}
                target='_blank'
              />
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          {(ref) => (
            <div
              className='md:hidden absolute bg-gray-500 w-full'
              id='mobile-menu'>
              <div
                // ref={ref}
                className='px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center'>
                <NavLink
                  onClick={handleClick}
                  to='/'
                  exact
                  className='text-gray-300 hover:bg-yellow-700 hover:text-white block px-3 py-2 rounded-md text-2xl indie'>
                  Home
                </NavLink>
                <NavLink
                  onClick={handleClick}
                  to='/about'
                  className='text-gray-300 hover:bg-yellow-700 hover:text-white block px-3 py-2 rounded-md text-2xl indie'>
                  About
                </NavLink>
                <NavLink
                  onClick={handleClick}
                  to='/contact'
                  className='text-gray-300 hover:bg-yellow-700 hover:text-white block px-3 py-2 rounded-md text-2xl indie'>
                  Contact
                </NavLink>
              </div>
            </div>
          )}
        </Transition>
        <Transition
          show={openCart}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          {(ref) => (
            <div
              className='absolute bg-gray-900 mt-1 rounded-xl border-white  w-full  md:w-1/3 md:right-0 py-1'
              id='mobile-menu'>
              {cartItems.map((item) => (
                <div
                  // ref={ref}
                  className='px-2 text-center'
                  key={item.id}>
                  <div className='bg-gray-200 rounded'>
                    <div className='flex items-center justify-between mt-1 mb-1'>
                      <img
                        className='h-12 w-12 rounded-full ml-5'
                        src={item.productImages[0]}
                        alt='cartimages'
                      />
                      <div className='w-6/12 items-start flex '>
                        <span className='text-md truncate'>{item.title}</span>
                      </div>
                      <div className='2/12'>
                        <span className='text-md'>{item.price}</span>
                      </div>
                      <div className='w-2/12'>
                        <button
                          className='text-md p-1 mr-5'
                          onClick={() => removeItem(item)}>
                          <span className='text-md md:text-3xl'>&#215;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className='w-full py-5 flex justify-center'>
                <Button>Checkout</Button>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (cartItems) => dispatch(removeItem(cartItems)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
