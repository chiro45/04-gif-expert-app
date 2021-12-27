import React, {useState} from 'react'
import PropTypes from 'prop-types';
export default function AddCategory({setCategories}) {
    //declaramos el useState
    const [inputValue, setinputValue] = useState("");
    //el evento debe introducir el target.value
    const handleInputChange = (e)=>{
        setinputValue(e.target.value)
    }
    //
    const handleSubmit = (e)=>{
        //le decimos que no realice el evento default
        e.preventDefault(e)
        //imprime en consola
        console.log('handle submit', inputValue)
        //validamos que lo introducido sea mayor a 2
        if(inputValue.trim().length > 2){
        
         setCategories( categories => [inputValue, ...categories,])
         setinputValue('')

        }
        //console.log('submit hecho')
    }
    return (    
        //retorna el formulario con el evento y el cambio 
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        />
        </form>   
    )
}
//define las propiedades del componente
AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}