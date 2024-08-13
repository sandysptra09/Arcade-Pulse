import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SwiperGame() {
    const [swiperData, setSwiperData] = useState([]);

    useEffect(() => {
        const fetchSwiperGame = async () => {
            try {
                const response = await axios.get(
                    'https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games',
                    {
                        headers: {
                            'X-RapidAPI-Key': '37302f7d05msh8e0e73860bab47fp19e4a3jsn72f553853cad',
                            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                        },
                    }
                );

                const sortedData = response.data.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));

                const slicedData = sortedData.slice(0, 8);

                setSwiperData(slicedData);
            } catch (error) {
                console.log('Error fetching swiper game data:', error);
            }
        };

        fetchSwiperGame();
    }, []);

    return (
        <div>
            <hr className='mt-8 mb-12 w-full border-white' />

            <div className="mx-auto max-w-6xl justify-center px-0 md:flex md:space-x-0 xl:px-0 mt-8">

                <div className="rounded-lg md:w-2/3">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {swiperData.map((game) => (
                            <SwiperSlide key={game.id}>
                                <div>
                                    <h1 className='text-2xl text-white font-medium mb-4'>{game.title}</h1>
                                    <p className='text-white mb-4'>{game.short_description}</p>
                                    <img
                                        alt={`Thumbnail of ${game.title}`}
                                        src={game.thumbnail}
                                        className="h-45 w-full rounded-t-xl rounded-b-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="mt-6 h-full p-2 md:mt-0 md:w-1/3">
                    <h1 className='ml-4 mb-4 text-1xl text-[#FF9119]'>Recently Added: Thrilling adventure awaits !</h1>
                    {swiperData.map((game) => (
                        <div className='flex items-center mb-4 ml-4' key={game.id}>
                            <img
                                src={game.thumbnail}
                                alt={`Thumbnail of ${game.title}`}
                                className="h-15 w-20 rounded-xl object-cover mr-4"
                            />
                            <div>
                                <Link to={`/game/${game.id}`}>
                                    <h1 className="text-white text-1xl font-medium mb-2">{game.title}</h1>
                                </Link>
                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}
