import { DerivativeFunc } from "@ant-design/cssinjs";
import React from "react";
import {AliasToken, MapToken, OverrideToken, SeedToken} from "../theme/interface";

export interface Theme {
  primaryColor?: string;
  infoColor?: string;
  successColor?: string;
  processingColor?: string;
  errorColor?: string;
  warningColor?: string;
}

export interface ConfigConsumerProps {
  getTargetContainer?: () => HTMLElement;
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
  rootPrefixCls?: string;
  iconPrefixCls: string;
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
  autoInsertSpaceInButton?: boolean;
  input?: {
    autoComplete?: string;
  };
  pagination?: {
    showSizeChanger?: boolean;
  };
  pageHeader?: {
    ghost: boolean;
  };
  virtual?: boolean;
  dropdownMatchSelectWidth?: boolean;
  theme?: ThemeConfig;
  select?: {
    showSearch?: boolean;
  };
}

export type MappingAlgorithm = DerivativeFunc<SeedToken, MapToken>;
export interface ThemeConfig {
  token?: Partial<AliasToken>;
  components?: OverrideToken;
  algorithm?: MappingAlgorithm | MappingAlgorithm[];
  hashed?: boolean;
  inherit?: boolean;
}
const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `ant-${suffixCls}` : 'ant';
};

export const defaultIconPrefixCls = 'anticon';
// zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will cause circular dependency.
export const ConfigContext = React.createContext<ConfigConsumerProps>({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  iconPrefixCls: defaultIconPrefixCls,
});