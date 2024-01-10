import React, {FC} from 'react';
import {Button} from "../Button";
import s from './Counter.module.css'

type CounterProps = {
    maxCounter: number
    counter: number
    stateSpan: boolean
    inputError: boolean
    disabledOnInc: boolean
    disabledOnReset: boolean
    counterIncrements: () => void
    counterReset: () => void
}
export const Counter: FC<CounterProps> = (
    {
        maxCounter,
        counter,
        stateSpan,
        inputError,
        disabledOnInc,
        disabledOnReset,
        counterIncrements,
        counterReset
    }) => {

    return (
        <div className={s.container}>
            <div className={s.counter}>
                {inputError ? <span className={s.incorrectSpan}>Incorrect value!</span> : stateSpan
                    ? <span className={s.enterSpan}>enter values and pres 'set'</span>
                    : <span className={counter > maxCounter - 1 ? s.spanBlock : s.span}>{counter}</span>}
            </div>
            <div className={s.buttons}>
                <Button
                    name="inc"
                    callBack={counterIncrements}
                    disabled={disabledOnInc}
                />
                <Button
                    name="reset"
                    callBack={counterReset}
                    disabled={disabledOnReset}
                />
            </div>
        </div>
    );
};

