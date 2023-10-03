import { Button } from '@deposits/ui-kit-react';
import React, { forwardRef } from 'react';

const FormItem = forwardRef(
  (
    { label, containerClassName, register, error, errorMessage, ...props },
    ref,
  ) => {
    return (
      <div className={containerClassName}>
        <label className="block capitalize text-gray_700 text-sm mb-1">
          {label}
        </label>

        <input
          className={`w-full border-2 rounded-full text-base p-3 border-[#165BAA] focus:outline- focus:outline-[#165BAA] transition ${
            error ? 'border-[#165BAA] focus:outline-[#165BAA] bg-red-100' : ''
          } `}
          ref={ref}
          {...register}
          {...props}
        />
      </div>
    );
  },
);

export default FormItem;
