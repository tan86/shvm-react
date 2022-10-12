const ListItem = ({ item }) => {
    return (
        <div className="flex justify-start items-center">
            <div className="border-[1px] mr-[15px] border-white rounded-full transform-none">
                <div className="bg-green  w-2 h-2 rounded-full m-[4px] duration-[10ms]  ease-in-out ">
                </div>
            </div>
            <span>{item}</span>
        </div>
    );
};

export default function Exp() {
    return (
        <div className="relative">
            <div className="text-white mx-0 sm:mx-[0px] md:mx-[10px] lg:mx-[100px] xl:mx-[200px] 2xl:mx-[400px]">
                <div className="font-goku text-white py-[120px] md:py-[170px] mt-[100px]">
                    <div className="flex flex-col w-full sm:w-fit m-auto">
                        <div className="text-shadow-green duration-[10ms]  ease-in-out  text-green text-fill-transparent  text-stroke text-[96px] absolute -translate-x-20 -translate-y-20 z-0" style={{ opacity: 1, transform: "translateX(-70px) translateY(-70px) translateZ(0px)" }}>EXPERIENCE</div>
                        <h1 className="text-[40px] md:text-[48px] uppercase m-auto flex-wrap z-10 flex justify-center text-center" style={{ opacity: 1 }}>information technology</h1>
                        <div className="flex items-center justify-between">
                            <div className="h-[1px] flex justify-start bg-white" style={{ opacity: 1, width: "100%" }}></div>
                            <h2 className="ml-16 xdemipho2:ml-10 whitespace-nowrap font-Raleway text-[11px] md:text-[13px] uppercase flex justify-end flex-wrap pl-0 md:pl-10 items-end " style={{ opacity: 1, transform: "none" }}>experience</h2>
                        </div>
                    </div>
                </div>
                <div className="font-goku grid justify-center text-[32px] ">
                    <div className="grid-cols-1 capitalize gap-y-20 sm:grid-cols-2 lg:grid-cols-3 grid gap-x-32 ">
                        <div className="w-[210px] ">
                            <div>
                                <h1 className="z-10 -translate-x-8 -translate-y-10 duration-[10ms]  ease-in-out  text-fill-transparent text-stroke text-[60px]  text-shadow-purple  absolute text-green" style={{ opacity: 1, transform: "translateX(-25px) translateY(-35px) translateZ(0px)" }}>01</h1>
                                <h1 className="z-50" style={{ opacity: 1, transform: "translateY(5px) translateZ(0px)" }}>DESIGN</h1>
                            </div>
                            <div className="font-Raleway text-[13px] space-y-8 my-8 transform-none">
                                <ListItem item="Graphics Design" />
                                <ListItem item="Campaign Design" />
                                <ListItem item="Motion Design" />
                                <ListItem item="Video Editing" />
                                <ListItem item="illustrations" />
                                <ListItem item="3D Renders" />
                            </div>
                        </div>
                        <div className="w-[210px] ">
                            <div>
                                <h1 className="z-10 -translate-x-8 -translate-y-10 duration-[10ms]  ease-in-out  text-fill-transparent text-stroke text-[60px]  text-shadow-purple  absolute text-green" style={{ opacity: 1, transform: "translateX(-25px) translateY(-35px) translateZ(0px)" }}>02</h1>
                                <h1 className="z-50 uppercase flex-nowrap whitespace-nowrap" style={{ opacity: 1, transform: "translateY(5px) translateZ(0px)" }}>Tools</h1>
                            </div>
                            <div className="font-Raleway text-[13px] space-y-8 my-8 transform-none">
                                <ListItem item="Photoshop" />
                                <ListItem item="Illustrator" />
                                <ListItem item="After Effects" />
                                <ListItem item="Premiere Pro" />
                                <ListItem item="Blender" />
                            </div>
                        </div>
                        <div className="w-[210px] ">
                            <div>
                                <h1 className="z-10 -translate-x-8 -translate-y-10 duration-[10ms]  ease-in-out  text-fill-transparent text-stroke text-[60px]  text-shadow-purple  absolute text-green" style={{ opacity: 1, transform: "translateX(-25px) translateY(-35px) translateZ(0px)" }}>03</h1>
                                <h1 className="z-50 uppercase" style={{ opacity: 1, transform: "translateY(5px) translateZ(0px)" }}>overall</h1>
                            </div>
                            <div className="font-Raleway text-[13px] space-y-8 my-8 transform-none">
                                <ListItem item="Patient" />
                                <ListItem item="Commited" />
                                <ListItem item="Disciplined" />
                                <ListItem item="Professional" />
                                <ListItem item="Punctual" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}