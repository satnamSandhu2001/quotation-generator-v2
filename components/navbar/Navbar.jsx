import { signOut } from '@/auth';
import Link from 'next/link';
import React from 'react';
import ButtonPrimary from '../ui/ButtonPrimary';

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
  return (
    <nav className="z-[60] pt-6">
      <div className="container px-6 rounded-md bg-white bg-opacity-50 backdrop-blur-sm shadow-md py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/panel"
            className="hover:text-primary-200 pr-4 py-2 inline-block font-medium"
          >
            Home
          </Link>
          <ul className="flex items-center justify-end">
            {urls.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    href={item.url}
                    className="hover:text-primary-200 px-4 py-2 inline-block font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <form
                action={async () => {
                  'use server';
                  await signOut();
                }}
              >
                <ButtonPrimary type="submit">Sign Out</ButtonPrimary>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
