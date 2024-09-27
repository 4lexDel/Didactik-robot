import { useEffect, useState } from "react";

function Header({onThemeToggle}: any) {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Check local storage for saved theme on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme === 'true') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
            onThemeToggle("dark");
        }
        else onThemeToggle("light");
    }, []);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
            onThemeToggle("dark");
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
            onThemeToggle("light");
        }
    };

    return (
        <>
            <nav className="bg-background border-b items-center
            grid grid-cols-8 lg:place-items-center">
                <a href="" className="flex items-center m-3 
                xl:col-span-1
                sm:col-span-2
                xs:col-span-1
                col-span-5 justify-self-start order-1">
                    <img src="https://pagepro.co/blog/wp-content/uploads/2020/04/react-1024x912.png" width="40px" className="m-3" alt="Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white
                    sm:block
                    xs:hidden
                    block">
                        Random
                    </span>
                </a>
                <div className={`justify-between items-center
                xl:col-span-4
                lg:col-span-2 lg:justify-self-center lg:flex lg:order-2
                xs:col-span-8
                ${isMenuOpen ? "" : "hidden"} col-span-3 justify-self-end order-6`}>
                    <ul className="flex flex-col text-xl lg:flex-row">
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 rounded underline text-text" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 rounded text-text">Company</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 rounded text-text">Features</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 rounded text-text">Contact</a>
                        </li>
                    </ul>
                </div>
                <button onClick={toggleDarkMode} className="size-fit text-text font-bold p-2 rounded-full border border-text
                col-span-1 order-3 justify-self-end m-3">
                    {darkMode ?
                        <svg id="theme-toggle-dark-icon" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path>
                        </svg>
                        :
                        <svg id="theme-toggle-light-icon" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
                        </svg>
                    }
                </button>
                <div className={`flex-wrap items-center gap-3 pb-2 pt-2
                xl:col-span-2 xl:justify-self-end
                lg:col-span-3
                sm:col-span-4
                xs:col-span-5 xs:flex xs:order-4 xs:self-center
                ${isMenuOpen ? "" : "hidden"} col-span-5 self-start justify-self-end order-5 ml-3 mr-3`}>
                    <button className="bg-info text-text text-md font-bold py-3 px-8 rounded w-32">
                        Doc
                    </button>
                    <button className="bg-primary text-text font-bold py-3 px-8 rounded text-nowrap w-32">
                        Get Started
                    </button>
                </div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}  className="size-fit inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
                lg:hidden 
                md:col-span-1
                sm:inline-flex sm:col-span-1 sm:justify-self-end
                xs:col-span-1 xs:order-5
                col-span-2 order-3 justify-self-end mr-3">
                    <span className="sr-only">Open main menu</span>
                    {!isMenuOpen ? 
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        :
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    }
                </button>
            </nav>
        </>
    );
}

export default Header;