import Cover from "./components/Cover";
import Exp from "./components/Exp";
import Works from "./components/Works";
import Contact from "./components/Contact";
import AnimatedCursor from "react-animated-cursor"
import Design from "./components/Design";

export default function App() {
  return (
    <div className="m-auto" style={{ opacity: 1, transform: "none", background: "black" }}>
      <div className="overflow-hidden px-4 sm:px-8">
        <AnimatedCursor outerSize={8} outerScale={5} />
        <Cover />
        <Design />
        <Exp />
        <Works />
        <Contact />
      </div>
    </div >
  );
}