import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatDate } from "~/utils/helpers";
import styles from '~/styles/blog.css'

export const loader = async ({ params } ) => {
    const { postUrl } = params;
    const post = await getPost(postUrl);

    if(post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Post not found',
        })
    }

    return post;
}
export const meta = ({data}) => {
    if(!data) {
        return {
            title: 'Post not found',
            description: 'Post not found',
        }
    }
    return {
        title: `GuitarLA - ${data.data[0].attributes.title}`,
        description: `Guitar blog, ${data.data[0].attributes.title}`,
    }
}

export const links = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles,
        },
    ]
}

const Post = () => {
    const post = useLoaderData();
    
    const { title, content, image, publishedAt } = post.data[0]?.attributes;

    return (
        <article className="container post">
            <img src={image.data.attributes.formats.small.url} alt={`Blog of ${title}`} className="image"/>
            <div className="content">
                <h3>{title}</h3>
                <p className="date">{formatDate(publishedAt)}</p>
                <p className="abstract">{content}</p>
            </div>
        </article>
    );
}

export default Post;