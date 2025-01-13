import clsxm from '@/utils/clsxm';

type TBaseHelper = {
  helperText: string;
  mt?: boolean;
  className?: string;
};

export default function BaseHelper({ helperText, mt, className }: TBaseHelper) {
  return (
    helperText && (
      <h3
        className={clsxm(
          'text-[0.75rem] leading-[1.33] text-[#666687]',
          mt ? 'mt-[4px]' : '',
          className
        )}
      >
        {helperText}
      </h3>
    )
  );
}

BaseHelper.defaultProps = {
  mt: true,
  className: '',
};
