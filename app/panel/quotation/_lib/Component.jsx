'use client';

import { InputPrimary } from '@/components/ui/Input';
import React, { useEffect, useRef } from 'react';
import Particulars from './Particulars';
import ButtonPrimary from '@/components/ui/ButtonPrimary';
import ButtonSecondary from '@/components/ui/ButtonSecondary';
import Main from '@/components/generateInvoice/Main';

function Component({
  isNewData,
  showPdf,
  handleFormSubmit,
  firm_name,
  handleFirm_name,
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
        <div className="container sm:my-12 mx-auto bg-slate-200 sm:shadow-lg rounded-md">
          <form onSubmit={handleFormSubmit} className="md:mt-6 py-6">
            <h1 className="mb-6 underline text-2xl font-semibold text-center text-primary-100 uppercase">
              Generate Quotation
            </h1>
            <div
              ref={quotationHeader}
              className="sticky pt-2 px-6 top-0 grid md:grid-cols-[1fr_195px] gap-x-6 bg-slate-200 shadow-none transition-all"
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
                  errors?.find((error) => error.path?.[0] == 'total')?.message
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
                      errors={errors}
                    />
                  );
                })}

              <div className="flex flex-wrap justify-between gap-4">
                <ButtonPrimary
                  buttonClass="!border-green-500 !bg-green-500 hover:!bg-green-600"
                  onClick={handleAddRow}
                >
                  + Row
                </ButtonPrimary>
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
          total={total}
          particulars={particulars}
        />
      )}
    </div>
  );
}

export default Component;
