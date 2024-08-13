import Navbar from '../../../components/Navbar/Navbar'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';


export default function Fantasy() {
    const [fantasy, setFantasy] = useState(null);
    const [randomFantasyData, setRandomFantasyData] = useState(null);

    useEffect(() => {
        const fetchBrowseFantasy = async () => {
            try {
                const response = await axios.get('https://cors-anywhere.herokuapp.com/https://free-to-play-games-database.p.rapidapi.com/api/games', {
                    headers: {
                        'X-RapidAPI-Key': '546a4cdf77msh761d0658de48e56p1468fajsnf89ebc6d2b71',
                        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                    },
                    params: {
                        category: 'fantasy'
                    }
                });

                setFantasy(response.data.slice(0, 70));

                const randomDataFantasy = getRandomDataFantasy(response.data, 3);
                setRandomFantasyData(randomDataFantasy)


            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        fetchBrowseFantasy()

        const getRandomDataFantasy = (data, count) => {
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
                        Top Free MMORPG Games for Browser In 2024!
                    </h1>
                    <p className="text-gray-400 text-sm mb-6">
                        Imaginative world with magical elements and creatures
                    </p>
                    <div className='mb-12'>
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                            {randomFantasyData &&
                                randomFantasyData.map((randomData) => (
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
                    <div className="flex flex-wrap justify-between text-sm mb-4">
                        <div className="flex">
                            <p className="text-gray-400 mb-4">
                                Platform :
                            </p>
                            <p className="mb-4 ml-2">
                                All Platform
                            </p>
                        </div>
                        <div className="flex">
                            <p className="text-gray-400 mb-4">
                                Genre/Tag :
                            </p>
                            <p className="mb-4 ml-2">
                                Fantasy
                            </p>
                        </div>
                        <div className="flex">
                            <p className="text-gray-400 mb-4">
                                Sort by :
                            </p>
                            <p className="mb-4 ml-2">
                                Relevance
                            </p>
                        </div>
                        <div className="flex">
                            <a href="#" className='text-gray-400 mb-4"'>Advanced Filters :</a>
                            <p className="mb-4 ml-2">
                                None
                            </p>
                        </div>
                    </div>
                </div>

                <div className='mt-12'>
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        {fantasy &&
                            fantasy.map((game) => (
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