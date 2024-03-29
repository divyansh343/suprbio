import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
                    <meta name="theme-color" content="#570df8" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.cdnfonts.com/css/pacaembu-trial" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&family=Sarabun&family=Source+Sans+Pro&family=Palanquin+Dark:wght@600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument 