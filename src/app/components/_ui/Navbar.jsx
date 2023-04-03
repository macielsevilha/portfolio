"use client"

import { useState } from "react";
import { Links } from "./Buttons";
export function Navbar() {
    const [id, setId] = useState()
    
    const toggle = (e) => {
        const brand = 'portfolio-navbar';
        e.target.classList.toggle(`${brand}__active`);
        setId(e)
    }

     

    return (
        <nav className="portfolio-navbar">
            <div className="portfolio-navbar__icon" onClick={toggle}>
                <span></span>
            </div>
            <ul className="flex my-2" id={id?.target.className.replace('__active', '__ropdown')}>
                <li className="portfolio-border__none">
                    <Links name="Contato" />
                </li>
                <li>
                    <Links name="Projetos" />
                </li>
            </ul>
        </nav>
    )
}