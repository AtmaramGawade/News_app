import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setArticles(data.articles || []); 
                setLoading(false); 
            })
            .catch((error) => {
                console.error("Error fetching news:", error);
                setLoading(false); 
            });
    }, [category]);

    return (
        <div>
            <h2 className="text-center">
                Latest <span className="badge bg-danger">News</span>
            </h2>
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                articles.map((news, index) => (
                    <NewsItem
                        key={index}
                        title={news.title}
                        description={news.description}
                        src={news.urlToImage}
                        url={news.url}
                    />
                ))
            )}
        </div>
    );
};

export default NewsBoard;