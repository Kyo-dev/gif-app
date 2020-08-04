const { getGif } = require("../../helpers/getGif")

describe('test in getGif.js', () => {
    
    test('Should getting 10 items', async () => {
        const gifs = await getGif('Sakura');
        expect(gifs.length).toBe(10)
    })

    test('Without category', async() => {
        const gifs = await getGif('')
        expect(gifs.length).toBe(0)
    })
    
    
})
