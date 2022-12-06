const WorkCard = ({ name, link, img }) => {
	return (
		<div className='w-fit'>
			<div class='flex flex-col items-center justify-center py-4 sm:flex-row sm:justify-between sm:py-8'>
				<h2 class=' font-Raleway hidden text-center text-[20px] text-white sm:relative sm:block md:text-left'>
					{name}
				</h2>
				<div class='flex w-full items-center justify-between space-x-4 sm:w-fit sm:justify-center'>
					<div class='font-Raleway bg-green z-30 w-fit  cursor-pointer rounded-md  px-8 py-[9px] text-[12px] font-medium uppercase duration-[10ms] ease-in-out'>
						<a
							target='_blank'
							rel='noreferrer'
							href={link}
							class='font-Raleway flex items-center justify-center text-center text-white'>
							Live Preview
						</a>
					</div>
				</div>
			</div>
			<div class='flex w-fit justify-center'>
				<div class='z-50 cursor-pointer'>
					<a target='_blank' rel='noreferrer' href={link}>
						<div className='border-green relative flex items-center justify-center rounded-[24px] border-[1px]'>
							<span className=' w-initial h-initial relative m-0 box-border inline-block max-w-full overflow-hidden border-0 bg-none p-0'>
								<span className=' w-initial h-initial relative m-0 box-border inline-block max-w-full overflow-hidden border-0 bg-none p-0'>
									<img
										alt='aria-hidden=true'
										src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27470%27%20height=%27360%27/%3e'
										className=' w-initial h-initial m-0 block max-w-full border-0 bg-none p-0'></img>
								</span>
								<img
									alt='_img'
									src={img}
									decoding='async'
									data-nimg='intrinsic'
									class='absolute inset-0 m-auto box-border block h-0 max-h-full min-h-full w-0 min-w-full max-w-full rounded-[24px] border-none object-cover p-0'></img>
							</span>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

const Work1 = () => {
	return (
		<WorkCard
			name='Lakeview Fitness Gym'
			link='https://www.behance.net/gallery/157736259/Lakeview-Fitness-Gym-Social-Media-Vol9'
			img='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/3c6352157736259.Y3JvcCwxNjE2LDEyNjQsMCww.jpg'
		/>
	);
};

const Work2 = () => {
	return (
		<WorkCard
			name='Stock Market Trading Campaign'
			link='https://www.behance.net/gallery/157225099/Stock-Market-Trading-Social-Media-Campaign-Vol8'
			img='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/79ef85157225099.Y3JvcCwxNjE2LDEyNjQsMCww.jpg'
		/>
	);
};

const Work3 = () => {
	return (
		<WorkCard
			name='Miniso Bhuj Campaign'
			link='https://www.behance.net/gallery/156664811/Miniso-Bhuj-Social-Media-Campaign-Vol7'
			img='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c924de156664811.6375a5123adf0.png'
		/>
	);
};

const Work4 = () => {
	return (
		<WorkCard
			name='Indian Food Campaign'
			link='https://www.behance.net/gallery/140796247/Indian-Food-Social-Media-Campaign-Vol4'
			img='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/760f74140796247.Y3JvcCwxNjE2LDEyNjQsMCww.jpg'
		/>
	);
};

export default function Works() {
	return (
		<div class='relative z-50'>
			<div class='font-goku mt-[100px] py-[120px] text-white md:pt-[170px] md:pb-[90px]'>
				<div class='m-auto flex w-full flex-col sm:w-fit'>
					<div
						class=' text-shadow-green  text-green text-fill-transparent  text-stroke  absolute z-0 -translate-x-20 -translate-y-20 text-[96px]  duration-[10ms]   ease-in-out'
						style={{
							transform: "translateX(-70px) translateY(-70px) translateZ(0px)",
						}}>
						WORKS
					</div>
					<h1 class='z-10 m-auto flex flex-wrap justify-center text-center text-[40px] uppercase opacity-100 md:text-[48px]'>
						Recent Works
					</h1>
					<div class='flex items-center justify-between'>
						<div class='flex h-[1px] w-0 justify-start bg-white'></div>
						<h2 class='xdemipho2:ml-10 font-Raleway translate-z-0 ml-16 flex translate-x-[100px] flex-wrap items-end justify-end whitespace-nowrap pl-4 text-[11px] uppercase opacity-0 md:text-[13px]'>
							Works
						</h2>
					</div>
				</div>
			</div>

			<div class=' text-white sm:mx-[0px] md:mx-[10px] lg:mx-[100px] xl:mx-[100px] 2xl:mx-[250px]'>
				<div class='mb-[90px] flex flex-col sm:mb-[200px]'>
					<div class='flex flex-col items-center justify-center gap-x-20 xl:flex-row'>
						<div class='border-green relative transform-none items-end justify-end rounded-[24px] sm:flex sm:max-h-[415px] sm:max-w-fit sm:border-[1px] sm:border-t-[0] sm:p-8'>
							<Work1 />
						</div>
						<div class='border-green relative mb-0 mt-10 transform-none items-end  justify-end rounded-[24px] sm:mt-20 sm:flex sm:max-h-[415px] sm:max-w-fit sm:border-[1px] sm:border-t-[0] sm:p-8 xl:mt-48'>
							<Work2 />
						</div>
					</div>

					<div class='flex flex-col items-center justify-center gap-x-20 xl:flex-row xl:items-start 2xl:items-start 2xl:justify-center'>
						<div class='xl:mt-42 border-green relative  mt-10 transform-none items-end justify-end rounded-[24px] sm:mt-20 sm:flex sm:max-h-[415px] sm:max-w-fit sm:border-[1px] sm:border-t-[0] sm:p-8 md:mt-20 xl:mt-0'>
							<Work3 />
						</div>
						<div class='border-green  relative mt-10 transform-none items-end justify-end  rounded-[24px] duration-[10ms] ease-in-out sm:mt-20 sm:flex sm:max-h-[415px] sm:max-w-fit sm:border-[1px] sm:border-t-[0] sm:p-8 xl:mt-28'>
							<Work4 />
						</div>
					</div>
				</div>
			</div>

			<a href='https://www.behance.net/shivamsuthar' target='_blank' rel='noreferrer'>
				<div class='group relative z-50 m-auto mb-10 flex w-fit transform-none justify-center opacity-100'>
					<div class='z-50 flex w-fit cursor-pointer rounded-xl border-[1px] border-white'>
						<div class='bg-green font-Raleway  relative z-50 m-2 flex items-center justify-center space-x-2 rounded-xl px-8 py-[15px] uppercase text-white duration-[10ms] ease-in-out'>
							<span>View More</span>
							<div class='duration-[300ms] group-hover:-translate-y-1 group-hover:translate-x-2 group-hover:scale-150'>
								<svg
									stroke='currentColor'
									fill='currentColor'
									stroke-width='0'
									viewBox='0 0 16 16'
									class='rotate-45 text-white '
									height='1em'
									width='1em'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fill-rule='evenodd'
										d='M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z'
										clip-rule='evenodd'></path>
									<path
										fill-rule='evenodd'
										d='M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z'
										clip-rule='evenodd'></path>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
}
