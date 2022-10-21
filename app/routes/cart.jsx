import styles from "~/styles/cart.css";

export const links = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles,
        },
    ]
}

export const meta = () => {
    return {
        title: 'GuitarLA - Shopping Cart',
        description: 'Shopping cart of the GuitarLA store',
    }
}

const Cart = () => {
    return (
        <main className="container">
            <h1 className="heading">Shopping cart</h1>
            <div className="content">
                <div className="cart">
                    <h2>Articles</h2>
                </div>
                
                <aside className="resume">
                    <h3>Items:</h3>
                    <p>Subtotal: ${}</p>
                </aside>
            </div>
            
        </main>
    )
}

export default Cart;