import {
    Meta
} from '@remix-run/react'

export const meta = () => {
    return (
        {
            charset: 'utf-8',
            title: 'GuitarLA - Remix',
            viewport: "width=device-width, initial-scale=1",
        }
    )
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
                <Meta></Meta>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}