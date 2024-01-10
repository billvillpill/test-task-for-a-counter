import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from './counter/Counter';
import {Settings} from './settings/Settings';


function App() {
    const [counter, setCounter] = useState(0);
    const [inputError, setInputError] = useState(false);
    const [minCounter, setMinCounter] = useState(0);
    const [maxCounter, setMaxCounter] = useState(5);
    const [stateSpan, setStateSpan] = useState(false);

    const [disabledOnInc, setDisabledOnInc] = useState(false);
    const [disabledOnReset, setDisabledOnReset] = useState(true);
    const [disabledSetButton, setDisabledSetButton] = useState(true);

    /*SETTINGS*/
    /*получение значени minValue и maxValue после перезагрузки страницы из localStorage*/
    useEffect(() => {
        let valueMaxAsString = localStorage.getItem('maxValue');
        if (valueMaxAsString) {
            let newMaxValue = JSON.parse(valueMaxAsString);
            setMaxCounter(newMaxValue);
        }
    }, []);
    useEffect(() => {
        let valueMinAsString = localStorage.getItem('minValue');
        if (valueMinAsString) {
            let newMinValue = JSON.parse(valueMinAsString);
            setMinCounter(newMinValue);
            setCounter(newMinValue);
        }
    }, []);

    /* синхронное обновление значений minValue и maxValue в Settings*/
    useEffect(() => {
        minCounter < 0 || maxCounter <= minCounter
            ? changeState(true, true)
            : changeState(false, false);
    }, [minCounter]);

    useEffect(() => {
        maxCounter <= 0 || maxCounter <= minCounter
            ? changeState(true, true)
            : changeState(false, false);
    }, [maxCounter]);
    /*изменения состояние отображения ошибки сообщения на сообщение о сохранений настроек*/
    const changeState = (state: boolean, inputError: boolean) => {
        setDisabledSetButton(state);
        setInputError(inputError);
    };
    /*сохранения настроек*/
    const callBackSettingsSaving = () => {
        setDisabledSetButton(true);
        setCounter(minCounter);
        setMinCounter(minCounter);
        setMaxCounter(maxCounter);
        localStorage.setItem('maxValue', JSON.stringify(maxCounter));
        localStorage.setItem('minValue', JSON.stringify(minCounter));
        setDisabledOnInc(false);
        setStateSpan(false);
    };
    /*измение максимального значения в настройках*/
    const onChangeMaxValueCounter = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxCounter(Number(event.currentTarget.value));
        setDisabledOnInc(true);
        setDisabledOnReset(true);
        setStateSpan(true);
    };
    /*измение минимального значения в настройках*/
    const onChangeStartValueCounter = (event: ChangeEvent<HTMLInputElement>) => {
        setMinCounter(Number(event.currentTarget.value));
        setDisabledOnInc(true);
        setDisabledOnReset(true);
        setStateSpan(true);
    };

    /*COUNTER*/
    /*увелечения значения счетчика до максимального установленого значения*/
    const counterIncrements = () => {
        setCounter(counter + 1);
        setDisabledOnReset(false);
        counter > maxCounter - 2 && setDisabledOnInc(true);
    };
    /*изменения значения счетчика на минимальное установленое значение*/
    const counterReset = () => {
        setCounter(minCounter);
        setDisabledOnInc(false);
        setDisabledOnReset(true);
    };

    return (
        <div className="App">
            <Settings
                minCounter={minCounter}
                maxCounter={maxCounter}
                onChangeMaxValueCounter={onChangeMaxValueCounter}
                onChangeStartValueCounter={onChangeStartValueCounter}
                inputError={inputError}
                callBackSettingsSaving={callBackSettingsSaving}
                disabledSetButton={disabledSetButton}
            />
            <Counter
                maxCounter={maxCounter}
                counter={counter}
                stateSpan={stateSpan}
                inputError={inputError}
                disabledOnInc={disabledOnInc}
                disabledOnReset={disabledOnReset}
                counterIncrements={counterIncrements}
                counterReset={counterReset}
            />
        </div>
    );
}

export default App;
