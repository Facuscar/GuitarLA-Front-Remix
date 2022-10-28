import { useOutletContext } from "@remix-run/react";
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
    const { cart, updateAmount } = useOutletContext();

    return (
        <main className="container">
            <h1 className="heading">Shopping cart</h1>
            <div className="content">
                <div className="cart">
                    <h2>Articles</h2>

                    {cart.length === 0 ? 'Empty cart' : (
                        cart.map( guitar => (
                            <div key={guitar.id} className="product">
                                <div>
                                    <img src={guitar.image} alt={`Guitar ${guitar.name} in a white background`} />
                                </div>
                                <div>
                                    <p className="name">{guitar.name}</p>
                                    <p>Amount: {guitar.amount}</p>
                                    <select name="" value={guitar.amount} className='select' onChange={ (e) => updateAmount({
                                        amount: +e.target.value,
                                        id: guitar.id
                                    }) }>
                                        <option value="0">--- SELECT ---</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>

                                    <p className="price">$ <span>{guitar.price}</span></p>
                                    <p className="subtotal">Subtotal: $ <span>{guitar.amount * guitar.price}</span></p>
                                </div>
                            </div>
                        ))
                    )}
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