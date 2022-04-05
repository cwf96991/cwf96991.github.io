import { NextSeo } from "next-seo";
import Head from "next/head";
import { useEffect, useState } from "react";
import { AppConfig } from "../utils/AppConfig";

const Meta = (props) => {
  const favIcon = "/icon.ico";
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (window) {
      if (location.href.includes("#")) {
        let skill = location.href.split("#")[1];
        if (skill == "form") {
          setTitle("Form | ");
        } else if (skill == "3DHover") {
          setTitle("3D Hover Effect | ");
        } else if (skill == "SocialMedia") {
          setTitle("Share on Social Media | ");
        } else if (skill == "SocialMediaLogin") {
          setTitle("Social Media Login | ");
        }
      }
    }
  }, []);
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
          type="image/x-icon"
          href={favIcon}
          key="apple"
        />
        <link
          rel="icon"
          sizes="32x32"
          type="image/x-icon"
          href={favIcon}
          key="icon32"
        />
        <link
          rel="icon"
          sizes="16x16"
          type="image/x-icon"
          href={favIcon}
          key="icon16"
        />
        <link rel="icon" type="image/x-icon" href={favIcon} key="favicon" />
      </Head>
      <NextSeo
        title={title + props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: title + props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
          images: [
            {
              url: AppConfig.image,
              width: 200,
              height: 200,
              alt: AppConfig.site_name,
            },
          ],
        }}
      />
    </>
  );
};

export { Meta };
