import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

export default function PersonalizedNews() {
    const [news, setNews] = useState(null);

    useEffect(() => {
        const fetchPersonalizedNews = async () => {
            try {
                const response = await axios.get('https://epic-games-store.p.rapidapi.com/getNews/locale/en/limit/30',
                    {
                        headers: {
                            'X-RapidAPI-Key': '05d823fa6dmsh20c9821018df8a6p11562djsncdbc80f630c9',
                            'X-RapidAPI-Host': 'epic-games-store.p.rapidapi.com',
                        },
                    }
                );

                const sortedNews = response.data.sort(
                    (a, b) => new Date(b.date || b.lastModified) - new Date(a.date || a.lastModified)
                );

                const firstTwoNews = sortedNews.slice(0, 2);

                setNews(firstTwoNews);

            } catch (error) {
                console.log('Error fetching personalized news:', error);
            }
        }

        fetchPersonalizedNews()
    }, [])

    return (
        <div className='mt-6'>
            <div className='flex justify-between'>
                <h1 className="text-3xl text-gray-300 font-medium mb-4">
                    Today's Hottest News!
                </h1>
                {/* <h5 className='text-1xl text-gray-300 font-medium mt-2'>More News</h5> */}
            </div>

            <div className='grid md:grid-cols-2 gap-8 mb-8'>
                {news &&
                    news.map((personalizedNews) => (
                        <div key={personalizedNews.slug}>
                            <article className="group">
                                <img
                                    alt={personalizedNews._title}
                                    src={personalizedNews._images_}
                                    className="h-full w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                                />

                                <div className="p-4">
                                    <h5 className="uppercase text-xs font-semibold text-gray-400 mt-2 mb-2">
                                        {formatDate(personalizedNews.date || personalizedNews.lastModified)}
                                    </h5>

                                    <a href="#">
                                        <h3 className="text-lg font-medium text-white">{personalizedNews._title}</h3>
                                    </a>

                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-400" dangerouslySetInnerHTML={{ __html: personalizedNews.content }} />

                                    <h5 className='text-gray-300 font-medium underline underline-offset-4 mt-4'>Read More</h5>
                                </div>
                            </article>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
