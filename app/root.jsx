import { useState } from 'react';
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
    Link
} from '@remix-run/react'

import styles from '~/styles/index.css'
import Header from '~/components/header';
import Footer from '~/components/footer';

export const meta = () => {
    return (
        {
            charset: 'utf-8',
            title: 'GuitarLA - Remix',
            viewport: "width=device-width, initial-scale=1",
        }
    )
}

export const links = () => {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
        },
        {
            rel: 'stylesheet',
            href: styles,
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true',
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap',
        }
    ]
}
export default function App() {
    
    const [cart, setCart] = useState([]);

    const addToCart = (guitar) => {
        setCart((cart) => {
            if(cart.some(guitarState => guitarState.id === guitar.id)) {
              return cart.map(guitarState => {
                if(guitarState.id === guitar.id) {
                    guitarState.amount += guitar.amount;
                }
                return guitarState;
              });
            }
            return [...cart, guitar];
        })
    }

    const updateAmount = (guitar) => {
        const updatedCart = cart.map(guitarState => {
            if (guitarState.id === guitar.id) {
                guitarState.amount = guitar.amount;
            }

            return guitarState;
        })

        setCart(updatedCart);
    }

    return (
        <Document>
            <Outlet 
                context={{
                    addToCart,
                    cart,
                    updateAmount,
                }}
            />
        </Document>
    );
}

const Document = ({children}) => {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />

                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

export const CatchBoundary = () => {
    const error = useCatch();
    return (
        <Document>
            <p className='error'>
                {error.status} {error.statusText}
                <Link to="/" className='error-link'>You can return to the main page</Link>
            </p>
        </Document>
    )
}

export const ErrorBoundary = ({ error }) => {
    <Document>
            <p className='error'>
                {error.status} {error.statusText}
                <Link to="/" className='error-link'>You can return to the main page</Link>
            </p>
    </Document>
}