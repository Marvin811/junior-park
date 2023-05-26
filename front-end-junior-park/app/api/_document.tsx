// eslint-disable-next-line @next/next/no-document-import-in-page
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html land='ru'>
            <Head>
                <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg-xml" />
            </Head>
            <body> 
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}