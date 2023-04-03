"use client"

import { useState } from "react";
import { Links } from "./Buttons";
export function Navbar() {
    const [id, setId] = useState()

    const toggle = (e) => {
        const brand = 'portfolio-navbar-toggler';
        e.target.classList.toggle(`${brand}--ropdown`);
        setId(e)
    }
    return (
        <nav className="portfolio-navbar">
            <div className="portfolio-navbar__icon" onClick={toggle}>
                <button></button>
            </div>
            <ul className="flex my-[10px]" id={id?.target.className.replace('ropdown', 'active')}>
                <li className="portfolio-navbar-item--none">
                    <Links name="Contato" />
                </li>
                <li>
                    <Links name="Projetos" />
                </li>
            </ul>
        </nav>
    )
}