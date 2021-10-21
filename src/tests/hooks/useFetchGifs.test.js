import { useFethGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'



describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe retonrar el estado incial', async() => {
        const {result, waitForNextUpdate}= renderHook(()=>useFethGifs('los simpsons'));
        const {data, loading} = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([])
        expect(loading).toBe(true)
    })
    test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        const {result, waitForNextUpdate}= renderHook(()=>useFethGifs('los simpsons'));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(12)
        expect(loading).toBe(false)
    })
})
