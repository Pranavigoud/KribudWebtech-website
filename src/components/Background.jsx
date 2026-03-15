import InteractiveGrid from './InteractiveGrid';

const Background = () => {
    return (
        <div className="fixed inset-0 z-0 bg-primary pointer-events-none">
            {/* Base Background Image */}
            <div className="absolute inset-0 opacity-40">
                <img
                    src="/src/assets/hero-bg.png"
                    alt=""
                    className="w-full h-full object-cover animate-pan-slow opacity-60"
                />
            </div>

            {/* Interactive Grid Layer */}
            <InteractiveGrid />

            {/* Global Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90 z-10"></div>

            {/* Global Decorative Elements */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] opacity-30 animate-pulse z-20"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[100px] opacity-20 z-20"></div>
            {/* Removed static grid svg to avoid conflict/clutter with new 3D grid */}
        </div>
    );
};

export default Background;
