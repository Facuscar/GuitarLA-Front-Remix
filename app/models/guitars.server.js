export const getGuitars = async () => {
    const response = await fetch(`${process.env.API_URL}/guitarras?populate=image`); 
    return await response.json();
}