import { AppProps } from "next/app";
import '@/assets/styles/global.css'


export default function App({
    Component, pageProps
}: AppProps
) {
    return <Component {...pageProps} />
}