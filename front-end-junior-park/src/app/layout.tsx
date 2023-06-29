import type { PropsWithChildren } from "react";
import "@/assets/styles/globals.scss";
import Providers from "@/providers/Providers";

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
