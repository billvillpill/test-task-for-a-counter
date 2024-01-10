import React, {FC} from 'react';
import {Button} from "../Button";
import s from './Counter.module.css'

type CounterProps = {
    maxValueCounter: number
    minValueCounter: number
    counter: number
    setCounter: (num: number) => void

    stateSpan: boolean
    inputError: boolean
    disabledOnInc: boolean
    setDisabledOnInc: (state: boolean) => void
    disabledOnReset: boolean
    setDisabledOnReset: (state: boolean) => void
}
export const Counter: FC<CounterProps> = (
    {
        maxValueCounter,
        minValueCounter,
        counter,
        setCounter,
        stateSpan,
        inputError,
        disabledOnInc,
        setDisabledOnInc,
        disabledOnReset,
        setDisabledOnReset
    }) => {
    /*увелечения значения счетчика до максимального установленого значения*/
    const counterIncrements = () => {
        setCounter(counter + 1)
        setDisabledOnReset(false);
        counter > maxValueCounter - 2 && setDisabledOnInc(true);
    };
    /*изменения значения счетчика на минимальное установленое значение*/
    const counterReset = () => {
        setCounter(minValueCounter);
        setDisabledOnInc(false);
        setDisabledOnReset(true);
    };
    return (
        <div className={s.container}>
            <div className={s.counter}>
                {inputError ? <span className={s.incorrectSpan}>Incorrect value!</span> : stateSpan
                    ? <span className={s.enterSpan}>enter values and pres 'set'</span>
                    : <span className={counter > maxValueCounter - 1 ? s.spanBlock : s.span}>{counter}</span>}
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

