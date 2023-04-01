"use client"

import { useState } from "react";
import { Links } from "./Buttons";
export function Navbar() {
    const [menu, setMenu] = useState()

    menu.sytle.display = 'none'
    const toggle = (e) => {
        const brand = 'portfolio-navbar';
        const active = e.target.classList.toggle(`${brand}__active`);
        let result = active == true ? 'none' : 'block'
        menu.style.display = `none !important`
     
    }

    return (
        <nav className="portfolio-navbar">
            <div className="portfolio-navbar__icon" onClick={toggle}>
                <span></span>
                </div>
                <ul className="flex my-2" id="portfolio-navbar__ropdown" ref={setMenu}>
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