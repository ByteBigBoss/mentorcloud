import { PageMetadata } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
    ...PageMetadata.topic
};

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div>
            {children}
        </div>

    );
}
