function Responsive() {
    return(
        <>
            <div className="hidden xs:flex bg-blue-100 p-2 text-sm">xs</div>
            <div className="hidden sm:flex bg-primary p-2 text-sm">sm</div>
            <div className="hidden md:flex bg-secondary p-2 text-md">md</div>
            <div className="hidden lg:flex bg-primary p-2 text-lg">lg</div>
            <div className="hidden xl:flex bg-secondary p-2 text-xl">xl</div>
            <div className="hidden 2xl:flex bg-primary p-2 text-2xl">2xl</div>
        
            <div className="bg-pink-50 sm:bg-red-50 md:bg-red-100 lg:bg-red-200 xl:bg-red-300 2xl:bg-red-400 p-2">
                Responsive
            </div>
        </>
    );
}

export default Responsive;

/**
 * sm
 * md
 * lg
 * xl
 * 2xl
 */