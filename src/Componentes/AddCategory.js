import React, {useState} from 'react'
import PropTypes from 'prop-types';
export default function AddCategory({setCategories}) {
    
    const [inputValue, setinputValue] = useState("");
    const handleInputChange = (e)=>{
        setinputValue(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault(e)
        console.log('handle submit', inputValue)

        if(inputValue.trim().length > 2){
            
         setCategories( categories => [inputValue, ...categories,])
         setinputValue('')

        }
        //console.log('submit hecho')
    }
    return (      
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
        <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        />
        </form>   
    )
}
AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}