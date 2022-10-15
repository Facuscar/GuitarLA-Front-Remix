export const getPosts = async () => {
    const response = await fetch(`${process.env.API_URL}/blogs?populate=image`); 
    return await response.json();
}

export const getPost = async (post) => {
    const response = await fetch(`${process.env.API_URL}/blogs?filters[url]=${post}&populate=image`);
    return await response.json();
}