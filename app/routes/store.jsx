export const loader = async () => {
    const response = await fetch(`${process.env.API_URL}/guitarras?populate=image`); 
    const result = await response.json();
    console.log(result);
    return {
    }
}


const Store = () => {
    return (
        <h1>From Store</h1>
    );
}

export default Store;