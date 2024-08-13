import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar'
import Footer from "../../components/Footer/Footer";

const splitParagraphs = (description) => {
    if (!description) return [];

    return description.split(/\r?\n\r?\n/);
};

export default function DescriptionGame() {
    const [descriptionGame, setDescriptionGame] = useState(null);
    const params = useParams();
    const gameId = params.gameId;

    useEffect(() => {
        const fetchDescriptionGame = async () => {
            try {
                const response = await axios.get(
                    `https://cors-anywhere.herokuapp.com/https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
                    {
                        headers: {
                            "X-RapidAPI-Key":
                                "37302f7d05msh8e0e73860bab47fp19e4a3jsn72f553853cad",
                            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
                        },
                    }
                );

                setDescriptionGame(response.data);
            } catch (error) {
                console.error("Error fetching game details", error);
            }
        };

        fetchDescriptionGame();
    }, [gameId]);

    const paragraphs = splitParagraphs(descriptionGame?.description)

    return (
        <>
            <Navbar />

            <div className="py-8 px-16 mx-auto max-w-screen-xl lg:py-16">
                {descriptionGame && (
                    <div className="mx-auto max-w-6xl justify-center md:flex md:space-x-6 xl:px-0">
                        <div className="mt-6 mb-4 h-full p-2 md:mt-0 md:w-1/3 md:sticky top-0">
                            <a href="">
                                <img
                                    alt="Thumbnail of Game"
                                    src={descriptionGame.thumbnail}
                                    className="h-46 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                                />
                            </a>

                            <a href={descriptionGame.game_url}
                                target="_blank"
                                type="button"
                                className="justify-center mt-4 w-full bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2"
                            >
                                Play Now
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6 ml-1"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                                    />
                                </svg>
                            </a>

                            <p className="mt-2 text-sm/relaxed">
                                {descriptionGame.short_description}
                            </p>
                        </div>
                        <div className="rounded-lg md:w-2/3">
                            <div className="justify-between p-2">
                                <nav className="flex" aria-label="Breadcrumb">
                                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                        <li className="hidden md:inline-flex items-center">
                                            <Link
                                                to='/'
                                                className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white"
                                            >
                                                <svg
                                                    className="w-3 h-3 mr-2.5"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                                </svg>
                                                Home
                                            </Link>
                                        </li>
                                        <li className="hidden md:inline-flex items-center">
                                            <svg
                                                className="w-3 h-3 text-gray-400 mx-1"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 6 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m1 9 4-4-4-4"
                                                />
                                            </svg>
                                            <a
                                                href="/"
                                                className="ml-1 text-sm font-medium text-gray-300 hover:text-white md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                            >
                                                Games
                                            </a>
                                        </li>
                                        <li className="hidden md:inline-flex items-center" aria-current="page">
                                            <svg
                                                className="w-3 h-3 text-gray-400 mx-1"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 6 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m1 9 4-4-4-4"
                                                />
                                            </svg>
                                            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                                {descriptionGame.title}
                                            </span>
                                        </li>
                                    </ol>
                                </nav>

                            </div>

                            {/* Judul Game */}
                            <div className="justify-between mb-2 p-2 sm:flex sm:justify-start">
                                <h3 className="text-3xl  text-gray-300 font-medium">
                                    {descriptionGame.title}
                                </h3>
                            </div>
                            <div className="mb-2 p-2">
                                <h3 className="text-2xl text-gray-300 font-medium">
                                    About this game
                                </h3>
                            </div>
                            <div className="mb-2 p-2">
                                {paragraphs.map((paragraph, index) => (
                                    <p key={index} className="text-gray-400 mb-6">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <hr className="" />

                            <div className="mb-8 mt-2 p-2">
                                <p className="text-sm italic text-gray-500">
                                    Disclosure: Arcade Pulse works closely with publishers and
                                    developers to offer a free and rewarding experience. In order
                                    to keep everything free to use we may sometimes earn a small
                                    commission from some partners. Find more info in our FAQ page.
                                </p>
                            </div>

                            <div className="wrap mb-2 p-2">
                                <h3 className="text-2xl text-gray-300 font-medium mb-2">
                                    Additional Information
                                </h3>
                                <span className="text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5 inline mr-2 mb-1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                        />
                                    </svg>
                                    Please note this free-to-play game may or may not offer
                                    optional in-game purchases.
                                </span>
                            </div>

                            <div className="flex flex-wrap mb-5">
                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 px-2">
                                    <div className="">
                                        <h4 className="text-gray-400 mb-2">Title</h4>
                                        <p className="text-gray-300">{descriptionGame.title}</p>
                                    </div>
                                </div>

                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 px-2">
                                    <div className="">
                                        <h4 className="text-gray-400 mb-2">Developer</h4>
                                        <p className="text-gray-300">{descriptionGame.developer}</p>
                                    </div>
                                </div>

                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 px-2">
                                    <div className="">
                                        <h4 className="text-gray-400 mb-2">Publisher</h4>
                                        <p className="text-gray-300">{descriptionGame.publisher}</p>
                                    </div>
                                </div>

                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 px-2">
                                    <div className="">
                                        <h4 className="text-gray-400 mb-2">Release Date</h4>
                                        <p className="text-gray-300">
                                            {descriptionGame.release_date}
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 px-2">
                                    <div className="">
                                        <h4 className="text-gray-400 mb-2">Genre</h4>
                                        <p className="text-gray-300">{descriptionGame.genre}</p>
                                    </div>
                                </div>

                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 px-2">
                                    <div className="">
                                        <h4 className="text-gray-400 mb-2">Platform</h4>
                                        <p className="text-gray-300">{descriptionGame.platform}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-2 p-2">
                                <h3 className="text-2xl text-gray-300 font-medium">
                                    {descriptionGame.title} Screenshots
                                </h3>
                            </div>

                            <div className="mb-8 p-2">
                                {descriptionGame.screenshots && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                        {descriptionGame.screenshots.map((screenshots) => (
                                            <div key={screenshots.id} className="relative group">
                                                <img
                                                    src={screenshots.image}
                                                    alt={`Screenshot ${screenshots.id}`}
                                                    className="w-full h-auto rounded-md object-cover cursor-pointer transition duration-300 transform group-hover:scale-105"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="mb-2 p-2">
                                <h3 className="text-2xl text-gray-300 font-medium">
                                    Minimum System Requirements ( {descriptionGame.platform} )
                                </h3>
                            </div>

                            {descriptionGame.minimum_system_requirements ? (
                                <div className="flex flex-wrap">
                                    <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 px-2">
                                        <div className="">
                                            <h4 className="text-gray-400 mb-2">OS</h4>
                                            <p className="text-gray-300">
                                                {descriptionGame.minimum_system_requirements?.os}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 px-2">
                                        <div className="">
                                            <h4 className="text-gray-400 mb-2">Processor</h4>
                                            <p className="text-gray-300">
                                                {descriptionGame.minimum_system_requirements?.processor}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 px-2">
                                        <div className="">
                                            <h4 className="text-gray-400 mb-2">Memory</h4>
                                            <p className="text-gray-300">
                                                {descriptionGame.minimum_system_requirements?.memory}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 px-2">
                                        <div className="">
                                            <h4 className="text-gray-400 mb-2">Graphics</h4>
                                            <p className="text-gray-300">
                                                {descriptionGame.minimum_system_requirements?.graphics}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 px-2">
                                        <div className="">
                                            <h4 className="text-gray-400 mb-2">Storage</h4>
                                            <p className="text-gray-300">
                                                {descriptionGame.minimum_system_requirements?.storage}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 px-2">
                                        <div className="">
                                            <h4 className="text-gray-400 mb-2">Additional Notes</h4>
                                            <p className="text-gray-300">
                                                Specifications may change during development
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="mb-2 p-2">
                                    <p className="text-gray-400 mb-4">
                                        {descriptionGame.title} is a browser based game and should run
                                        smoothly on practically any PC with a updated web-browser.
                                    </p>
                                    <p className="text-gray-400">
                                        If you have old hardware or software, you may still be able to
                                        play {descriptionGame.title}, but your game experience may suffer. For
                                        the best gameplay experience, we recommend the latest versions
                                        of Firefox, Chrome, or Internet Explorer.
                                    </p>
                                </div>
                            )}



                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
}
