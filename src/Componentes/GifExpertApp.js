import React, {useState} from 'react';


export const GifExpertApp = () =>{
    
    const [categories, setcategories] = useState( ['one punch', 'samurai X', 'dragon Ball']);
    const handleAdd = ()=>{
       setcategories([...categories, "juan CArlo"])
    }
    
    // const categories = ['one punch', 'samurai X', 'dragon Ball'];
    return ( 
        <>
        <h2>GifExpertApp</h2>
        <hr/>

        <button onClick={handleAdd}>Agregar</button>
        <ol>

        {
            categories.map((category ) =>{
                return <li key={category}> {category} </li>
            })

        }
        </ol>
        
        </>
     );
}


