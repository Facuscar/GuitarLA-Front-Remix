import {
    Meta,
    Links
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
            href: styles,

        }
    ]
}
export default function App() {
    return (
        <Document>
            <h1>Hello, world!</h1>
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