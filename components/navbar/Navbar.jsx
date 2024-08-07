'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import ButtonPrimary from '../ui/ButtonPrimary';
import { logout } from '@/actions/auth.action';

const urls = [
  {
    url: '/panel/quotation',
    label: 'New Quotation',
  },
  {
    url: '/panel/quotations',
    label: 'Quotations',
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const touchRef = useRef(null);

  useEffect(() => {
    // handle close items-bar on clicking outside
    function handleClickOutside(event) {
      if (touchRef.current && !touchRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [touchRef]);

  return (
    <nav ref={touchRef} className="py-6">
      <div className="relative z-[60] container px-6 rounded-md bg-white bg-opacity-70 backdrop-blur-sm shadow-md py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/panel"
            className="hover:text-primary-200 pr-4 py-2 inline-block font-medium"
          >
            Home
          </Link>

          <ul
            className={`absolute ${
              open ? 'top-[calc(100%+5px)]' : 'top-[-200px]'
            } transition-[top] ease-in duration-500 left-0 bg-white rounded-md w-full overflow-hidden shadow-md sm:shadow-none sm:static sm:bg-transparent sm:w-fit py-4 sm:py-0 flex flex-col sm:flex-row items-center justify-end`}
          >
            {urls.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    onClick={() => {
                      setOpen(false);
                    }}
                    href={item.url}
                    className="hover:text-primary-200 px-4 py-2 inline-block font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2 sm:mt-0 sm:ml-2">
              <ButtonPrimary
                onClick={() => {
                  logout();
                }}
              >
                Sign Out
              </ButtonPrimary>
            </li>
          </ul>

          {/* hamburger */}
          <div
            onClick={() => setOpen(!open)}
            className="transition-all duration-500 ease-in order-3 text-lg flex flex-col space-y-[0.2rem]  cursor-pointer items-center font-semibold sm:hidden"
          >
            <div
              className={` ${
                open && 'rotate-45 translate-y-[5px] '
              } relative rounded-xl origin-center transition-all duration-500 ease-in w-4 h-[0.1125rem] fill-dark-100 text-dark-100 bg-dark-100`}
            ></div>
            <div
              className={` ${
                open && 'opacity-0 translate-x-20'
              } relative rounded-xl origin-center transition-all duration-1000 ease-in-out w-4 h-[0.1rem] fill-dark-100 text-dark-100 bg-dark-100 `}
            ></div>
            <div
              className={` ${
                open && '-rotate-45 -translate-y-[5px]'
              } relative rounded-xl origin-center transition-all duration-500 ease-in w-4 h-[0.1125rem] fill-dark-100 text-dark-100 bg-dark-100`}
            ></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
