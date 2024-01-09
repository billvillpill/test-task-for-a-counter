import React, {useState} from 'react';
import './App.css';
import {Counter} from "./counter/Counter";
import {Settings} from "./settings/Settings";


function App() {
    const [counter, setCounter] = useState(0);
    const [inputError, setInputError] = useState(false)
    const [maxCounter, setMaxCounter] = useState(5);
    const [stateSpan, setStateSpan] = useState(false)

    const [disabledOnInc, setDisabledOnInc] = useState(false)
    const [disabledOnReset, setDisabledOnReset] = useState(true)
    const settingsSaving = (minValue: number, maxValue: number) => {
        setCounter(minValue)
        setMaxCounter(maxValue)
    }
    return (
        <div className="App">
            <Settings
                inputError={inputError}
                setInputError={setInputError}
                settingsSaving={settingsSaving}
                setDisabledOnInc={setDisabledOnInc}
                setDisabledOnReset={setDisabledOnReset}
                setStateSpan={setStateSpan}
            />
            <Counter
                maxValueCounter={maxCounter}
                counter={counter}
                setCounter={setCounter}

                stateSpan={stateSpan}
                inputError={inputError}
                disabledOnInc={disabledOnInc}
                setDisabledOnInc={setDisabledOnInc}
                disabledOnReset={disabledOnReset}
                setDisabledOnReset={setDisabledOnReset}
            />
        </div>
    );
}

export default App;
