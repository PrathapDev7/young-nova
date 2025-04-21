// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import React from "react";

export default function Document() {
    return (
        <Html style={{ colorScheme: 'light' }}>
            <Head>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}
