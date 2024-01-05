import React, {useState} from 'react';
import './App.css';
import {Counter} from "./counter/Counter";
import {Settings} from "./settings/Settings";


function App() {
    const [counter, setCounter] = useState(0);
    let [minCounter, setMinCounter] = useState(0);
    let [maxCounter, setMaxCounter] = useState(5);

    const [disabledOnInc, setDisabledOnInc] = useState(false)
    const [disabledOnReset, setDisabledOnReset] = useState(true)
    const settingsSaving = (minValue: number, maxValue: number) => {
        setCounter(minValue)
        setMaxCounter(maxValue)
    }
    return (
        <div className="App">
            <Settings
                settingsSaving={settingsSaving}
                setCounter={setCounter}
                setDisabledOnInc={setDisabledOnInc}
                setDisabledOnReset={setDisabledOnReset}
            />
            <Counter
                maxValueCounter={maxCounter}
                counter={counter}
                setCounter={setCounter}

                disabledOnInc={disabledOnInc}
                setDisabledOnInc={setDisabledOnInc}
                disabledOnReset={disabledOnReset}
                setDisabledOnReset={setDisabledOnReset}
            />
        </div>
    );
}

export default App;
