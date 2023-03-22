"use client";

import '../../sass/app.scss';

export function Button(props) {
  
    return (
     <button className="btn">
        <span>{props.name}</span>
     </button>
    )
}