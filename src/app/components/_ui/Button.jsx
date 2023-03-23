"use client";

import '../../sass/app.scss';
export function Button(props) {
  
    return (
     <button className="btn">
        <span>{props.name}</span>
     </button>
    )
}

export function ButtonCircle(props) {
    return(
     <a className='link' href="">{props.name}</a>
    )
}