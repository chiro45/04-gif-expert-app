import React from 'react';

const { shallow } = require("enzyme")
import {GifGridItem} from '../../Componentes/GifGridItem'
describe('Pruebas en <GifGridItems/>', () => {
    const title = 'un titulo',
          url = 'www.google.com';
    const wrapper = shallow(<GifGridItem title={ title } img={ url }/>)
    test('debe mostrar el componente correctamente', () => {
        
       expect(wrapper).toMatchSnapshot(); 

    })
    
    test('debe de tener un parrafo con el title', () => {
        
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    })
    test('la img debe tener un url y alt de los props', () => {
        
        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })
    
    test('debe tener animate__backInRigth', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__backInRight')).toBe(true)
    })
    
})

