import React, {useState} from 'react';
import AddCategory from './AddCategory';
import PropTypes from 'prop-types';
import { GifGrid } from './GifGrid';


export const GifExpertApp = ({ defaultCategories=[]}) =>{
    const [categories, setCategories] = useState( defaultCategories);
    // const handleAdd = ()=>{
    //    setcategories([...categories, "juan CArlo"])
    // }
    // const categories = ['one punch', 'samurai X', 'dragon Ball'];
    return ( 
        <>
        <h2>ChiroGifs</h2>
        
        <AddCategory setCategories ={setCategories}/>
        <hr/>
        <div className='container'>
        <ol>
        {
        //recorre todas las categorys y le pasa al componente gifGrid
        //el key y la category
        categories.map(category => (
                       < GifGrid 
                       key={category}
                       category={category}/>
                    )
        )}
        </ol>
        </div>
        </>
     ); 
}
//definimos lo necesario para utilizar el componente 
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


