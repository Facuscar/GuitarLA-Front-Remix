import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import Guitar from "~/components/guitar";

export const loader = async () => {
    const guitars = await getGuitars();
    return guitars
}


const Store = () => {
    const { data } = useLoaderData();
    return (
        <main className="container">
            <h2 className="heading">Our collection</h2>
            {data?.length && (
                <div className="guitar_grid">
                    {data.map( guitar => (
                        <Guitar 
                            key={guitar.id}
                            guitar={guitar}
                        />
                    ))}
                </div>
            )}
        </main>
    );
}

export default Store;