"use client";

import Link from 'next/link';

import '../../sass/app.scss';
export function Button(props) {
    return (
    <div className="portfolio-btn__button">
            <a  href='' >
                <i></i><span>{props.name}</span>
            </a>
      

            </div>
    )
}

export function Links(props) {
    return (
       <div className='portfolio-btn__link'>
         <Link  href="">{props.name}</Link>
       </div>
    )
}


