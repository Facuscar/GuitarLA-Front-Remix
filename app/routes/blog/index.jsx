import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server";
import PostList from "~/components/post-list";

export const loader = async () => {
    const posts = await getPosts();
    return posts.data;
}

const Blog = () => {
    const posts = useLoaderData();

    return (
        <PostList posts={posts}/>
    );
}

export default Blog;