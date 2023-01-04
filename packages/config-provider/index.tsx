import defaultSeedToken from '../theme/themes/seed';
import * as React from 'react';
import {ConfigContext, ThemeConfig} from "./context";
import LocaleProvider, {ANT_MARK, Locale} from "../locale";
import { DesignTokenContext } from '../theme/internal';
import useTheme from './hooks/useTheme';
import { createTheme } from '@ant-design/cssinjs';
export interface ConfigProviderProps {
  children?: React.ReactNode;
  locale: Locale;
  theme?: ThemeConfig;
}




const ConfigProvider: React.FC<ConfigProviderProps>& {
    /** @private internal Usage. do not use in your production */
    ConfigContext: typeof ConfigContext;
} = (props) => {
    const {theme} = props
    const mergedTheme = useTheme(theme, undefined);
    // ================================ Dynamic theme ================================
    const memoTheme = React.useMemo(() => {
        const { algorithm, token, ...rest } = mergedTheme || {};
        const themeObj =
            algorithm && (!Array.isArray(algorithm) || algorithm.length > 0)
                ? createTheme(algorithm)
                : undefined;

        return {
            ...rest,
            theme: themeObj,

            token: {
                ...defaultSeedToken,
                ...token,
            },
        };
    }, [mergedTheme]);

    return     <div>
        <LocaleProvider locale={props.locale} _ANT_MARK__={ANT_MARK}>
            <DesignTokenContext.Provider value={memoTheme}>{props.children}</DesignTokenContext.Provider>
        </LocaleProvider>
    </div>
}
ConfigProvider.ConfigContext = ConfigContext;
export default ConfigProvider;
