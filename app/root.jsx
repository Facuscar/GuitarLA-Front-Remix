import {
    Meta,
    Links,
    Outlet
} from '@remix-run/react'
import styles from './styles/index.css'

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
    return (
        <Document>
            <Outlet />
        </Document>
    );
}

const Document = ({children}) => {
    return (
        <html lang="es">
            <head>
                <title>GuitarLA - Remix</title>
                <Meta />
                <Links />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}