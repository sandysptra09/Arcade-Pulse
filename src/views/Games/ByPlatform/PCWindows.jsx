import Navbar from '../../../components/Navbar/Navbar'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../../components/Footer/Footer';

export default function PCWindows() {
    const [pcWindows, setPCWndows] = useState(null)
    const [random, setRandom] = useState(null)

    useEffect(() => {
        const fetchByPlatformPCWindows = async () => {
            try {
                const response = await axios.get('https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games', {
                    headers: {
                        'X-RapidAPI-Key': '546a4cdf77msh761d0658de48e56p1468fajsnf89ebc6d2b71',
                        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                    },
                    params: {
                        platform: 'pc'
                    }
                });

                setPCWndows(response.data.slice(0, 50));

                const randomDataPC = getRandomDataPC(response.data, 3);
                setRandom(randomDataPC)

            } catch (error) {
                console.log('Error fetching data games by platform pc (windows):', error);
            }
        };
        fetchByPlatformPCWindows()

        const getRandomDataPC = (data, count) => {
            const shuffled = data.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        };

    }, [])

    return (
        <>
            <Navbar />

            <div className="py-8 px-16 mx-auto max-w-screen-xl lg:py-16">
                <div>
                    <h1 className="text-3xl text-gray-300 font-medium mb-4">
                        Top Most Played Games at PC ( Windows ) In 2024!
                    </h1>
                    <p className="text-gray-400 mb-6">
                        2024 brings an exciting lineup of popular games for PC (Windows) enthusiasts! From immersive worlds to
                        thrilling battles, this year promises an array of gaming experiences that cater to various tastes and
                        preferences. Whether you're into epic adventures or competitive multiplayer action, the PC gaming
                        landscape in 2023 is poised to deliver a diverse selection of titles that will keep players engaged and
                        entertained. Get ready to embark on extraordinary journeys and face new challenges in the most
                        anticipated games of the year!
                    </p>
                    <div>
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                            {random &&
                                random.map((randomData) => (
                                    <div key={randomData.id}>
                                        <img
                                            alt="Thumbnail of Game"
                                            src={randomData.thumbnail}
                                            className="h-46 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-wrap">
                            <p className="py-2.5 px-5 mr-2 mb-2 font-medium text-gray-400">Related :</p>

                            <button type="button"
                                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-400 focus:outline-none rounded-lg border border-gray-400 hover:text-white"
                                disabled>
                                MMOARPG
                            </button>

                            <button type="button"
                                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-400 focus:outline-none rounded-lg border border-gray-400 hover:text-white"
                                disabled>
                                Shooter
                            </button>

                            <button type="button"
                                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-400 focus:outline-none rounded-lg border border-gray-400 hover:text-white"
                                disabled>
                                Anime
                            </button>

                            <button type="button"
                                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-400 focus:outline-none rounded-lg border border-gray-400 hover:text-white"
                                disabled>
                                MMORPG
                            </button>

                            <button type="button"
                                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-400 focus:outline-none rounded-lg border border-gray-400 hover:text-white"
                                disabled>
                                Fighting
                            </button>

                            <button type="button"
                                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-400 focus:outline-none rounded-lg border border-gray-400 hover:text-white"
                                disabled>
                                Battle Royale
                            </button>
                        </div>
                    </div>
                </div>

                <div className='mt-12'>
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        {pcWindows &&
                            pcWindows.map((game) => (
                                <div key={game.id}>
                                    <article className="group">
                                        <img
                                            alt={`Thumbnail of ${game.title}`}
                                            src={game.thumbnail}
                                            className="h-46 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                                        />

                                        <div className="p-4">

                                            <h3 className="text-lg font-medium">
                                                {game.title}
                                            </h3>

                                            <p className="mt-2 line-clamp-1 text-sm/relaxed">
                                                {game.short_description}
                                            </p>
                                            <div className="flex flex-center justify-between">
                                                <div className="flex flex-row gap-2">
                                                    <a href="#"
                                                        className="bg-[#FF9119] mt-2 text-xs font-semibold inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#FF9119] text-white mb-2">
                                                        {game.genre}
                                                    </a>
                                                    <a href="#"
                                                        className="bg-[#FF9119] mt-2 text-xs font-semibold inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#FF9119] text-white mb-2">
                                                        {game.platform}
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}