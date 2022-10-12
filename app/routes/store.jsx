import { getGuitars } from "~/models/guitars.server";

export const loader = async () => {
    const guitars = await getGuitars();
    return guitars
}


const Store = () => {
    return (
        <h1>From Store</h1>
    );
}

export default Store;