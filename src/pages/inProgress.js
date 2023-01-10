
const About = dynamic(() => import("@/components/skill/linkPreview"), {
    ssr: false,
});
import dynamic from "next/dynamic";
const Index = () => <About />;
// export function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: require(`../locales/${locale}.json`),
//     },
//   };
// }
export default Index;

