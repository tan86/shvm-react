export default function Contact() {
    return (
        <div class=" ">
            <div class="bg-main z-20 w-full mb-[200px] " style={{ opacity: 1, transform: "none" }}>
                <div class="flex xl:flex-row flex-col ">
                    <div class="text-white flex justify-center items-center h-[400px] w-[100%] xl:w-[50%] bg-green">
                        <div>
                            <h2 class="font-Raleway xdemipho2:text-center font-bold leading-[50px] sm:leading-[60px] capitalize text-left sm:text-left text-[37px] sm:text-[48px] md:text-[50px]" style={{ opacity: 1, transform: "none" }}>What are you <br /> waiting for?</h2>
                        </div>
                    </div>
                    <div class=" border-green  flex border-b-4 py-10  justify-center items-center h-auto xl:h-[400px] w-[100%] xl:w-[50%]">
                        <div class="font-Raleway mx-2 sm:mx-20" style={{ opacity: 1, transform: "none" }}>
                            <div class="py-6 z-30 relative delay-300">

                                <div class="flex items-start md:items-center xdemipho2:flex-col xdemipho2:justify-center xdemipho2:items-center xdemipho2:text-center xdemipho2:space-x-0 space-x-4 pr-0 md:pr-20">
                                    <div class="bg-green w-fit rounded-full z-30  cursor-pointer p-[14px]">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-main" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                                    </div>
                                    <div class="leading-6 xdemipho2:mt-2">
                                        <h2 class="text-[16px] sm:text-[18px] text-green  font-bold uppercase tracking-[0.5px]">Phone</h2>
                                        <a href="tel:+918511686410"><h3 class="text-[14px] sm:text-[18px] tracking-[0.6px] text-white font-medium">(+91) 8511686410</h3></a>
                                    </div>
                                </div>

                                <div class="bg-white/50 overflow-hidden h-[0.5px] w-full my-6 "></div>

                                <div class="flex justify-start items-start xdemipho2:flex-col xdemipho2:justify-center xdemipho2:items-center xdemipho2:text-center xdemipho2:space-x-0 space-x-4">
                                    <div class="bg-green w-fit rounded-full z-30   cursor-pointer p-[14px]">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-main" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"></path></svg>
                                    </div>
                                    <div class="leading-6 xdemipho2:mt-2">
                                        <h2 class="text-[16px] sm:text-[18px] text-green  font-bold uppercase tracking-[0.5px]">EMAIL</h2>
                                        <a href="mailto:shivamsuthar62@gmail.com"><h3 class="text-[14px] sm:text-[18px] tracking-[0.6px] text-white font-medium">shivamsuthar62@gmail.com</h3></a>
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