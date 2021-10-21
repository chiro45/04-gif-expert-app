import React from 'react';
import { shallow } from "enzyme";
import { GifGrid } from "../../Componentes/GifGrid";
import { useFethGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')


describe('Pruebas en el <GifGrid />', () => {

    const category = 'One Punch';

    test('debe de mostrarse correctamente', () => {

        useFethGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            img: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            img: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];

        useFethGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);

        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    })
      
})
