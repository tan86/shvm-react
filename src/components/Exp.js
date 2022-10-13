const ListItem = ({ item }) => {
	return (
		<div className='flex items-center justify-start'>
			<div className='mr-[15px] transform-none rounded-full border-[1px] border-white'>
				<div className='bg-green  m-[4px] h-2 w-2 rounded-full duration-[10ms]  ease-in-out '></div>
			</div>
			<span>{item}</span>
		</div>
	);
};

export default function Exp() {
	return (
		<div className='relative'>
			<div className='mx-0 text-white sm:mx-[0px] md:mx-[10px] lg:mx-[100px] xl:mx-[200px] 2xl:mx-[400px]'>
				<div className='font-goku mt-[100px] py-[120px] text-white md:py-[170px]'>
					<div className='m-auto flex w-full flex-col sm:w-fit'>
						<div
							className='text-shadow-green text-green  text-fill-transparent  text-stroke absolute  z-0 -translate-x-20 -translate-y-20 text-[96px] duration-[10ms] ease-in-out'
							style={{ transform: "translateX(-70px) translateY(-70px) translateZ(0px)" }}>
							SKILLS
						</div>
						<h1
							className='z-10 m-auto flex flex-wrap justify-center text-center text-[40px] uppercase md:text-[48px]'
							style={{ opacity: 1 }}>
							Experience
						</h1>
						<div className='flex items-center justify-between'>
							<div className='flex h-[1px] justify-start bg-white' style={{ width: "100%" }}></div>
							<h2 className='xdemipho2:ml-10 font-Raleway ml-16 flex transform-none flex-wrap items-end justify-end whitespace-nowrap pl-0 text-[11px] uppercase md:pl-10 md:text-[13px]'>
								Tools
							</h2>
						</div>
					</div>
				</div>
				<div className='font-goku grid justify-center text-[32px] '>
					<div className='grid grid-cols-1 gap-y-20 gap-x-32 capitalize sm:grid-cols-2 lg:grid-cols-3 '>
						<div className='w-[210px] '>
							<div>
								<h1
									className='text-fill-transparent text-stroke text-shadow-purple text-green  absolute  z-10 -translate-x-8 -translate-y-10  text-[60px]  duration-[10ms] ease-in-out'
									style={{ transform: "translateX(-25px) translateY(-35px) translateZ(0px)" }}>
									01
								</h1>
								<h1 className='z-50' style={{ transform: "translateY(5px) translateZ(0px)" }}>
									DESIGN
								</h1>
							</div>
							<div className='font-Raleway my-8 transform-none space-y-8 text-[13px]'>
								<ListItem item='Graphics Design' />
								<ListItem item='Campaign Design' />
								<ListItem item='Motion Design' />
								<ListItem item='Video Editing' />
								<ListItem item='illustrations' />
								<ListItem item='3D Renders' />
							</div>
						</div>
						<div className='w-[210px] '>
							<div>
								<h1
									className='text-fill-transparent text-stroke text-shadow-purple text-green  absolute  z-10 -translate-x-8 -translate-y-10  text-[60px]  duration-[10ms] ease-in-out'
									style={{ transform: "translateX(-25px) translateY(-35px) translateZ(0px)" }}>
									02
								</h1>
								<h1
									className='z-50 flex-nowrap whitespace-nowrap uppercase'
									style={{ transform: "translateY(5px) translateZ(0px)" }}>
									Tools
								</h1>
							</div>
							<div className='font-Raleway my-8 transform-none space-y-8 text-[13px]'>
								<ListItem item='Photoshop' />
								<ListItem item='Lightroom' />
								<ListItem item='Illustrator' />
								<ListItem item='After Effects' />
								<ListItem item='Premiere Pro' />
								<ListItem item='Blender' />
							</div>
						</div>
						<div className='w-[210px] '>
							<div>
								<h1
									className='text-fill-transparent text-stroke text-shadow-purple text-green  absolute  z-10 -translate-x-8 -translate-y-10  text-[60px]  duration-[10ms] ease-in-out'
									style={{ transform: "translateX(-25px) translateY(-35px) translateZ(0px)" }}>
									03
								</h1>
								<h1
									className='z-50 uppercase'
									style={{ transform: "translateY(5px) translateZ(0px)" }}>
									overall
								</h1>
							</div>
							<div className='font-Raleway my-8 transform-none space-y-8 text-[13px]'>
								<ListItem item='Patient' />
								<ListItem item='Commited' />
								<ListItem item='Disciplined' />
								<ListItem item='Professional' />
								<ListItem item='Punctual' />
								<ListItem item='enthusiast' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
