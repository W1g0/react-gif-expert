import { useState } from "react"


export const AdddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange =  ({target}) => {
        setInputValue( target.value);
    }

    const onSubmit = (event) =>  {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;        
        //console.log(inputValue)

        //SetCategories
        //setCategories( categories =>[inputValue, ...categories]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
        
        }

    return  (
        //<div>AddCategory</div>
        <form  onSubmit={ onSubmit }>
        <input
        type="text"
        placeholder="Buscar gifs"
        value= {inputValue}
        onChange={onInputChange}
        />
        </form>
    )
}