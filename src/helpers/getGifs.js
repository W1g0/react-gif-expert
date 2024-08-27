export const getGif  = async( category ) => {

    const url =   `https://api.giphy.com/v1/gifs/search?api_key=W1ARy5kBSPCWmGL3S7wf8FNJg7mwgdbC&q=${ category }&limit=10`;
    const resp =  await  fetch( url );
    const {data} = await resp.json();

    console.log(data);


    const gifs = data.map(  img  =>  ({
      
        id:  img.id,
        title:img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}

