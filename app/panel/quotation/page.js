'use client';

import React, { useEffect, useState } from 'react';
import { quotationsSchema } from '@/lib/zod/schema';
import dynamic from 'next/dynamic';
const Component = dynamic(() => import('./_lib/Component'), { ssr: false });

const initialParticularValue = [
  {
    title: 'Responsive design',
    price: 5000,
    description: 'Desktop, Tablet, Mobile responsive 5 pages design',
  },
  {
    title: 'Customer Inquiry form with email integration',
    price: 1500,
    description: 'Visitors can inquire through customer support form',
  },
  {
    title: 'Domain and hosting & SSL certificate',
    price: 1500,
    description: 'Domain and hosting included yearly renewal + SSL certificate',
  },
];

const initialTermsConditions = [
  'This quote and these terms & conditions constitute a binding agreement upon client acceptance.',
  'A deposit of 50% is required to begin work. The remaining balance is due upon project final testing.',
  'Project scope changes will affect the final cost. I will provide estimates for additional work.',
  "The source code for the website will be the developer's property untill full payment associated with the project is completed.",
  'Changes requested to the project after 3 months of completion will be considered additional work and billed accordingly.',
  'This quote includes third-party costs like domain registration or hosting fees',
];

export default function Quotation() {
  const [currency, setcurrency] = useState('Rs.');
  const [firm_name, setfirm_name] = useState('');
  const [total, settotal] = useState(0);
  const [particulars, setparticulars] = useState(initialParticularValue);
  const [termsConditions, settermsConditions] = useState(
    initialTermsConditions
  );
  const [date, setdate] = useState(new Date().toISOString().substring(0, 10));
  const [errors, seterrors] = useState(null);
  const [isTermsConditionsVisible, setisTermsConditionsVisible] =
    useState(false);
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
  const handleAddRow = (index) => {
    let _particulars = [...particulars];
    _particulars.splice(index, 0, { title: '', price: 0, description: '' });
    setparticulars(_particulars);
  };

  const handleTermsConditionsChange = (e, i) => {
    let _terms = [...termsConditions];
    _terms[i] = e.target.value;
    settermsConditions([..._terms]);
  };

  const handleAddTermsRow = (index) => {
    let _terms = [...termsConditions];
    _terms.splice(index, 0, '');
    settermsConditions(_terms);
  };
  const handleDeleteTermsRow = (index) => {
    let _terms = [...termsConditions];
    _terms.splice(index, 1);
    settermsConditions(_terms);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleTotal();
    seterrors(null);
    let validateFields = quotationsSchema.safeParse({
      firm_name,
      total,
      particulars,
      date,
      currency,
      termsConditions,
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

  useEffect(() => {
    if (errors?.find((error) => error.path.includes('termsConditions'))) {
      setisTermsConditionsVisible(true);
    }
  }, [errors]);

  return (
    <>
      <Component
        isNewData={{ isNew: true, id: null }}
        showPdf={showPdf}
        handleFormSubmit={handleFormSubmit}
        currency={currency}
        updateCurrency={(value) => {
          setcurrency(value);
        }}
        firm_name={firm_name}
        handleFirm_name={handleFirm_name}
        date={date}
        updateDate={(value) => {
          setdate(value);
        }}
        total={total}
        handleTotal={handleTotal}
        particulars={particulars}
        errors={errors}
        resetForm={resetForm}
        getBack={getBack}
        handleDeleteRow={handleDeleteRow}
        handleAddRow={handleAddRow}
        handleTitleChange={handleTitleChange}
        handlePriceChange={handlePriceChange}
        handleDescriptionChange={handleDescriptionChange}
        handleTermsConditionsChange={handleTermsConditionsChange}
        termsConditions={termsConditions}
        hideTermsConditions={() => {
          setisTermsConditionsVisible(false);
        }}
        showTermsConditions={() => {
          setisTermsConditionsVisible(true);
        }}
        isTermsConditionsVisible={isTermsConditionsVisible}
        handleAddTermsRow={handleAddTermsRow}
        handleDeleteTermsRow={handleDeleteTermsRow}
      />
    </>
  );
}
