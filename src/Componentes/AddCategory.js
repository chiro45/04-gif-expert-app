import React, {useState} from 'react'

export default function AddCategory({setCategories}) {
    
    const [inputValue, setinputValue] = useState("Busca tu gif");
    const handleInputChange = (e)=>{

        setinputValue(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault(e)

        if(inputValue.trim().length > 2){
            
         setCategories( categories => [inputValue, ...categories,])
         setinputValue('')

        }
        //console.log('submit hecho')
    }
    return (
        
        
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        />
        </form>
        
    )
}
