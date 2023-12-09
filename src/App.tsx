import React, {useState, useEffect} from 'react';
import './App.css';
import {Button} from './Button';
import {render} from '@testing-library/react';

function App() {
    let [counter, setCounter] = useState(0);
    let [disabledOnInc, setDisabledOnInc] = useState(false)
    let [disabledOnReset, setDisabledOnReset] = useState(true)
    const counterIncrements = () => {
        setCounter(counter + 1)
        counter === 0 && setDisabledOnReset(false);
        counter > 4 && setDisabledOnInc(true);
    };
    const counterReset = () => {
        setCounter(0);
        setDisabledOnInc(false);
        setDisabledOnReset(true);
    };

    return (
        <div className="App">
            <div className="container">
                <div className="counter">
                    <p className={counter > 4 ? 'spanBlock' : 'span'}>{counter}</p>
                </div>
                <div className="buttons">
                    <Button
                        name="inc"
                        counterIncrements={counterIncrements}
                        disabled={disabledOnInc}
                    />
                    <Button
                        name="reset"
                        counterIncrements={counterReset}
                        disabled={disabledOnReset}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
