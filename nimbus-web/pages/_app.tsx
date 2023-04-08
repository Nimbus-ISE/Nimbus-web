import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Layout from "@/components/Layout";
import { PlanTabProvider } from "@/components/PlanTab/PlanTabContext";
import { MapProvider } from "react-map-gl";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <PlanTabProvider>
            <MapProvider>
                <UserProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </UserProvider>
            </MapProvider>
        </PlanTabProvider>
    );
}
