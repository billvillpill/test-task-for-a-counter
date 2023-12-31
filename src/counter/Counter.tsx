import React, {FC, useState} from 'react';
import {Button} from "../Button";
import s from './Counter.module.css'

type CounterProps = {
    maxValueCounter: number
    counter: number
    setCounter: (num: number) => void
    disabledOnInc: boolean
    setDisabledOnInc: (state: boolean) => void
    disabledOnReset: boolean
    setDisabledOnReset: (state: boolean) => void
}
export const Counter: FC<CounterProps> = (
    {
        maxValueCounter,
        counter,
        setCounter,
        disabledOnInc,
        setDisabledOnInc,
        disabledOnReset,
        setDisabledOnReset
    }) => {


    const counterIncrements = () => {
        setCounter(counter + 1)
        setDisabledOnReset(false);
        counter > maxValueCounter - 2 && setDisabledOnInc(true);
    };
    const counterReset = () => {
        setCounter(0);
        setDisabledOnInc(false);
        setDisabledOnReset(true);
    };
    return (
        <div className={s.container}>
            <div className={s.counter}>
                <span className={counter > maxValueCounter - 1 ? s.spanBlock : s.span}>{counter}</span>
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

