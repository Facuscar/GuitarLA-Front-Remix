export const getGuitars = async () => {
    const response = await fetch(`${process.env.API_URL}/guitarras?populate=image`); 
    return await response.json();
}

export const getGuitar = async (guitar) => {
    const response = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${guitar}&populate=image`);
    return await response.json();
}