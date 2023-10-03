import React from 'react';
import { Button } from '@deposits/ui-kit-react';

const OverviewCard = ({ title, figures, bgColor, textColor, bgImg, btnText, btColor, btTextColor, titleColor, link }) => {

  return (
    <div className={`${bgColor} ${bgImg} flex items-start rounded-lg  !px-2 lg:!px-4 py-6`}>

      <div className="mx-2 flex-1">
        <div className={`capitalize text-${titleColor} text-xs font-medium`}>
          {title}
        </div>

        <div className='flex justify-between items-center w-full pt-20'>
          <div className={`${textColor} font-bold text-5xl md:text-5xl`}>
            {figures}
          </div>

          <Button
              className={`!bg-${btColor} text-sm !w-[200px] !font-[500] !border-0 !px-8 !py-5 ${btTextColor}`}
              size="small"
            >
              {btnText}
          </Button>
        </div>

      </div>
    </div>
  );
};

export default OverviewCard;
