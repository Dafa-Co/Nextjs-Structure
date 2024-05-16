import type {Metadata} from "next";

import {font} from "@/container/fonts";

import ReactQueryProvider from "@/container/providers/reactQueryProvider";

import LangProvider from "@/container/providers/langProvider";

import ThemeProvider from "@/container/providers/themeProvider";

import AuthProvider from "@/app/(auth)/auth/providers/authProvider";

import ServerHelper from "@/container/helpers/serverHelpers";

import {ToastContainer} from "react-toastify";

// css files
import "react-toastify/dist/ReactToastify.css";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Next.js Structure",
  description: "Next.js Structure",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // get theme from cookies
  const theme = await ServerHelper.getThemeOnServer();

  // get lang from cookies
  const lang = await ServerHelper.getLangOnServer();

  return (
    <ReactQueryProvider>
      <LangProvider>
        <ThemeProvider>
          <AuthProvider>
            <html lang={lang} data-theme={theme}>
              <body className={font.className}>
                <main>{children}</main>
                <div id='modal-root'></div>
                <ToastContainer />
              </body>
            </html>
          </AuthProvider>
        </ThemeProvider>
      </LangProvider>
    </ReactQueryProvider>
  );
}
