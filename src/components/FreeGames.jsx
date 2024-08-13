import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useNavigation from '../hooks/Navigate/useNavigation';
import { Link } from 'react-router-dom';

export default function FreeGames({ games }) {
    const { navigateToGenre, navigateToPlatform } = useNavigation();

    const [freeGames, setFreeGames] = useState(null);

    useEffect(() => {
        const fetchFreeGames = async () => {
            try {
                const response = await axios.get('https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games', {
                    headers: {
                        'X-RapidAPI-Key': '37302f7d05msh8e0e73860bab47fp19e4a3jsn72f553853cad',
                        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                    },
                });

                setFreeGames(response.data.slice(0, 20));
            } catch (error) {
                console.log('Error fetching data free games:', error);
            }
        };
        fetchFreeGames()
    }, [])

    return (
        <div>
            <h1 className="text-3xl text-gray-300 font-medium mb-4 mt-4">Free Games</h1>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
                {freeGames &&
                    freeGames.map((game) => (
                        <div key={game.id}>
                            <article className="group">
                                <img
                                    alt={`Thumbnail of ${game.title}`}
                                    src={game.thumbnail}
                                    className="h-46 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                                />

                                <div className="p-4">

                                    <Link to={`/game/${game.id}`}>
                                        <h3 className="text-lg font-medium">
                                            {game.title}
                                        </h3>
                                    </Link>

                                    <p className="mt-2 line-clamp-1 text-sm/relaxed">
                                        {game.short_description}
                                    </p>
                                    <div className="flex flex-center justify-between">
                                        {/* <a href="#" title="Add to library"
                                            className="bg-gray-700 mt-2 text-xs font-medium inline-flex items-center px-1.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                                stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                            </svg>
                                        </a> */}
                                        <div className="flex flex-row gap-2">
                                            <a href=""
                                                className="bg-[#FF9119] mt-2 text-xs font-semibold inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#FF9119] text-white mb-2"
                                                onClick={() => navigateToGenre(game.genre)}>
                                                {game.genre}
                                            </a>
                                            <a href=""
                                                className="bg-[#FF9119] mt-2 text-xs font-semibold inline-flex items-center px-2.5 py-0.5 rounded-md bg-[#FF9119] text-white mb-2"
                                                onClick={() => navigateToPlatform(game.platform)}>
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
    )
}