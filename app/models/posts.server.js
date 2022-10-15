export const getPosts = async (guitar) => {
    const response = await fetch(`${process.env.API_URL}/blogs?populate=image`); 
    return await response.json();
}