import { useState } from "react";
import Form from "../components/Form/Form";
import Modal from "../components/Modal/Modal";
import Palette from "../components/Palette/Palette";

function HomePage() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <section id="home" className="container p-4 mx-auto py-20 text-center">
            <h1 className="flex justify-center flex-wrap mb-4 text-5xl font-bold font-heading text-text md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-info from-primary">Random</span> 
                <span>Website</span>
            </h1> 
           

            <h2 className="text-3xl font-bold font-heading underline text-primary mb-6">
                Section
            </h2>
            <p className="text-2xl text-secondary mb-8">
                Your one-stop solution for all your web development needs.
            </p>
            <div className="flex gap-8 mb-8 justify-center">
                <p className="text-xl text-text mb-8 w-1/2 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, architecto aspernatur? Impedit, illum mollitia. Tempore praesentium impedit, facilis beatae tenetur nostrum commodi distinctio, recusandae, similique odio odit optio consequuntur eveniet?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, architecto aspernatur? Impedit, illum mollitia. Tempore praesentium impedit, facilis beatae tenetur nostrum commodi distinctio, recusandae, similique odio odit optio consequuntur eveniet?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, architecto aspernatur? Impedit, illum mollitia. Tempore praesentium impedit, facilis beatae tenetur nostrum commodi distinctio, recusandae, similique odio odit optio consequuntur eveniet?
                </p>
                <div className="flex flex-col gap-8 w-1/2">
                    <p className="text-xl text-text w-full text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, architecto aspernatur? Impedit, illum mollitia. Tempore praesentium impedit, facilis beatae tenetur nostrum commodi distinctio, recusandae, similique odio odit optio consequuntur eveniet?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, architecto aspernatur? Impedit, illum mollitia. Tempore praesentium impedit, facilis beatae tenetur nostrum commodi distinctio, recusandae, similique odio odit optio consequuntur eveniet?
                    </p>
                    <p className="text-xl text-text w-full text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, architecto aspernatur? Impedit, illum mollitia. Tempore praesentium impedit, facilis beatae tenetur nostrum commodi distinctio, recusandae, similique odio odit optio consequuntur eveniet?
                    </p>
                </div>
            </div>
            <button className="bg-primary text-text font-bold py-3 px-8 rounded">
                Get Started
            </button>

            <h2 className="text-3xl font-bold mt-8 underline font-heading text-primary">
                Palette
            </h2>

            <Palette></Palette>

            <h2 className="text-3xl font-bold mt-8 underline font-heading text-primary">
                Form
            </h2>

            <Form></Form>

            <h2 className="text-3xl font-bold mt-8 underline font-heading text-primary">
                Cards
            </h2>

            <div className="flex flex-col gap-8 items-center">
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h2v-7Zm6 0v7h2a2 2 0 0 0 2-2v-5h-5Z" />
                    </svg>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                    <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                        See our guideline
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://www.okvoyage.com/wp-content/uploads/2023/07/les-paysages-des-pays-bas.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </a>
            </div>


            <h2 className="text-3xl font-bold mt-8 underline font-heading text-primary">
                Table
            </h2>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">
                                White
                            </td>
                            <td className="px-6 py-4">
                                Laptop PC
                            </td>
                            <td className="px-6 py-4">
                                $1999
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                                Black
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                            <td className="px-6 py-4">
                                $99
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Google Pixel Phone
                            </th>
                            <td className="px-6 py-4">
                                Gray
                            </td>
                            <td className="px-6 py-4">
                                Phone
                            </td>
                            <td className="px-6 py-4">
                                $799
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple Watch 5
                            </th>
                            <td className="px-6 py-4">
                                Red
                            </td>
                            <td className="px-6 py-4">
                                Wearables
                            </td>
                            <td className="px-6 py-4">
                                $999
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={() => console.log("OK")}></Modal> */}
        </section>
    );
}

export default HomePage;