import * as React from 'react';
import LocaleContext, { LocaleContextProps } from './context';

export const ANT_MARK = 'internalMark';

export interface Locale {
  locale: string;
  global?: Record<string, any>;
  Input?: Record<string, any>;
}

export interface LocaleProviderProps {
  locale: Locale;
  children?: React.ReactNode;
  /** @internal */
  _ANT_MARK__?: string;
}

const LocaleProvider: React.FC<LocaleProviderProps> = (props) => {
  const { locale = {} as Locale, children, _ANT_MARK__ } = props;
  const getMemoizedContextValue = React.useMemo<LocaleContextProps>(
      () => ({ ...locale, exist: true }),
      [locale],
  );
  return (
    <LocaleContext.Provider value={getMemoizedContextValue}>{children}</LocaleContext.Provider>
  );
};

export default LocaleProvider;
