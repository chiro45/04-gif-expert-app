
import {getGifs} from '../../helpers/getGifs'


describe('Pruebas con getGifs Fetch', () => {
    test('Debe de traer 10 elemetos', async() => {
        const gifs = await getGifs('one Punch')
        expect(gifs.length).toBe(12)
    })
    
})
