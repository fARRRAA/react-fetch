import './Catalog.css'
import { useState } from 'react';
import { Card } from './Card/Card.jsx'
import { useEffect } from "react";

export function Catalog() {
    const [inputValue, setInputValue] = useState('');
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
    const textChange = (e) => {
        setInputValue(e.target.value);
        console.log(inputValue);
    };

    return (
        <>
            <div className="catalog">
                <div className="catalog_search">
                    <form onSubmit={e => e.preventDefault()}>
                        <input type="text" value={inputValue} placeholder='Поиск' onChange={textChange} />
                        {/* <input type="submit" value="Поиск" onClick={()=>{}}/> */}
                    </form>
                </div>
                <div className="catalog_wrapper">
                    {
                        posts ?
                            posts
                                .filter(post => post.title.toLowerCase().includes(inputValue.toLocaleLowerCase()))
                                .map(post => (
                                    <Card key={post.id} id={post.id} thumbnail={post.images[0]} title={post.title}
                                        description={post.description} price={post.price} discountPercentage={post.discountPercentage} brand={post.brand}
                                        rating={post.rating} category={post.category} />
                                ))
                            : <p>..загрузка данных...</p>
                    }
                </div>
            </div>
        </>)
}

