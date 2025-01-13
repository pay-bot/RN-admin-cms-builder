import React, { ReactNode } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

interface IBaseContentHeaderProps {
  value: string;
  actionComponents?: ReactNode;
  navBack?: {
    link: string;
    title: string;
  };
}

const BaseContentHeader: React.FC<IBaseContentHeaderProps> = ({
  value,
  actionComponents,
  navBack,
}) => (
  <div className="pb-[40px] relative">
    {navBack?.link && (
      <Link to={navBack.link}>
        <div className="absolute top-0 text-[12px] flex items-center gap-x-1 text-mygray3">
          <BiChevronLeft /> <div className="">{navBack.title}</div>
        </div>
      </Link>
    )}
    <div className="flex items-center justify-between pt-[20px]">
      <h1 className="text-[24px] font-[500] leading-[1.25] text-[#32324D] capitalize">
        {value}
      </h1>
      {actionComponents}
    </div>
  </div>
);

BaseContentHeader.defaultProps = {
  navBack: {
    link: '',
    title: '',
  },
  actionComponents: null, // Add this line
};
export default BaseContentHeader;
