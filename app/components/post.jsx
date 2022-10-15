import { Link } from "@remix-run/react";
import { formatDate } from "~/utils/helpers";

const Post = ({ post }) => {
    const { content, image, title, url, publishedAt } = post;

    return (
        <article className="post">
            <img src={image.data.attributes.formats.small.url} alt={`Blog of ${title}`} className="image"/>
            <div className="content">
                <h3>{title}</h3>
                <p className="date">{formatDate(publishedAt)}</p>
                <p className="abstract">{content}</p>
                <Link className="link" to={`/posts/${url}`}>Read post</Link>
            </div>
        </article>
    );
}

export default Post;