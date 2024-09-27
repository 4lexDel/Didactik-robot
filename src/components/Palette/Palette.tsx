function Palette() {
    return (
        <div className="palette flex flex-row gap-3 m-3 justify-center">
            <div className="w-24 h-24 bg-primary flex justify-center items-center text-text">primary</div>
            <div className="w-24 h-24 bg-secondary flex justify-center items-center text-text">secondary</div>
            <div className="w-24 h-24 bg-accent flex justify-center items-center text-text">accent</div>
            <div className="w-24 h-24 bg-info flex justify-center items-center text-text">info</div>
            <div className="w-24 h-24 dark:bg-white bg-black flex justify-center items-center text-text">tailwindcss</div>
        </div>
    );
}

export default Palette;