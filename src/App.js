import Cover from "./components/Cover";
import Projects from "./components/Projects";
import Exp from "./components/Exp";
import Works from "./components/Works";
import Blur from "./components/Blur";
import AnimatedCursor from "react-animated-cursor"
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="m-auto" style={{ opacity: 1, transform: "none", background: "black" }}>
      <Blur />
      <div className="overflow-hidden px-4 sm:px-8">
        <AnimatedCursor outerSize={8} outerScale={5} />
        <Cover />
        <Projects />
        <Exp />
        <Works />
        <Contact />
      </div>
    </div >
  );
}