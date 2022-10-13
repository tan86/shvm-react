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
				<div className='relative h-[100px]'>
					<div class='font-Raleway flex transform-none flex-col justify-around uppercase text-white opacity-100 md:flex-row'>
						<div>
							<h1 class='flex-col relative z-[11] flex items-center justify-center text-center text-[14px] text-white md:text-[15px]'>
								DEVELOPED BY JAY PARMAR
							</h1>
						</div>
						<div class='z-[30] my-8 flex items-center justify-center delay-300 md:my-0 md:justify-end'>
							<div class='xdemipho2:flex-wrap xdemipho2:space-x-0 flex justify-center space-x-8 '>
								<a
									target='_blank'
									rel='noreferrer'
									href='https://twitter.com/Sus_lameda'
									aria-label='twitter'>
									<svg
										stroke='currentColor'
										fill='currentColor'
										stroke-width='0'
										viewBox='0 0 24 24'
										class='xdemipho2:mt-4 xdemipho2:mx-4 h-[19px] w-[19px] text-white'
										height='1em'
										width='1em'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fill-rule='evenodd'
											d='M24,4.3086 C23.117,4.7006 22.168,4.9646 21.172,5.0836 C22.188,4.4746 22.969,3.5096 23.337,2.3596 C22.386,2.9246 21.332,3.3336 20.21,3.5556 C19.312,2.5976 18.032,1.9996 16.616,1.9996 C13.897,1.9996 11.692,4.2046 11.692,6.9236 C11.692,7.3096 11.736,7.6856 11.82,8.0456 C7.728,7.8406 4.099,5.8806 1.671,2.9006 C1.247,3.6286 1.004,4.4736 1.004,5.3766 C1.004,7.0846 1.873,8.5926 3.195,9.4756 C2.388,9.4486 1.628,9.2276 0.964,8.8596 L0.964,8.9206 C0.964,11.3066 2.661,13.2966 4.914,13.7486 C4.501,13.8626 4.065,13.9216 3.617,13.9216 C3.299,13.9216 2.991,13.8906 2.69,13.8336 C3.317,15.7896 5.135,17.2136 7.29,17.2536 C5.604,18.5736 3.481,19.3606 1.175,19.3606 C0.777,19.3606 0.385,19.3376 0,19.2926 C2.179,20.6886 4.767,21.5046 7.548,21.5046 C16.605,21.5046 21.557,14.0016 21.557,7.4946 C21.557,7.2816 21.552,7.0696 21.543,6.8586 C22.505,6.1636 23.34,5.2966 24,4.3086'></path>
									</svg>
								</a>
								<a
									target='_blank'
									rel='noreferrer'
									aria-label='linkedin'
									href='https://www.linkedin.com/in/jayparmar86/'>
									<svg
										stroke='currentColor'
										fill='currentColor'
										stroke-width='0'
										viewBox='0 0 24 24'
										class='xdemipho2:mt-4 xdemipho2:mx-4 h-[20px] w-[20px] text-white'
										height='1em'
										width='1em'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fill-rule='evenodd'
											d='M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z'></path>
									</svg>
								</a>
								<a
									target='_blank'
									rel='noreferrer'
									aria-label='github'
									href='https://github.com/tan86'>
									<div class=' xdemipho2:mx-4 xdemipho2:mt-4'>
										<svg
											width='20'
											height='20'
											viewBox='0 0 15 15'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z'
												fill='currentColor'
												fill-rule='evenodd'
												clip-rule='evenodd'></path>
										</svg>
									</div>
								</a>
							</div>
						</div>
					</div>

					<div
						class='-translate-y-1/8 absolute top-[10%] left-1/2 z-[2] -translate-x-1/2'
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
