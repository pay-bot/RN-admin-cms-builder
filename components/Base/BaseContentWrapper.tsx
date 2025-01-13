import React, { ReactNode } from 'react';
import clsxm from '@/utils/clsxm';

interface IBaseContentWrapperProps {
  size?: 'full' | 'medium' | 'small' | 'large';
  children: ReactNode;
}

const getSize = (size: IBaseContentWrapperProps['size']) => {
  switch (size) {
    case 'full':
      return 'w-full';
    case 'large':
      return 'w-full max-w-[1280px]';
    case 'medium':
      return 'min-w-[600px] w-full max-w-[60rem]';
    case 'small':
      return 'max-w-[60rem]';

    default:
      return 'w-full';
  }
};

const BaseContentWrapper: React.FC<IBaseContentWrapperProps> = ({
  size,
  children,
}) => (
  <div className={clsxm('p-[2rem] bg-mysecondary mx-auto', getSize(size))}>
    {children}
  </div>
);

BaseContentWrapper.defaultProps = {
  size: 'full',
};

export default BaseContentWrapper;
