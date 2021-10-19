import React, {useState} from 'react';
import AddCategory from './AddCategory';
import PropTypes from 'prop-types';
import { GifGrid } from './GifGrid';


export const GifExpertApp = () =>{
    
    const [categories, setCategories] = useState( ['Avengers']);
    // const handleAdd = ()=>{
    //    setcategories([...categories, "juan CArlo"])
    // }
    
    // const categories = ['one punch', 'samurai X', 'dragon Ball'];
    return ( 
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories ={setCategories}/>
        <hr/>
        <ol>

        {

        categories.map(category => (
                       < GifGrid 
                       key={category}
                       category={category}/>
                    )
        
        )}

        </ol>
        
        </>
     );

    
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


