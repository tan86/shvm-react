const WorkCard = ({ name, link }) => {
    return (
        <div class="flex flex-col justify-center items-center py-4 sm:justify-between sm:flex-row sm:py-8">
            <h2 class=" text-white hidden sm:block text-center md:text-left sm:relative font-Raleway text-[20px]">{name}</h2>
            <div class="flex w-full sm:w-fit items-center sm:justify-center justify-between space-x-4">
                <div class="text-[12px] px-8 py-[9px] w-fit  cursor-pointer duration-[10ms]  ease-in-out z-30 font-medium font-Raleway uppercase bg-green rounded-md">
                    <a target="_blank" rel="noreferrer" href={link} class="flex text-white font-Raleway text-center justify-center items-center">Live Preview</a>
                </div>
            </div>
        </div>
    );
}

const Img = ({ img }) => {
    return (
        <div class="flex justify-center w-fit">
            <div class="z-50 cursor-pointer">
                <div class="rounded-[24px] relative flex justify-center items-center border-green border-[1px]">
                    <span style={{ "box-sizing": "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", "max-width": "100%" }}>
                        <span style={{ "box-sizing": "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", "max-width": "100%" }}>
                            <img alt="aria-hidden=true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27470%27%20height=%27360%27/%3e" style={{ display: "block", "max-width": "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }}></img>
                        </span>
                        <img alt="_img" src={img} decoding="async" data-nimg="intrinsic" class="object-cover rounded-[24px]" style={{ position: "absolute", inset: "0px", "box-sizing": "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", "min-width": "100%", "max-width": "100%", "min-height": "100%", "max-height": "100%" }}></img>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default function Works() {
    return (
        <div class="relative">
            <div class="z-50">
                <div class="font-goku text-white py-[120px] md:pt-[170px] md:pb-[90px] mt-[100px]">
                    <div class="flex flex-col w-full sm:w-fit m-auto">
                        <div class=" text-shadow-green  text-green duration-[10ms]  ease-in-out  -translate-x-20 text-fill-transparent text-stroke text-[96px] absolute  -translate-y-20   z-0" style={{ opacity: 1, transform: "translateX(-70px) translateY(-70px) translateZ(0px)" }}>WORKS</div>
                        <h1 class="uppercase m-auto text-[40px] md:text-[48px] flex-wrap z-10 flex justify-center text-center" style={{ opacity: 1 }}>Recent Works</h1>
                        <div class="flex items-center justify-between">
                            <div class="h-[1px] flex justify-start bg-white" style={{ width: "0%" }}></div>
                            <h2 class="ml-16 xdemipho2:ml-10 whitespace-nowrap font-Raleway text-[11px] md:text-[13px] uppercase flex justify-end flex-wrap pl-4 items-end " style={{ opacity: 0, transform: "translateX(100px) translateZ(0px)" }}>Works</h2>
                        </div>
                    </div>
                </div>

                <div class=" text-white sm:mx-[0px] md:mx-[10px] lg:mx-[100px] xl:mx-[100px] 2xl:mx-[250px]">
                    <div class="flex flex-col sm:mb-[200px] mb-[90px]">
                        <div class="flex justify-center items-center gap-x-20 flex-col xl:flex-row">
                            
                            <div class="sm:border-[1px] sm:border-t-[0] relative border-green sm:max-w-fit sm:max-h-[415px] sm:flex justify-end items-end rounded-[24px] sm:p-8" style={{ opacity: 1, transform: "none" }}>
                                <div class="w-fit">
                                    <WorkCard name="Honda Cars Campaign" link="https://www.behance.net/gallery/151527031/Honda-cars-Social-Media-Campaign-Vol6" />
                                    <Img img="https://mir-s3-cdn-cf.behance.net/projects/404/45a086151527031.Y3JvcCwxNjE2LDEyNjQsMCww.jpg" />
                                </div>
                            </div>

                            <div class="sm:border-[1px] mb-0 mt-10 sm:mt-20 xl:mt-48 sm:border-t-[0]  relative border-green sm:max-w-fit sm:max-h-[415px] sm:flex justify-end items-end rounded-[24px] sm:p-8" style={{ opacity: 1, transform: "none" }}>
                                <div class="w-fit">
                                    <WorkCard name="Indian Food Campaign" link="https://www.behance.net/gallery/140796247/Indian-Food-Social-Media-Campaign-Vol4" />
                                    <Img img="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/760f74140796247.Y3JvcCwxNjE2LDEyNjQsMCww.jpg" />
                                </div>
                            </div>

                        </div>
                        <div class="flex justify-center items-center 2xl:justify-center 2xl:items-start xl:items-start gap-x-20 flex-col xl:flex-row">
                            <div class="sm:border-[1px] mt-10 sm:mt-20  md:mt-20 xl:mt-0 xl:mt-42 sm:border-t-[0] relative border-green sm:max-w-fit sm:max-h-[415px] sm:flex justify-end items-end rounded-[24px] sm:p-8" style={{ opacity: 1, transform: "none" }}>

                                <div class="w-fit">
                                    <WorkCard name="Gym Campaign" link="https://www.behance.net/gallery/134640115/Social-Media-Gym-Campaign-vol2" />
                                    <Img img="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ac4303134640115.Y3JvcCw3NDgsNTg1LDI5LDI0.jpg" />
                                </div>

                            </div>
                            <div class="sm:border-[1px]  mt-10 sm:mt-20 xl:mt-28 sm:border-t-[0] duration-[10ms]  ease-in-out relative border-green sm:max-w-fit sm:max-h-[415px] sm:flex justify-end items-end rounded-[24px] sm:p-8" style={{ opacity: 1, transform: "none" }}>

                                <div class="w-fit">
                                    <WorkCard name="Pharmacy Campaign" link="https://www.behance.net/gallery/133340023/Online-Pharmacy-Campaign-Vol1-Social-Media-Post" />
                                    <Img img="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/a63811133340023.Y3JvcCw4MDgsNjMyLDAsMA.jpg" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="group relative w-fit m-auto z-50 flex justify-center mb-10" style={{ opacity: 1, transform: "none" }}>
                    <div class="border-white flex cursor-pointer border-[1px] z-50 w-fit rounded-xl">
                        <div class="bg-green duration-[10ms]  ease-in-out uppercase space-x-2 flex justify-center items-center relative z-50 font-Raleway m-2 text-white px-8 py-[15px] rounded-xl">
                            <span>View More</span>
                            <div class="group-hover:-translate-y-1 duration-[300ms] group-hover:translate-x-2 group-hover:scale-150">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-white rotate-45 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z" clip-rule="evenodd"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}