import { useLoaderData } from "@remix-run/react";
import { getGuitar } from "~/models/guitars.server";
import styles from '~/styles/guitars.css'

export const loader = async ({ params } ) => {
    const { guitarUrl } = params;
    
    return await getGuitar(guitarUrl);
}

export const links = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles,
        },
    ]
}

const Guitar = () => {
    const guitar = useLoaderData();
    const { name, description, image, price } = guitar.data[0].attributes;
    return (
        <main className="container guitar">
            <img className="image" src={image.data.attributes.url} alt={`Guitar ${name} in a white background`} />

            <div className="content">
                <h3>{name}</h3>
                <p className="text">{description}</p>
                <p className="price">{price}</p>
            </div>
        </main>
    );
}

export default Guitar;