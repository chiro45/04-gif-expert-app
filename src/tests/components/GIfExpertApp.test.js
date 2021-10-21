
import React from 'react';
const { shallow } = require("enzyme")
import {GifExpertApp} from '../../Componentes/GifExpertApp'



describe('pruebas sobre el componente <GifExpertApp/>', () => {
    test('mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifExpertApp/>)   
        expect(wrapper).toMatchSnapshot(); 
    
    })
    test('debe de mostrar una lista de categorias', () => {
        const categories =['one punch', ' dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
    
    
})
