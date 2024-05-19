'use client';
import React, { useEffect, useState } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PdfDocument from './Invoice';
import { newQuotation, updateQuotation } from '@/actions/quotation.action';

export default function Main(props) {
  const [windowDimentions, setwindowDimentions] = useState({ x: 0, y: 0 });
  const fileName = `${props.firm_name}.pdf`;

  useEffect(() => {
    setwindowDimentions({ x: window.innerWidth, y: window.innerHeight });
  }, []);

  return (
    <div className="text-center">
      <PDFViewer
        width={windowDimentions.x}
        height={windowDimentions.y}
        showToolbar={false}
      >
        <PdfDocument {...props} />
      </PDFViewer>

      <PDFDownloadLink
        document={<PdfDocument {...props} />}
        fileName={fileName}
      >
        {({ loading }) =>
          loading ? (
            'Loading...'
          ) : (
            <button
              type="button"
              onClick={async () => {
                if (props.isNewData.isNew) {
                  await newQuotation({
                    firm_name: props.firm_name,
                    total: props.total,
                    particulars: props.particulars,
                  });
                } else {
                  await updateQuotation({
                    id: props.isNewData.id,
                    firm_name: props.firm_name,
                    total: props.total,
                    particulars: props.particulars,
                  });
                }
              }}
              className="bg-primary-100 px-6 py-3 rounded-md my-8 hover:bg-primary-200 text-white duration-300 no-underline font-extrabold"
            >
              Download Quotation
            </button>
          )
        }
      </PDFDownloadLink>

      <button
        onClick={() => {
          props.getBack();
        }}
        className="font-semibold bg-primary-100 text-white fixed top-7 left-7 rounded-full flex justify-center gap-1 items-center aspect-square h-14 shadow-lg px-6 py-3 "
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13 14l-4 -4l4 -4" />
            <path d="M8 14l-4 -4l4 -4" />
            <path d="M9 10h7a4 4 0 1 1 0 8h-1" />
          </svg>
        </span>{' '}
        Back
      </button>
    </div>
  );
}
