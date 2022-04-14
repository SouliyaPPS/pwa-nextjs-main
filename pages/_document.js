import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
      <Html>
        <Head>
          <link rel="manifest" href="manifest.webmanifest.json" />
          <link rel="apple-touch-icon" href="../public/128.png" />
          <link rel="theme-color" href="#D48F20C6" />
          <meta name="background_color" content="#D48F20C6" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
	}
}

export default MyDocument;
