import React, {ChangeEvent, FC} from 'react';
import s from './Settings.module.css';

type InputSettingsProps = {
    value: number
    callBack: (event: ChangeEvent<HTMLInputElement>) => void
    stateClassName: boolean
}
export const Input: FC<InputSettingsProps> = (
    {
        value,
        callBack,
        stateClassName
    }) => {
    return (
        <input
            type="number"
            value={value}
            onChange={callBack}
            className={stateClassName ? s.inputError : s.inputDefault}
        />
    );
};

