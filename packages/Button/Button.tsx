import { css } from '@emotion/react';
// import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

// import ss from 'e'

const ButtonTypes = ['default', 'primary', 'ghost', 'dashed', 'link', 'text'] as const;
export type ButtonType = typeof ButtonTypes[number];
export interface ButtonProps {
  type?: ButtonType;
  className?: string;
  children?: React.ReactNode;
}



const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {

  const {
    type = 'default',
    className,
    children,
  } = props;

  return <button css={css`background-color: #535bf2`} className={className}>{children}</button>;
};

export default Button;
