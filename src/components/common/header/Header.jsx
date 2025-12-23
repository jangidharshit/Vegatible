import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [bar, setBar] = useState(false);
  const totalItems = useSelector(state => state.cart.totalItems);
  const location = useLocation();

  // 🔥 Route change hote hi menu close
  useEffect(() => {
    setBar(false);
  }, [location.pathname]);

  return (
    <div>
      {/* Top bar */}
      <div className='md:container md:mx-auto hidden lg:flex lg:justify-between text-white text-sm main p-4 top box-border'>
        <div className='flex'>
          <div>
            <span className='fas fa-map-marker-alt secondary pr-3 pl-2'></span>
            <span>123 Street, New York</span>
          </div>
          <div>
            <span className='fas fa-envelope secondary pr-3 pl-4'></span>
            <span>Email@Example.com</span>
          </div>
        </div>
        <div className='pr-4'>
          <span className='hov'>Privacy Policy</span> /
          <span className='hov pl-2'>Terms of Use</span> /
          <span className='hov pl-2'>Sales and Refunds</span>
        </div>
      </div>

      {/* Logo */}
      <div className='main-text text-3xl sm:text-4xl font-extrabold m-6'>
        <Link to='/'>Fruitables</Link>
      </div>

      {/* Navbar */}
      <ul
        className={`xl:flex xl:justify-center xl:items-center relative 
        ${bar ? 'bar-menu flex flex-col bg-white right-0' : 'hidden xl:flex xl:flex-row'}`}
      >
        <li className='px-4 text-gray-500 nav-hov'>
          <Link to='/'>Home</Link>
        </li>

        <li className='px-4 text-gray-500 nav-hov'>
          <Link to='/shop'>Shop</Link>
        </li>

        <li className='px-4 text-gray-500 nav-hov'>
          <Link to='/shop-detail'>Shop Detail</Link>
        </li>

        <li className='px-4 text-gray-500 nav-hov relative pages'>
          <span className='cursor-pointer'>
            Pages <i className='fa fa-angle-down pl-1'></i>
          </span>

          <ul className='absolute inside rounded-md top-10 bg-gray-200 xl:py-2 pl-3 pr-8'>
            <li className='p-1 li-hov'><Link to='/cart'>Cart</Link></li>
            <li className='p-1 li-hov'><Link to='/checkout'>Checkout</Link></li>
            <li className='p-1 li-hov'><Link to='/testimonial'>Testimonial</Link></li>
            <li className='p-1 li-hov'><Link to='/error'>404 Page</Link></li>
          </ul>
        </li>

        <li className='px-4 text-gray-500 nav-hov'>
          <Link to='/contact'>Contact</Link>
        </li>

        <div className={`xl:pl-20 xl:flex ${bar ? 'flex bg-white' : 'hidden'}`}>
          <span className='fa fa-search main-text p-5 mr-2 mt-2 w-10 h-10 border flex justify-center items-center'></span>

          <Link to='/cart' className='fa fa-shopping-bag fa-2x main-text p-3 relative'>
            <span className='absolute top-2 right-0 w-6 h-6 text-xs flex justify-center items-center text-green-600'>
              {totalItems}
            </span>
          </Link>

          <span className='fas fa-user fa-2x main-text p-3'></span>
        </div>
      </ul>

      {/* Mobile menu button */}
      <i
        className='fa fa-bars xl:hidden bars py-1 px-4 text-xl cursor-pointer'
        onClick={() => setBar(!bar)}
      ></i>
    </div>
  );
};

export default Header;
