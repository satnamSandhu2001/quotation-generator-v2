import DeleteIcon from '@/components/ui/DeleteIcon';
import { InputPrimary } from '@/components/ui/Input';
import React from 'react';

const Particulars = ({
  index,
  item,
  handleDeleteRow,
  handleDescriptionChange,
  handleTitleChange,
  handlePriceChange,
  errors,
}) => {
  return (
    <div className="border border-black/30 p-4 rounded-md mb-4 hover:shadow-lg transition-shadow">
      <div className="mb-2 flex items-start gap-x-4">
        <div className="flex flex-col gap-y-3">
          <p className="w-8 aspect-square bg-slate-300 flex items-center justify-center text-lg leading-none rounded-md">
            {index + 1}
          </p>
          <button
            type="button"
            className="w-8 aspect-square flex items-center justify-center text-lg leading-none rounded-md bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"
            onClick={() => {
              handleDeleteRow(index);
            }}
          >
            <DeleteIcon />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_175px] w-full justify-between">
          <InputPrimary
            type="text"
            label="Title"
            name="title"
            value={item.title}
            onChange={(e) => handleTitleChange(e, index)}
            error={
              errors?.find(
                (error) =>
                  error.path?.[0] == 'particulars' &&
                  error.path?.[1] == index &&
                  error.path?.[2] == 'title'
              )?.message
            }
            InputClass="!bg-transparent border-black/20"
            containerClass="md:mr-6"
          />

          <InputPrimary
            type="number"
            label="Price"
            name="price"
            value={item.price}
            onChange={(e) => handlePriceChange(e, index)}
            error={
              errors?.find(
                (error) =>
                  error.path?.[0] == 'particulars' &&
                  error.path?.[1] == index &&
                  error.path?.[2] == 'price'
              )?.message
            }
            InputClass="!bg-transparent border-black/20"
          />

          <div className="w-full md:col-span-4">
            <InputPrimary
              type="textarea"
              label="Description"
              name="description"
              value={item.description}
              onChange={(e) => handleDescriptionChange(e, index)}
              error={
                errors?.find(
                  (error) =>
                    error.path?.[0] == 'particulars' &&
                    error.path?.[1] == index &&
                    error.path?.[2] == 'description'
                )?.message
              }
              rows={1}
              InputClass="!bg-transparent border-black/20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Particulars;
