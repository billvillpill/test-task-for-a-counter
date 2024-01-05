import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled: boolean
}
export const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button
                type='submit'
                onClick={props.callBack}
                disabled={props.disabled}
            >{props.name}
            </button>
        </div>
    );
};

