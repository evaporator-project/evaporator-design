import { css } from '@emotion/react';
// import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
// CSSINJS
import useStyle from './style';
import {ConfigContext} from "../config-provider/context";
import classNames from 'classnames';
// import ss from 'e'

const ButtonTypes = ['default', 'primary', 'ghost', 'dashed', 'link', 'text'] as const;
export type ButtonType = typeof ButtonTypes[number];
export interface ButtonProps {
  type?: ButtonType;
  className?: string;
  children?: React.ReactNode;
}



const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const {
    type = 'default',
    className,
    children,
  } = props;
  const prefixCls = getPrefixCls('button', undefined);
  // Style
  const [wrapSSR, hashId] = useStyle(prefixCls);
  console.log(wrapSSR,'wrapSSR')
  const classes = classNames(
      prefixCls,
      hashId,
      {
        [`${prefixCls}-${type}`]: type,
      },
      className,
  );
  return wrapSSR(<button className={classes} >{children}</button>);
};

export default Button;
