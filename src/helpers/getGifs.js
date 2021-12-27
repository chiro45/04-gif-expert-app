//realizamos una funcion async
 export const getGifs = async(category)=>{
     //definimos la url con los cambios que esta va a tener
     //el encode sirve para las url
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=0p5QcgB8WR8jiCntwt0Dd4vibpEqZPGz`
    //le decimos que utilice la funcion fetch
    const respuesta = await fetch(url);
    //desestructuramos en data la respuesta convertida en json
    const {data} = await respuesta.json();
    //retorna los gifs
    const gifs = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            img: img.images?.downsized_medium.url
        }
    })
  
    return gifs;
}
export default getGifs;