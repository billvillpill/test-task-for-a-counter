import React, {ChangeEvent, FC} from 'react';
import s from './Settings.module.css';
import {Button} from '../Button';
import {Input} from './Input';

type SettingsProps = {
    minCounter: number
    maxCounter: number
    onChangeMaxValueCounter: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeStartValueCounter: (event: ChangeEvent<HTMLInputElement>) => void
    inputError: boolean
    callBackSettingsSaving: () => void
    disabledSetButton: boolean
}
export const Settings: FC<SettingsProps> = (
    {
        maxCounter,
        minCounter,
        onChangeMaxValueCounter,
        onChangeStartValueCounter,
        inputError,
        callBackSettingsSaving,
        disabledSetButton
    }) => {

    return (
        <div className={s.settings}>
            <div className={s.inputs}>
                <div className={s.inputValueMax}>
                    <div><p>max value:</p></div>
                    <Input
                        value={maxCounter}
                        stateClassName={inputError}
                        callBack={onChangeMaxValueCounter}
                    />
                </div>
                <div className={s.inputValueStart}>
                    <div><p>start value:</p></div>
                    <Input
                        value={minCounter}
                        stateClassName={inputError}
                        callBack={onChangeStartValueCounter}
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

