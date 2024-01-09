import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import s from './Settings.module.css'
import {Button} from "../Button";

type SettingsProps = {
    inputError: boolean
    setInputError: (state: boolean) => void
    settingsSaving: (minValue: number, maxValue: number) => void
    setDisabledOnInc: (state: boolean) => void
    setDisabledOnReset: (state: boolean) => void
    setStateSpan: (state: boolean) => void
}
export const Settings: FC<SettingsProps> = (
    {
        inputError,
        setInputError,
        settingsSaving,
        setDisabledOnInc,
        setDisabledOnReset,
        setStateSpan
    }) => {
    const [disabledSetButton, setDisabledSetButton] = useState(true)

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);

    useEffect(() => {
        minValue < 0 || maxValue <= minValue
            ? changeState(true, true)
            : changeState(false, false);
    }, [minValue]);

    useEffect(() => {
        maxValue <= 0 || maxValue <= minValue
            ? changeState(true, true)
            : changeState(false, false);
    }, [maxValue]);

    const changeState = (state: boolean, inputError: boolean) => {
        setDisabledSetButton(state);
        setInputError(inputError)
    }
    const callBackSettingsSaving = () => {
        setDisabledSetButton(true)
        settingsSaving(minValue, maxValue)
        setDisabledOnInc(false)
        setStateSpan(false)
    }
    const onChangeMaxValueCounter = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(event.currentTarget.value))
        setDisabledOnInc(true)
        setDisabledOnReset(true)
        setStateSpan(true)
    }
    const onChangeStartValueCounter = (event: ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(event.currentTarget.value))
        setDisabledOnInc(true)
        setDisabledOnReset(true)
        setStateSpan(true)
    }

    return (
        <div className={s.settings}>
            <div className={s.inputs}>
                <div className={s.inputValueMax}>
                    <div><p>max value:</p></div>
                    <input
                        type="number"
                        value={maxValue}
                        onChange={onChangeMaxValueCounter}
                        className={inputError ? s.inputError : s.inputDefault}
                    />
                </div>
                <div className={s.inputValueStart}>
                    <div><p>start value:</p></div>
                    <input
                        type="number"
                        value={minValue}
                        onChange={onChangeStartValueCounter}
                        className={inputError ? s.inputError : s.inputDefault}
                    />
                </div>
            </div>
            <div className={s.buttons}>
                <Button
                    name="set"
                    callBack={callBackSettingsSaving}
                    disabled={disabledSetButton}
                />
            </div>
        </div>
    );
};

