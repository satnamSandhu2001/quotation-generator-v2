'use client';

import { getQuotationById } from '@/actions/quotation.action';
import QuotationSkelton from '@/components/ui/skelton/quotation/QuotationSkelton';
import { quotationsSchema } from '@/lib/zod/schema';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
const Component = React.lazy(() => import('../_lib/Component'));

function Page() {
  const router = useRouter();
  const { id } = useParams();
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);

  const [errors, seterrors] = useState(null);

  const [showPdf, setshowPdf] = useState(false);

  async function getData() {
    setloading(true);
    let quotation = await getQuotationById(Number(id));
    setdata(quotation);
    setloading(false);
  }
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTotal = () => {
    let _total = 0;
    data?.particulars?.forEach((element) => {
      _total += Number(element.price);
    });
    let _data = data !== null ? { ...data, total: Number(_total) } : null;
    setdata(_data);
  };
  const handleFirm_name = (e) => {
    let _data = data !== null ? { ...data, firm_name: e.target.value } : null;
    setdata(_data);
  };
  const handlePriceChange = (e, i) => {
    let _particular = [...data.particulars];
    let newValue = parseInt(e.target.value) || 0;
    if (newValue < 0) return;
    e.target.value = newValue.toString();
    _particular[i]['price'] = newValue;
    let _data = data !== null ? { ...data, particulars: _particular } : null;
    setdata(_data);
  };

  const handleTitleChange = (e, i) => {
    let _particular = [...data.particulars];
    _particular[i]['title'] = e.target.value;
    let _data = data !== null ? { ...data, particulars: _particular } : null;
    setdata(_data);
  };

  const handleDescriptionChange = (e, i) => {
    let _particular = [...data.particulars];

    _particular[i]['description'] = e.target.value;
    let _data = data !== null ? { ...data, particulars: _particular } : null;
    setdata(_data);
  };

  const handleDeleteRow = (i) => {
    let _particular = [...data.particulars];
    if (_particular.length <= 1) {
      _particular = [{ title: '', price: 0, description: '' }];
      let _data = data !== null ? { ...data, particulars: _particular } : null;
      setdata(_data);
      return;
    }
    _particular.splice(i, 1);
    let _data =
      data !== null ? { ...data, particulars: [..._particular] } : null;
    setdata(_data);
  };
  const handleAddRow = () => {
    let _particulars = data?.particulars || [];
    _particulars?.push({
      title: '',
      price: 0,
      description: '',
    });
    let _data = data !== null ? { ...data, particulars: _particulars } : null;
    setdata(_data);
  };

  const handleFormSubmit = (e) => {
    handleTotal();
    e.preventDefault();
    seterrors(null);
    let validateFields = quotationsSchema.safeParse({
      firm_name: data?.firm_name,
      total: data?.total,
      particulars: data?.particulars,
    });
    if (!validateFields.success) return seterrors(validateFields.error?.issues);

    setshowPdf(true);
  };

  function resetForm() {
    router.back();
  }

  function getBack() {
    setshowPdf(false);
  }

  useEffect(() => {
    handleTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.particulars]);

  return (
    <div>
      {loading ? (
        <QuotationSkelton />
      ) : data ? (
        <Component
          isNewData={{ isNew: false, id: Number(id) }}
          showPdf={showPdf}
          handleFormSubmit={handleFormSubmit}
          firm_name={data?.firm_name || ''}
          handleFirm_name={handleFirm_name}
          errors={errors}
          total={data?.total || 0}
          handleTotal={handleTotal}
          particulars={data?.particulars || []}
          resetForm={resetForm}
          getBack={getBack}
          handleDeleteRow={handleDeleteRow}
          handleAddRow={handleAddRow}
          handleTitleChange={handleTitleChange}
          handlePriceChange={handlePriceChange}
          handleDescriptionChange={handleDescriptionChange}
        />
      ) : (
        'Data not found....'
      )}
    </div>
  );
}

export default Page;
