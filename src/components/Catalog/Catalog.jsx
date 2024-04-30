import './Catalog.css'
import { useState } from 'react';
import { Card } from './Card/Card.jsx'
import { useEffect } from "react";

export function Catalog() {
    const [posts, setPosts] = useState(null)
    const data = posts ? [...posts] : []
    useEffect(() => {
        async function getPosts() {
            const response = await fetch('https://dummyjson.com/products');
            const responceobject = await response.json();
            const posts = responceobject.products;
            setPosts(posts);
        }
        getPosts();
    }, []);
    return (
        <>
            <div className="catalog">
                <div className="catalog_wrapper">
                    {
                        posts
                            ? data.map(post => (
                                <Card key={post.id} id={post.id} thumbnail={post.images[0]} title={post.title} description={post.description} price={post.price} discountPercentage={post.discountPercentage} brand={post.brand} rating={post.rating} category={post.category} />
                            )) : <p>Загрузка данных...</p>
                    }
                </div>
            </div>
        </>)
}

