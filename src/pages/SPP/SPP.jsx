import './SPP.css'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from "react";

import {Link} from 'react-router-dom'
// import { GetData } from '../../components/Catalog/Catalog';
export function SPP() {
    const {id}  = useParams();

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
    // let data = GetData();
    const card = data.find(card => card.id == id);  

    console.log(card);
    console.log(card.title);
    return (
        <>  
            <Link to="/" className="return_to-catalog">← &nbsp; Вернуться в каталог</Link>
            <div className="elem_page">
                <div className="elem_photos">
                    <div className="photos_thumbnails">
                    {/* <p>{card.images}</p>
                        {
                            card.images.map(image => (
                                <img src={image} alt="" className="thumbnail" />
                            ))
                        } */}

                    </div>
                    <div className="main_photo"></div>
                </div>
                <div className="elem_info">

                </div>
            </div>
        </>
    )
}