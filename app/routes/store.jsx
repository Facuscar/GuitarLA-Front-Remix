import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import GuitarList from "~/components/guitar-list";
import styles from '~/styles/guitars.css'

export const links = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles,
        },
    ]
}

export const meta = () => {
    return {
        title: 'GuitarLA - Guitar store',
        description: 'GuitarLA - Our guitar collection',
    }
}

export const loader = async () => {
    const guitars = await getGuitars();
    return guitars
}


const Store = () => {
    const { data } = useLoaderData();
    return (
        <main className="container">
            <GuitarList guitars={data}/>
        </main>
    );
}

export default Store;