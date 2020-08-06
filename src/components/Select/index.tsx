import React, {InputHTMLAttributes} from 'react';

import './styles.css';

// Now we want to pass all the attributes that a normal HTML input
// would receive at its standard. This is made by importing InputHTMLAttributes,
// extending our interface and passing the global variable HTMLInputElement
// in the argument:

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}


// Use the spread operator to take all the other props from InputHtmlAttributes. Note they are all
// optional
const Input: React.FC<InputProps> = ({ label, name, ...rest  /* Another way to use props by desctruturing */ }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
}

export default Input;