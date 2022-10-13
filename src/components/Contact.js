export default function Contact() {
	return (
		<div class=' '>
			<div class='bg-main z-20 mb-[200px] w-full transform-none'>
				<div class='flex flex-col xl:flex-row items-center justify-items-center'>
					<div class='flex h-[250px]  w-[100%] items-center justify-center border-r-[0.5px] border-white/50 text-white xl:w-[50%]'>
						<div>
							<h2 class='font-Raleway xdemipho2:text-center transform-none text-left text-[37px] font-bold capitalize leading-[50px] sm:text-left sm:text-[48px] sm:leading-[60px] md:text-[50px]'>
								What are you <br /> waiting for?
							</h2>
						</div>
					</div>
					<div class=' flex h-auto w-[100%]  items-center justify-center py-10 xl:h-[400px] xl:w-[50%]'>
						<div class='font-Raleway mx-2 transform-none sm:mx-20'>
							<div class='relative z-30 py-6 delay-300'>
								<div class='xdemipho2:flex-col xdemipho2:justify-center xdemipho2:items-center xdemipho2:text-center xdemipho2:space-x-0 flex items-start space-x-4 pr-0 md:items-center md:pr-20'>
									<a href='tel:+918511686410'>
										<div class='bg-green z-30 w-fit cursor-pointer  rounded-full p-[14px]'>
											<svg
												stroke='currentColor'
												fill='currentColor'
												stroke-width='0'
												viewBox='0 0 512 512'
												class='text-main'
												height='1em'
												width='1em'
												xmlns='http://www.w3.org/2000/svg'>
												<path d='M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z'></path>
											</svg>
										</div>
									</a>
									<div class='xdemipho2:mt-2 leading-6'>
										<h2 class='text-green text-[16px] font-bold  uppercase tracking-[0.5px] sm:text-[18px]'>
											Phone
										</h2>
										<a href='tel:+918511686410'>
											<h3 class='text-[14px] font-medium tracking-[0.6px] text-white sm:text-[18px]'>
												(+91) 8511686410
											</h3>
										</a>
									</div>
								</div>

								<div class='my-6 h-[0.5px] w-full overflow-hidden bg-white/50 '></div>

								<div class='xdemipho2:flex-col xdemipho2:justify-center xdemipho2:items-center xdemipho2:text-center xdemipho2:space-x-0 flex items-start justify-start space-x-4'>
									<a href='mailto:shivamsuthar62@gmail.com'>
										<div class='bg-green z-30 w-fit cursor-pointer   rounded-full p-[14px]'>
											<svg
												stroke='currentColor'
												fill='currentColor'
												stroke-width='0'
												viewBox='0 0 24 24'
												class='text-main'
												height='1em'
												width='1em'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													fill-rule='evenodd'
													d='M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z'></path>
											</svg>
										</div>
									</a>
									<div class='xdemipho2:mt-2 leading-6'>
										<h2 class='text-green text-[16px] font-bold  uppercase tracking-[0.5px] sm:text-[18px]'>
											EMAIL
										</h2>
										<a href='mailto:shivamsuthar62@gmail.com'>
											<h3 class='text-[14px] font-medium tracking-[0.6px] text-white sm:text-[18px]'>
												shivamsuthar62@gmail.com
											</h3>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
