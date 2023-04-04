"use client";

import '../../sass/app.scss';
export function Button(props) {
    return (
        <div className="portfolio-btn__button">
            <a href='' >
                <i></i><span>{props.name}</span>
            </a>
        </div>
    )
}
