"use client";

import Link from 'next/link';

import '../../sass/app.scss';
export function Button(props) {
    return (
    <div className="portfolio-btn__button bg-dark">
            <a  href='' >
                <i></i><span>{props.name}</span>
            </a>
      

            </div>
    )
}

export function Links(props) {
    return (
        <Link className='portfolio-btn-links text-danger' href="">{props.name}</Link>
    )
}


