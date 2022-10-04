import Cover from "./components/Cover";
import Projects from "./components/Projects";
import Exp from "./components/Exp";
import Works from "./components/Works";
import Blur from "./components/Blur";
import AnimatedCursor from "react-animated-cursor"
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="m-auto max-w-[1800px]" style={{ opacity: 1, transform: "none", background: "black" }}>
      <div className="overflow-hidden px-4 sm:px-8">
        <AnimatedCursor outerSize={8} outerScale={5} />
        <Blur />
        <Cover />
        <Projects />
        <Exp />
        <Works />
        <Contact />
      </div>
    </div >
  );
}
/*
<div className="sm:block hidden">
        <div id="dotOutline" className="absolute z-20 w-14 h-14 border-[0.5px] top-1/2 left-1/2 rounded-full -translate-y-1/2 opacity-100 transition ease-in-out -translate-x-1/2 " style={{ top: { x }, left: { y }, transform: "translate(-50%, -50%) scale(1)" }}></div>
        <div id="dot" className="absolute z-20 w-[0.3rem] h-[0.3rem] bg-green top-1/2 left-1/2 rounded-full -translate-y-1/2 opacity-100 transition ease-in-out -translate-x-1/2" style={{ top: { x }, left: { y }, transform: "translate(-50%, -50%) scale(1)" }}></div>
      </div>
      */
