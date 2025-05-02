import React, { use } from 'react';
import Marquee from 'react-fast-marquee';

const newsPromise = fetch('/news.json').then((res) => res.json());

const LatestNews = () => {
    const trendingNews = use(newsPromise)
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>latest </p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
                <div className='flex gap-10'>
                    {trendingNews
                        .filter(news => news.others?.is_trending)
                        .map(news => news.title)
                        .join(" ••• ")}
                </div>

            </Marquee>
        </div>
    );
};

export default LatestNews;