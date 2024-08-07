'use client';

import { InputPrimary } from '@/components/ui/Input';
import React, { useEffect, useRef, useState } from 'react';
import Particulars from './Particulars';
import ButtonPrimary from '@/components/ui/ButtonPrimary';
import ButtonSecondary from '@/components/ui/ButtonSecondary';
import Main from '@/components/generateInvoice/Main';
import { InputSelect } from '@/components/ui/inputSelect';
import TermsConditions from './TermsConditions';

function Component({
  currency,
  updateCurrency,
  isNewData,
  showPdf,
  handleFormSubmit,
  firm_name,
  handleFirm_name,
  date,
  updateDate,
  errors,
  total,
  handleTotal,
  particulars,
  resetForm,
  getBack,
  handleDeleteRow,
  handleAddRow,
  handleTitleChange,
  handlePriceChange,
  handleDescriptionChange,
  termsConditions,
  handleTermsConditionsChange,
  hideTermsConditions,
  showTermsConditions,
  isTermsConditionsVisible,
  handleDeleteTermsRow,
  handleAddTermsRow,
}) {
  const quotationHeader = useRef(null);

  function handleStickyHeaderShadow() {
    if (quotationHeader.current) {
      const headerTop = quotationHeader.current.getBoundingClientRect().top;
      if (headerTop == 0) {
        quotationHeader.current.classList.remove('bg-slate-200', 'shadow-none');
        quotationHeader.current.classList.add('bg-white', 'shadow-md');
      } else {
        quotationHeader.current.classList.remove('bg-white', 'shadow-md');
        quotationHeader.current.classList.add('bg-slate-200', 'shadow-none');
      }
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleStickyHeaderShadow);
    return () => window.removeEventListener('scroll', handleStickyHeaderShadow);
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-200 sm:bg-transparent">
      {!showPdf ? (
        <div className="sm:container sm:my-12 mx-auto bg-slate-200 sm:shadow-lg rounded-md">
          <form onSubmit={handleFormSubmit} className="md:mt-6 py-6">
            {isTermsConditionsVisible ? (
              <div className="relative px-6">
                <div className="flex justify-between mb-6 gap-x-3">
                  <ButtonSecondary
                    onClick={hideTermsConditions}
                    buttonClass="h-fit px-2.5 border-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="var(--primary-100)"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M13 14l-4 -4l4 -4" />
                      <path d="M8 14l-4 -4l4 -4" />
                      <path d="M9 10h7a4 4 0 1 1 0 8h-1" />
                    </svg>
                  </ButtonSecondary>
                  <h1 className="flex-1 items-center underline text-2xl font-semibold text-center text-primary-100 uppercase">
                    Generate Quotation
                  </h1>
                </div>

                <p className="mt-6 mb-4 block text-xl text-center font-semibold">
                  Terms & Conditions
                </p>

                {termsConditions?.length > 0 &&
                  termsConditions.map((t, i) => (
                    <TermsConditions
                      key={i}
                      index={i}
                      errors={errors}
                      value={t}
                      onChange={(e) => handleTermsConditionsChange(e, i)}
                      handleAddTermsRow={handleAddTermsRow}
                      handleDeleteTermsRow={handleDeleteTermsRow}
                    />
                  ))}
              </div>
            ) : (
              <div>
                <h1 className="mb-6 underline text-2xl font-semibold text-center text-primary-100 uppercase">
                  Generate Quotation
                </h1>
                <div
                  ref={quotationHeader}
                  className="sticky pt-2 px-6 top-0 grid sm:grid-cols-[1fr_195px] gap-x-6 bg-slate-200 shadow-none transition-all"
                >
                  <InputPrimary
                    type="text"
                    label="Firm Name"
                    value={firm_name}
                    onChange={handleFirm_name}
                    name="firm_name"
                    InputClass="!bg-transparent border-black/20"
                    error={
                      errors?.find((error) => error.path?.[0] == 'firm_name')
                        ?.message
                    }
                  />
                  <InputPrimary
                    type="number"
                    label="Total"
                    value={total}
                    onChange={() => {
                      handleTotal();
                    }}
                    name="total"
                    disabled
                    InputClass="!bg-transparent border-black/20"
                    error={
                      errors?.find((error) => error.path?.[0] == 'total')
                        ?.message
                    }
                  />
                </div>
                <div className="px-6 grid sm:grid-cols-2 gap-x-6">
                  <InputPrimary
                    type="date"
                    label="Quote date"
                    value={date}
                    onChange={(e) => {
                      updateDate(e.target.value);
                    }}
                    name="date"
                    InputClass="!bg-transparent border-black/20"
                    error={
                      errors?.find((error) => error.path?.[0] == 'date')
                        ?.message
                    }
                  />
                  <InputSelect
                    label="Currency"
                    value={currency}
                    options={[
                      { label: 'Ruppee', value: 'Rs. ' },
                      { label: 'Dollar', value: '$' },
                      { label: 'Euro', value: '€' },
                    ]}
                    onChange={(e) => {
                      updateCurrency(e.target.value);
                    }}
                    name="currency"
                    InputClass="!bg-transparent border-black/20"
                    error={
                      errors?.find((error) => error.path?.[0] == 'currency')
                        ?.message
                    }
                  />
                </div>
                <div className="px-6">
                  <p className="mt-6 mb-4 block text-xl text-center font-semibold">
                    Particulars
                  </p>

                  {particulars.length !== 0 &&
                    particulars.map((item, i) => {
                      return (
                        <Particulars
                          key={i}
                          index={i}
                          item={item}
                          handleDeleteRow={handleDeleteRow}
                          handleTitleChange={handleTitleChange}
                          handleDescriptionChange={handleDescriptionChange}
                          handlePriceChange={handlePriceChange}
                          handleAddRow={handleAddRow}
                          errors={errors}
                        />
                      );
                    })}
                </div>
              </div>
            )}
            <div className="px-6">
              <ButtonSecondary
                buttonClass="hover:!border-red-500 hover:!bg-red-500"
                onClick={() =>
                  isTermsConditionsVisible
                    ? hideTermsConditions()
                    : showTermsConditions()
                }
              >
                {isTermsConditionsVisible
                  ? 'Particulars'
                  : 'Terms & Conditions'}
              </ButtonSecondary>
              <div className="flex flex-wrap justify-end gap-4 mt-4">
                <div className="space-x-4">
                  <ButtonSecondary
                    buttonClass="hover:!border-red-500 hover:!bg-red-500"
                    onClick={resetForm}
                  >
                    Cancel
                  </ButtonSecondary>

                  <ButtonPrimary type="submit">Generate</ButtonPrimary>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <Main
          isNewData={isNewData}
          getBack={getBack}
          firm_name={firm_name}
          currency={currency}
          date={date}
          total={total}
          particulars={particulars}
          termsConditions={termsConditions}
        />
      )}
    </div>
  );
}

export default Component;
