import { ApolloProvider } from '@apollo/client'
import apolloClient from '../lib/apollo'

const About = dynamic(() => import("../templates/todo"), {
  ssr: false,
});
import dynamic from "next/dynamic";
const Index = () => <ApolloProvider client={apolloClient}><About /></ApolloProvider>;
// export function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: require(`../locales/${locale}.json`),
//     },
//   };
// }
export default Index;

