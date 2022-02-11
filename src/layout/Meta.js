import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";

import { AppConfig } from "../utils/AppConfig";

const Meta = (props) => {
  const router = useRouter();
  const favIcon = "https://cwf96991.github.io/favicon.ico"
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={favIcon}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={favIcon}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={favIcon}
          key="icon16"
        />
        <link
          rel="icon"
          href={favIcon}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          images: [
            {
              url: AppConfig.image,
              width: 192,
              height: 192,
              alt: AppConfig.site_name,
            },
          ],
        }}
      />
    </>
  );
};

export { Meta };
