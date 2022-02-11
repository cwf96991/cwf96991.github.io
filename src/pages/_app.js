import App from "next/app";
import { NextIntlProvider } from "next-intl";
import "../styles/global.css";
import "animate.css/animate.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Meta} from "../layout/Meta";
import { AppConfig } from '../utils/AppConfig';
const MyApp = ({ Component, pageProps }) => (
  // <NextIntlProvider messages={pageProps.messages}>
  <>
    <Meta
      title={AppConfig.title}
      description={AppConfig.description}
      canonical={AppConfig.canonical}
    />
    <Component {...pageProps} />
    </>
  // </NextIntlProvider>
);
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};
export default MyApp;