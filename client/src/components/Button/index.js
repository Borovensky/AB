// @flow

import React from 'react'

type Props = {
    type: string,
    buttonStyleClass: string,
    children: string
}

const Button = (props: Props) => {

    const { type, buttonStyleClass, children } = props;

    return (
        <button type={type} className={buttonStyleClass}>
            <span className='buttonText'>{children}</span>
        </button>
    )

};

Button.defaultProps = {
    type: '',
    buttonStyleClass: '',
    children: '',
}

export default Button;