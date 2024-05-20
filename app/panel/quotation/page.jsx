'use client';

import React, { useEffect, useState } from 'react';
import { quotationsSchema } from '@/lib/zod/schema';
import dynamic from 'next/dynamic';
const Component = dynamic(() => import('./_lib/Component'), { ssr: false });

const initialParticularValue = [
  {
    title: 'responsive design',
    price: 5000,
    description: 'Desktop, Tablet, Mobile Responsive 5 Pages Design',
  },
  {
    title: 'Customer Inquiry form with email integration',
    price: 1500,
    description: 'Visitors can inquire through Customer Support form',
  },
  {
    title: 'Domain and hosting & SSL certificate',
    price: 1500,
    description: 'Domain and hosting included yearly renewal + SSL certificate',
  },
];

export default function Quotation() {
  const [firm_name, setfirm_name] = useState('');
  const [total, settotal] = useState(0);
  const [particulars, setparticulars] = useState(initialParticularValue);
  const [errors, seterrors] = useState(null);

  const [showPdf, setshowPdf] = useState(false);

  const handleTotal = (items) => {
    let _total = 0;
    if (items) {
      items.forEach((element) => {
        _total += Number(element.price);
      });
    } else {
      particulars.forEach((element) => {
        _total += Number(element.price);
      });
    }
    settotal(Number(_total));
  };
  const handleFirm_name = (e) => {
    setfirm_name(e.target.value);
  };
  const handlePriceChange = (e, i) => {
    let _particular = [...particulars];
    let newValue = parseInt(e.target.value) || 0;
    if (newValue < 0) return;
    e.target.value = newValue.toString();
    _particular[i]['price'] = newValue;
    setparticulars([..._particular]);
    handleTotal(_particular);
  };

  const handleTitleChange = (e, i) => {
    let _particular = [...particulars];
    _particular[i]['title'] = e.target.value;
    setparticulars([..._particular]);
  };

  const handleDescriptionChange = (e, i) => {
    let _particular = [...particulars];
    _particular[i]['description'] = e.target.value;
    setparticulars([..._particular]);
  };

  const handleDeleteRow = (i) => {
    let _particulars = [...particulars];

    if (particulars.length <= 1) {
      _particulars = [{ title: '', price: 0, description: '' }];
      setparticulars(_particulars);
      handleTotal(_particulars);
      return;
    }
    _particulars.splice(i, 1);
    setparticulars([..._particulars]);
    handleTotal(_particulars);
  };
  const handleAddRow = () => {
    setparticulars((current) => [
      ...current,
      { title: '', price: 0, description: '' },
    ]);
  };

  const handleFormSubmit = (e) => {
    handleTotal();
    e.preventDefault();
    seterrors(null);
    let validateFields = quotationsSchema.safeParse({
      firm_name,
      total,
      particulars,
    });
    if (!validateFields.success) return seterrors(validateFields.error?.issues);

    setshowPdf(true);
  };

  function resetForm() {
    setparticulars([
      {
        title: '',
        price: 0,
        description: '',
      },
    ]);
    handleTotal();
  }

  function getBack() {
    setshowPdf(false);
  }

  useEffect(() => {
    handleTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Component
        isNewData={{ isNew: true, id: null }}
        showPdf={showPdf}
        handleFormSubmit={handleFormSubmit}
        firm_name={firm_name}
        handleFirm_name={handleFirm_name}
        errors={errors}
        total={total}
        handleTotal={handleTotal}
        particulars={particulars}
        resetForm={resetForm}
        getBack={getBack}
        handleDeleteRow={handleDeleteRow}
        handleAddRow={handleAddRow}
        handleTitleChange={handleTitleChange}
        handlePriceChange={handlePriceChange}
        handleDescriptionChange={handleDescriptionChange}
      />
    </>
  );
}
