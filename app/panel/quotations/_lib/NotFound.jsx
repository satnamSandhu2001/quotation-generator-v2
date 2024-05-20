import ButtonSecondary from '@/components/ui/ButtonSecondary';
import Link from 'next/link';
import React from 'react';

function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-white shadow-lg w-fit rounded-md mx-auto px-8 py-6 sm:px-16 sm:py-10 flex flex-col items-center">
        <p className="mb-5 text-2xl text-dark-200 font-medium">
          No Quotations Found!
        </p>
        <Link href="/panel/quotation">
          <ButtonSecondary>Create New</ButtonSecondary>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
