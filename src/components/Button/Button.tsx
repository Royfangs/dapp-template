import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { classMerge } from '@/utils';

type ButtonProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loadingIcon?: ReactNode;
  isLoading?: boolean;
};

export const Button = ({
  className,
  leftIcon,
  rightIcon,
  loadingIcon,
  isLoading,
  children,
  disabled,
  ...restProps
}: ButtonProps & ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      className={classMerge(className, {
        'btn--disabled': disabled,
      })}
      disabled={disabled}
      {...restProps}
    >
      <div className="flex items-center justify-center gap-1">
        {isLoading && loadingIcon}
        {!isLoading && leftIcon}
        {children}
        {!isLoading && rightIcon}
      </div>
    </button>
  );
};
