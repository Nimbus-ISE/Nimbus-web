import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Layout from "@/components/Layout";
import { PlanTabProvider } from "@/components/PlanTab/PlanTabContext";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <PlanTabProvider>
            <UserProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </UserProvider>
        </PlanTabProvider>
    );
}
