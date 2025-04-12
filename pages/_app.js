import Head from 'next/head';
import "../public/assets/css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>Young Nova | Empowering Future Innovators</title>
          <meta
              name="description"
              content="Young Nova offers interactive online learning experiences for kids, focusing on creativity, coding, and critical thinking."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="UTF-8" />
        </Head>
        <Component {...pageProps} />
      </>
  );
}
