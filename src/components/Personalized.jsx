import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Personalized() {
    const [personalized, setPersonalized] = useState(null);

    useEffect(() => {
        const fetchPersonalized = async () => {
            try {
                const response = await axios.get('https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games', {
                    headers: {
                        'X-RapidAPI-Key': '37302f7d05msh8e0e73860bab47fp19e4a3jsn72f553853cad',
                        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                    },
                });

                const randomThumbnails = getRandomThumbnails(response.data, 3);

                setPersonalized(randomThumbnails);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchPersonalized();
    }, []);

    const getRandomThumbnails = (data, count) => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    return (
        <div>
            <h1 className="text-3xl text-gray-300 font-medium mb-4">
                Personalized Recommendations
            </h1>
            <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#161616" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                <p className="text-[#FF9119] mb-4">
                    Log In to view your personalized recommendations! Discover games you'll love.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-2">
                {personalized &&
                    personalized.map((game) => (
                        <div key={game.id}>
                            <Link to={`/game/${game.id}`}>
                                <img
                                    alt="Thumbnail of Game"
                                    src={game.thumbnail}
                                    className="h-45 w-full rounded-t-xl rounded-b-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                                />
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
}
