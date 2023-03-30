import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        const newValidateInputValue = newInputValue.charAt(0).toLocaleUpperCase() + newInputValue.slice(1);
        if ( newValidateInputValue.length <= 1 ) return;
        onNewCategory( newValidateInputValue )
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gif"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}

