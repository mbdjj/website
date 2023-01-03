import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { renderStatic } from "../lib/renderer";

export default class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const page = await ctx.renderPage();
    const { css, ids } = await renderStatic(page.html);
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          <style
            data-emotion={`css ${ids.join(" ")}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </React.Fragment>
      ),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="styles.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Rubik"
            rel="stylesheet"
            type="text/css"
          />
          <link rel="icon" href="./favicon.png" sizes="all" />
          <link rel="apple-touch-icon" href="./favicon.png" sizes="all" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
