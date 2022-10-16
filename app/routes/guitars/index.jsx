import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import GuitarList from "~/components/guitar-list";

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
        <>
            <GuitarList guitars={data}/>
        </>
    );
}

export default Store;