"use client"

import { Links } from "./Buttons";
export function Navbar() {
    const toggle = (e) => {
     e.target.classList.toggle('active')
    }
    
    return (
        <nav className="portfolio-navbar">
          <div className="portfolio-navbar__icon" onClick={toggle}>
            <span></span>
          </div>
            <ul className="flex my-2" id="portfolio-navbar__ropdown">
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