import Cover from "./components/Cover";
import Exp from "./components/Exp";
import Works from "./components/Works";
import Contact from "./components/Contact";
import AnimatedCursor from "react-animated-cursor";
import Design from "./components/Design";

export default function App() {
	return (
		<div className='m-auto transform-none bg-black'>
			<div className='overflow-hidden px-4 sm:px-8'>
				<AnimatedCursor outerSize={8} outerScale={5} />
				<Cover />
				<Design />
				<Exp />
				<Works />
				<Contact />
				<div className='relative'>
					<div
						class='absolute top-[10%] left-1/2 z-[2] -translate-x-1/2 -translate-y-1/2'
						style={{
							opacity: 1,
							transform: "translateX(-50%) translateY(200px) translateZ(0px);",
						}}>
						<canvas class='bg-green h-[600px] w-[600px] rounded-full blur-[250px]  duration-[10ms]  ease-in-out'></canvas>
					</div>
				</div>
			</div>
		</div>
	);
}
