import { useLoaderData } from "@remix-run/react";
import { getGuitar } from "~/models/guitars.server";

export const loader = async ({ params } ) => {
    const { guitarUrl } = params;
    
    return await getGuitar(guitarUrl);
}

const Guitar = () => {
    const guitar = useLoaderData();
    return (
        <h1>Hi</h1>
    );
}

export default Guitar;