export const getGif = async (category) => {
  try {

    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=10&api_key=WHzpXAOAQkOTRLwqebBCMXVKFyC6zkzi`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        gif: gif.images?.downsized_medium.url,
      };
    });
    return gifs;
    
  } catch (error) {

    throw new Error(error)

  }


  
    
};
