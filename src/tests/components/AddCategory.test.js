import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from "enzyme"
import AddCategory from "../../Componentes/AddCategory"

describe('Pruebas en el componente <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper =  shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>)
    });

    test('debe mostrase correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = "hello world"

        input.simulate('change',{ target : { value } });
        expect(wrapper.find('p').text().trim()).toBe(value)

    })
    test('no debe de psostear la informacion onSubmit', () => {
       wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })
    test('debe de llamar el setCategories y liimpiar la caja de texto', () => {
        
        const value = "hello world";
        //1.Simular el inpuChange
        wrapper.find('input').simulate('change',{ target : { value } });
        //2. Simular el submit
        wrapper.find('form').simulate('submit',{ preventDefault(){}} );
        //3.setCategories se debe haber llamado una vez
        expect(setCategories).toHaveBeenCalled();
        //4.el valor del input debe estar ""
        expect(wrapper.find('input').prop('value')).toBe('')

    })
})
