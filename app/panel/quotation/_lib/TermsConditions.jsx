import ButtonPrimary from '@/components/ui/ButtonPrimary';
import DeleteIcon from '@/components/ui/DeleteIcon';
import { InputPrimary } from '@/components/ui/Input';
import React from 'react';

function TermsConditions({
  index,
  errors,
  value,
  onChange,
  handleDeleteTermsRow,
  handleAddTermsRow,
}) {
  return (
    <div className="flex items-stretch gap-x-4 mb-2">
      <div className="flex flex-col gap-y-3 border-b-2 border-gray-300">
        <div className="flex flex-col gap-y-3 pt-1">
          <button
            type="button"
            className="w-8 aspect-square flex items-center justify-center text-lg leading-none rounded-md bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"
            onClick={() => {
              handleDeleteTermsRow(index);
            }}
          >
            <DeleteIcon />
          </button>
        </div>
        <div className="self-end">
          <ButtonPrimary
            buttonClass="w-8 aspect-square flex items-center justify-center text-lg leading-none rounded-md !border-green-500 !bg-green-500 hover:!bg-green-600 transition-colors cursor-pointer"
            onClick={() => {
              handleAddTermsRow(index + 1);
            }}
          >
            +
          </ButtonPrimary>
        </div>
      </div>
      <div className="w-full">
        <InputPrimary
          rows={3}
          type="textarea"
          name={'term-' + (index + 1)}
          label={'No.' + (index + 1)}
          value={value}
          onChange={onChange}
          error={
            errors?.find(
              (error) =>
                error.path?.[0] == 'termsConditions' && error.path?.[1] == index
            )?.message
          }
          InputClass="!bg-transparent border-black/20"
        />
      </div>
    </div>
  );
}

export default TermsConditions;
