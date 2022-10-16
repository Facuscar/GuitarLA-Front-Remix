import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server";
import PostList from "~/components/post-list";
import styles from "~/styles/blog.css";

export const loader = async () => {
    const posts = await getPosts();
    return posts.data;
}

export const links = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles,
        },
    ]
}


const Blog = () => {
    const posts = useLoaderData();

    return (
        <main className="container">
            <PostList posts={posts}/>
        </main>
    );
}

export default Blog;