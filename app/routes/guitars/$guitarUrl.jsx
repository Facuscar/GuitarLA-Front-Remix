import { useRef } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitar } from "~/models/guitars.server";

export const loader = async ({ params } ) => {
    const { guitarUrl } = params;
    const guitar = await getGuitar(guitarUrl);

    if(guitar.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitar not found',
        })
    }

    return guitar;
}

export const meta = ({data}) => {
    if(!data) {
        return {
            title: 'Guitar not found',
            description: 'Guitar not found',
        }
    }
    return {
        title: `GuitarLA - ${data.data[0].attributes.name}`,
        description: `Guitar store, guitar ${data.data[0].attributes.name}`,
    }
}


const Guitar = () => {
    
    const { addToCart } = useOutletContext();
    const amountRef = useRef()
    const guitar = useLoaderData();
    const { name, description, image, price } = guitar.data[0].attributes;

    const handleSubmit = (e) => {
        e.preventDefault();

        if(Number(amountRef.current.value) === 0) {
            alert('You must select an amount');
            return;
        }

        const selectedGuitar = {
            id: guitar.data[0].id,
            image: image.data.attributes.url,
            name,
            price,
            amount: Number(amountRef.current.value),
        }

        addToCart(selectedGuitar);
    }
    return (
        <div className="guitar">
            <img className="image" src={image.data.attributes.url} alt={`Guitar ${name} in a white background`} />

            <div className="content">
                <h3>{name}</h3>
                <p className="text">{description}</p>
                <p className="price">{price}</p>

                <form action="" className="form" onSubmit={handleSubmit}>
                    <label htmlFor="amount">Amount</label>
                    <select name="" id="amount" ref={amountRef}>
                        <option value="0">--- SELECT ---</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input type="submit" value={'Add to cart'}/>
                </form>
            </div>
        </div>
    );
}

export default Guitar;