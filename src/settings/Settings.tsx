import React, {ChangeEvent, FC, useState} from 'react';
import s from './Settings.module.css'
import {Button} from "../Button";

type SettingsProps = {
    settingsSaving: (minValue: number, maxValue: number) => void
    setCounter: (num: number) => void
    setDisabledOnInc: (state: boolean) => void
    setDisabledOnReset: (state: boolean) => void
}
export const Settings: FC<SettingsProps> = (
    {
        settingsSaving,
        setCounter,
        setDisabledOnInc,
        setDisabledOnReset,

    }) => {
    const [disabledSetButton, setDisabledSetButton] = useState(true)
    const [inputError, setInputError] = useState(false)
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);

    const callBackSettingsSaving = () => {
        setDisabledSetButton(true)
        settingsSaving(minValue, maxValue)
        setDisabledOnInc(false)
    }
    const onChangeStartValueCounter = (event: ChangeEvent<HTMLInputElement>) => {
        if(disabledSetButton) {
            minValue+2 <= 0 || maxValue+2 <= minValue+3 ? setDisabledSetButton(true) : setDisabledSetButton(false);
        }
        if(!disabledSetButton) {
            minValue-2 <= 0 || maxValue-2 <= minValue-3 ? setDisabledSetButton(true) : setDisabledSetButton(false);
        }

        setMinValue(Number(event.currentTarget.value))
        setDisabledOnInc(true)
        setDisabledOnReset(true)
    }
    const onChangeMaxValueCounter = (event: ChangeEvent<HTMLInputElement>) => {
        maxValue+2 <= 0 || maxValue+2 <= minValue+3 ? setDisabledSetButton(true) : setDisabledSetButton(false);

        setMaxValue(Number(event.currentTarget.value))
        setDisabledOnInc(true)
        setDisabledOnReset(true)
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

