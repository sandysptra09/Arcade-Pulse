import Navbar from '../../../components/Navbar/Navbar'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../../components/Footer/Footer';

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();

    const diffInMilliseconds = now - date;
    const diffInMinutes = Math.round(diffInMilliseconds / (1000 * 60));
    const diffInHours = Math.round(diffInMinutes / 60);

    if (diffInMinutes < 60) {
        return `${diffInMinutes}M AGO`;
    } else {
        return `${diffInHours}H AGO`;
    }
}

export default function News() {
    const [newsUpdate, setNewsUpdate] = useState(null);

    useEffect(() => {
        const fetchNewsUpdate = async () => {
            try {
                const response = await axios.get('https://epic-games-store.p.rapidapi.com/getNews/locale/en/limit/30',
                    {
                        headers: {
                            'X-RapidAPI-Key': '05d823fa6dmsh20c9821018df8a6p11562djsncdbc80f630c9',
                            'X-RapidAPI-Host': 'epic-games-store.p.rapidapi.com'
                        }
                    }
                );

                const sortedNews = response.data.sort(
                    (a, b) => new Date(b.date || b.lastModified) - new Date(a.date || a.lastModified)
                );

                setNewsUpdate(sortedNews.slice(0, 20));

            } catch (error) {
                console.log('Error fetching News:', error);
            }
        }

        fetchNewsUpdate()
    }, [])

    return (
        <>
            <Navbar />

            <div className="py-8 px-16 mx-auto max-w-screen-xl lg:py-16">
                <h1 className="text-3xl text-gray-300 font-medium mb-4">
                    News Update!
                </h1>

                <div>
                    <div>
                        <hr className="border-t border-gray-400 my-4 mx-4 lg:col-span-3" />
                        {newsUpdate &&
                            newsUpdate.map((news) => (
                                <div key={news.slug} className='mb-8'>
                                    <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4 '>
                                        <div className="h-32 rounded-lg p-4 mb-4">
                                            <img alt="Thumbnail of News"
                                                src={news._images_}
                                                className="h-46 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]" />
                                        </div>

                                        <div className=" rounded-lg p-4 lg:col-span-2 mb-16">
                                            <span className="uppercase text-xs font-medium text-gray-400">
                                                {formatDate(news.date || news.lastModified)}
                                            </span>
                                            <h3 className="mt-2 font-medium">
                                                {news._title}
                                            </h3>
                                            <p className="text-gray-400 text-sm font-medium mt-4 mb-4">
                                                {news.short}
                                            </p>
                                            <a href="" className=" text-gray-300 font-medium underline underline-offset-4 mb-4">Read More</a>
                                        </div>

                                        <hr className="border-t border-gray-400 my-4 mx-4 lg:col-span-3" />

                                    </div>

                                </div>))}
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}