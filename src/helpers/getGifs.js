export const getGifs = async (category) => {
    const apiKey = 'zisU3LQ02JT6Hkdr3Vzzxs2NoM5V6Juv';

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img?.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}