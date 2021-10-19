


 const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=12&api_key=0p5QcgB8WR8jiCntwt0Dd4vibpEqZPGz`
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
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