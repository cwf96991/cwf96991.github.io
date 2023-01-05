
const About = dynamic(() => import("../templates/chatRoom"), {
  ssr: false,
});
import dynamic from "next/dynamic";
const Index = () => <About />;

export default Index;

