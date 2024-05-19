'use client';

import React, { useEffect, useState } from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { deleteQuotation, getAllQuotations } from '@/actions/quotation.action';

// export const metadata = {
//   title: 'Quotations',
// };

function Quotations() {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  async function getData() {
    setloading(true);
    const response = await getAllQuotations();
    setdata(response);
    setloading(false);
  }
  async function handleDeleteQuotation(id) {
    seterror(null);
    setloading(true);
    let confirm = window.confirm('Are you sure to delete?');
    if (!confirm) return;
    const { error, success } = await deleteQuotation(id);
    if (error) {
      seterror(error);
    }
    if (success) {
      console.log(success);
      getData();
    }
    setloading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="container py-6">
        {!loading && <>loading...</>}
        <p className="text-red-500"> {error}</p>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sr no.
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Firm Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.length !== 0 &&
              data?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      #{index + 1}
                    </td>
                    <td className="px-6 py-4">{item.firm_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center">
                      <Link
                        href={`/panel/quotation/${item.id}`}
                        className="inline-block ml-2 px-4 py-2 text-blue-500 bg-transparent rounded-md hover:bg-blue-500 hover:text-white transition duration-150 ease-in-out"
                      >
                        <PencilSquareIcon className="w-5" />
                      </Link>

                      <button
                        onClick={() => handleDeleteQuotation(item.id)}
                        type="submit"
                        className="ml-2 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
                      >
                        <TrashIcon className="w-5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Quotations;
