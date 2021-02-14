import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCat }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //inputValue.length > 2 && setCat(c => [...c, inputValue]);
        if (inputValue.length > 2) {
            //setCat(c => [...c, inputValue]); //la mas antigua primero
            setCat(c => [inputValue, ...c]); //la mas nueva primero
            setInputValue('');
        }
        console.log('Submit event');
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <h2> {inputValue} </h2> */}
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange} />
        </form>
    )
}

AddCategory.propTypes = {
    setCat: PropTypes.func.isRequired
}
