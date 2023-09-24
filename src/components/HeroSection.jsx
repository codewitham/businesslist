import React from 'react';
import { FaSearch } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className="hero relative min-h-screen flex flex-col items-center justify-center">
            <div className='container z-10 px-5 mx-auto text-center py-16 flex flex-col gap-10'>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                    Take Your <span className="text-red-500">Business</span> Next Level
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200">
                    Explore the world with stunning views and unforgettable experiences.
                </p>
                <form className="mx-auto flex flex-col md:flex-row gap-5 justify-center  items-start md:items-center p-5 bg-white text-gray-700 rounded-lg w-fit border">
                    <div className=' text-left md:border-r w-full'>
                        <label htmlFor="area" className='p-2'>
                            Area
                        </label>
                        <input
                            type="text"
                            id="area"
                            name="area"
                            placeholder="search for area"
                            className="w-full p-3  outline-none"

                        />
                    </div>
                    <div className=' text-left md:border-r w-full'>
                        <label htmlFor="city" className='p-2'>
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="city"
                            className="w-full p-3  outline-none"

                        />
                    </div>
                    <div className=' text-left md:border-r w-full'>
                        <label htmlFor="term" className='p-2'>
                            Search For
                        </label>
                        <input
                            type="text"
                            id="term"
                            name="term"
                            placeholder="search for"
                            className="w-full p-3  outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className=" rounded-full p-3 bg-red-500 text-white"
                    >
                        <FaSearch />
                    </button>
                </form>
            </div>
            <div className=' absolute inset-0 bg-black bg-opacity-80 z-0'></div>
        </section >
    );
};

const Features = () => {
    return <div></div>
}

export default HeroSection;
