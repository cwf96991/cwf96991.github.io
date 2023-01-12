import { Meta } from "../layout/Meta";
import Navbar from "../components/Navbar";
// import { AnimationOnScroll } from "react-animation-on-scroll";
// import { Footer } from "./Footer";
import { AppConfig } from "../utils/AppConfig";

const Basic = (props) => {
  const title = props?.title === undefined ? "" : `${props?.title} | `;
  return (
    <div className="flex flex-col w-full font-mono antialiased text-black bg-white ">
      <Meta
        title={`${title}${AppConfig.title}`}
        ogTitle={`${title}${AppConfig.ogTitle}`}
        description={AppConfig.description}
        canonical={AppConfig.url}
        ogDescription={AppConfig.description}
      />
      <Navbar />

      {props.children}
      {/* <div>
        footer
      </div> */}
      {/* <AnimationOnScroll animateIn="animate__fadeIn">
        <Footer />
      </AnimationOnScroll> */}
    </div>
  );
};
export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}
export default Basic;
