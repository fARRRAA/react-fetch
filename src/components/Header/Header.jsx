import './Header.css'
import { Link } from 'react-router-dom'
import { useContext,useState } from 'react';
export function Header() {
    return (
        <>
            <header className="header">
                <Link to="/" className="header_logo">TrendSetters</Link>
                <nav className="nav">
                    <Link to="/" className="nav_elem">Главная</Link>
                    <Link to="/catalog" className="nav_elem">Каталог</Link>
                    <Link to="/about" className="nav_elem">О нас</Link>
                </nav>
                <div className="icons">
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className='cart'>
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        {/* <div className="count_items active">{itemsContext}</div> */}
                    </div>

                    <Link to="/catalog/search">
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.25 0C8.97391 0 10.6272 0.684819 11.8462 1.90381C13.0652 3.12279 13.75 4.77609 13.75 6.5C13.75 8.11 13.16 9.59 12.19 10.73L12.46 11H13.25L18.25 16L16.75 17.5L11.75 12.5V11.71L11.48 11.44C10.34 12.41 8.86 13 7.25 13C5.52609 13 3.87279 12.3152 2.65381 11.0962C1.43482 9.87721 0.75 8.22391 0.75 6.5C0.75 4.77609 1.43482 3.12279 2.65381 1.90381C3.87279 0.684819 5.52609 0 7.25 0ZM7.25 2C4.75 2 2.75 4 2.75 6.5C2.75 9 4.75 11 7.25 11C9.75 11 11.75 9 11.75 6.5C11.75 4 9.75 2 7.25 2Z" fill="black" />
                        </svg>
                    </Link>

                </div>
            </header>
        </>
    );
}