"use client";

import '../../sass/app.scss';
export function Button(props) {
    return (
        <div className="portfolio-btn__button">
            <a href='' className={props.btn}>
                <i></i><span>{props.name}</span>
            </a>
        </div>
    )
}
