import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import { getPosts } from "~/models/posts.server";
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
}

export const loader = async () => {

    const [guitars, posts] = await Promise.all([getGuitars(), getPosts()])

    return {
        guitars: guitars.data,
        posts: posts.data,
    }
}

const Index = () => {
    const { guitars, posts } = useLoaderData();

    return (
        <>
            <main className="container">
                <GuitarList guitars={guitars}/>
            </main>
        </>
    );
}

export default Index;