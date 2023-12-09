import React from 'react';

type ButtonPropsType = {
    name: string
    counterIncrements: () => void
    disabled: boolean
}
export const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button
                type='submit'
                onClick={props.counterIncrements}
                disabled={props.disabled}
            >{props.name}
            </button>
        </div>
    );
};

