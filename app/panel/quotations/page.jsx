'use client';

import React, { useEffect, useState } from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { deleteQuotation, getAllQuotations } from '@/actions/quotation.action';
import toast from 'react-hot-toast';
import QuotationsSkelton from '@/components/ui/skelton/quotation/QuotationsSkelton';
import NotFound from './_lib/NotFound';

function Quotations() {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);

  async function getData() {
    setloading(true);
    const response = await getAllQuotations();
    setdata(response);
    setloading(false);
  }
  async function handleDeleteQuotation(id) {
    let confirm = window.confirm('Are you sure to delete?');
    if (!confirm) return;
    const toastId = toast.loading('Deleting...');
    const response = await deleteQuotation(id);
    if (response?.error) {
      toast.error(response.error, {
        id: toastId,
      });
    }
    if (response?.success) {
      toast.success('Quotation Deleted', {
        id: toastId,
      });
      getData();
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <title>Quotations</title>

      <div className="container py-6">
        <div className="overflow-x-auto">
          {data?.length !== 0 && (
            <table className="w-full overflow-x-hidden overflow-y-auto divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-fit whitespace-nowrap">
                    Sr no.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-full">
                    Firm Name
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="px-6 py-4 w-fit whitespace-nowrap">
                        {index + 1}.
                      </td>
                      <td className="px-6 py-4 w-full">{item.firm_name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        ₹{item.total}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap flex items-center justify-end">
                        <Link
                          href={`/panel/quotation/${item.id}`}
                          className="inline-block ml-2 p-2 text-blue-500 bg-transparent rounded-md hover:bg-blue-500 hover:text-white transition duration-150 ease-in-out"
                        >
                          <PencilSquareIcon className="w-5" />
                        </Link>

                        <button
                          onClick={() => handleDeleteQuotation(item.id)}
                          type="submit"
                          className="ml-2 p-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
                        >
                          <TrashIcon className="w-5 p-0.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
          {data?.length == 0 && <NotFound />}
        </div>
        {loading && <QuotationsSkelton />}
      </div>
    </>
  );
}

export default Quotations;
