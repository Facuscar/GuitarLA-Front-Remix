import { Link } from "@remix-run/react";

const Guitar = ({guitar}) => {
    const {description, image, price, url, name} = guitar.attributes;
    
    return (
        <div className="guitar">
            <img src={image.data.attributes.formats.medium.url} alt={`Guitar ${name} with a white background`} />
            <div className="content">
                <h3>{name}</h3>
                <p className="description">{description}</p>
                <p className="price">{price}</p>
                <Link className="link" to={`/guitars/${url}`}>See more</Link>
            </div>
        </div>
    );
}

export default Guitar;