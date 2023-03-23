"use client";

import Link from 'next/link';

import '../../sass/app.scss';
export function Button(props) {
  
    return (
     <button className="portfolio-button">
        <span>{props.name}</span>
     </button>
    )
}

export function Links(props) {
    return(
     <Link className='portfolio-links' href="">{props.name}</Link>
    )
}


