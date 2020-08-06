import React from 'react';

interface InputProps {
    label: string;
    name: string;
}

const Input: React.FC<InputProps> = ({ label, name /* Another way to use props by desctruturing */ }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{ label }</label>
            <input type="text" id={name}/>
        </div>
    );
}

export default Input;