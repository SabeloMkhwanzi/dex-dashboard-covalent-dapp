// pages/_document.js
import { ColorModeScript } from "@chakra-ui/react";
// eslint-disable-next-line @next/next/no-document-import-in-page
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../theme"; // Import your theme here

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          {/* This script ensures the initial color mode is applied */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
