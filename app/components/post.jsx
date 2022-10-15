import { Link } from "@remix-run/react";

const Post = ({ post }) => {
    const { content, image, title, url, publishedAt } = post;

    return (
        <article>
            <img src={image.data.attributes.formats.small.url} alt={`Blog image ${title}`} className="image"/>
            <div className="content">
                <h3>{title}</h3>
                <p className="date">{publishedAt}</p>
                <p className="abstract">{content}</p>
                <Link className="link" to={`/posts/${url}`}>Read post</Link>
            </div>
        </article>
    );
}

export default Post;