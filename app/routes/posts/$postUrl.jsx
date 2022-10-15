import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";

export const loader = async ({ params } ) => {
    const { postUrl } = params;
    const post = await getPost(postUrl);

    if(post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitar not found',
        })
    }

    return post;
}

const Post = () => {
    const post = useLoaderData();
    console.log(post);
    return (
        <h1>This is a post</h1>
    );
}

export default Post;