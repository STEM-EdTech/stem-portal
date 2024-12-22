import React from "react";
import Head from "next/head";

type SEOProps = {
    title: string;
    description: string;
};

export const SEO = ({ title, description }: SEOProps) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
    );
};