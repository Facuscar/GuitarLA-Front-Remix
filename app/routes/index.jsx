import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import { getPosts } from "~/models/posts.server";
import GuitarList from "~/components/guitar-list";
import PostList from "~/components/post-list";
import styles from '~/styles/guitars.css'
import blogStyles from "~/styles/blog.css";

export const links = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles,
        },
        {
            rel: 'stylesheet',
            href: blogStyles,
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
            <div className="container">
                <PostList posts={posts}/>
            </div>
        </>
    );
}

export default Index;