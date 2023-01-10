import App from "next/app";
import Head from "next/head";

// import { NextIntlProvider } from "next-intl";
import '@/styles/globals.css';
import "animate.css/animate.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import "react-toastify/dist/ReactToastify.css";
// import { ApolloProvider } from '@apollo/client'
// import apolloClient from '../lib/apollo'
// import { UserProvider } from '@auth0/nextjs-auth0'

const MyApp = ({ Component, pageProps }) => (
  // <NextIntlProvider messages={pageProps.messages}>
  <>
    {/* <UserProvider> */}
  {/* <ApolloProvider client={apolloClient}> */}
    <Head>
      <meta
        name="google-site-verification"
        content="OHtX_0-91nlvNtx41DpDQmfkvUmBR2OMijG-caBa-U4"
      />
    </Head>
    <Meta
      title={AppConfig.title}
      description={AppConfig.description}
      canonical={AppConfig.canonical}
    />
    <Component {...pageProps} />
    {/* </ApolloProvider> */}
    {/* </UserProvider> */}
  </>
  // </NextIntlProvider>
);
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};
export default MyApp;
