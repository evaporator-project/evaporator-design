import {css} from '@emotion/react';
import React, {PropsWithChildren} from 'react';
import { useLocaleReceiver } from '../locale/LocaleReceiver';
export interface InputProps {
    value: string
    onChange: any
}
const Input: React.FC<PropsWithChildren<InputProps>> = (props) => {
    const {
        value,
        onChange,
    } = props;

    const [inputLocale] = useLocaleReceiver('Input');


    // console.log(inputLocale)
    return <input placeholder={inputLocale?.placeholder} css={css`background-color: #535bf2`} value={value} onChange={onChange}/>;
};

export default Input;
