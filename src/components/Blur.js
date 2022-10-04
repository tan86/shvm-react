export default function Blur() {
    return (
        <div className="overflow-hidden">
            <div className="absolute -translate-x-1/2 z-10 -translate-y-1/2 left-1/2" style={{ opacity: 1, transform: "translateX(0px) translateY(-400px) translateZ(0px)" }}>
                <div className="bg-theme w-[1030px] h-[830px] blur-[200px] absolute -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            </div>
        </div>

    );
}