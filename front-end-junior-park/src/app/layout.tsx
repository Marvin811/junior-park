import type { PropsWithChildren } from "react";
import "@/assets/styles/globals.scss";
import Providers from "@/providers/Providers";
import { SITE_NAME } from "@/constants/app.constants";
import { Metadata } from "next";
import { getSiteUrl } from "@/config/url.config";

export const metadata: Metadata = {
    icons: {
        icon: '/favicon.svg'
    },
    title: {
        absolute: SITE_NAME,
        template: `%s | ${SITE_NAME}`
    },
    metadataBase: new URL(getSiteUrl()),
    openGraph: {
        type: 'website',
        siteName: SITE_NAME,
        emails: ['info@juniorpark.ru']

    }
}

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return <html lang="ru">
    <body>
        <Providers>
            {children}
        </Providers>
        <div id="modal"></div>
    </body>


  </html>;
}
