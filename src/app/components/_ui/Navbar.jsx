"use client"

import Link from "next/link";
import { useState } from "react";
import {BsChatDotsFill, BsFillPersonLinesFill} from "react-icons/bs"
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
            <ul className={`portfolio-navbar__items ${id?.target.className.replace('ropdown', 'active')}`} >
                <li>
                    <i><BsChatDotsFill /></i>
                    <Link href={''}>Contato</Link>
                </li>
                <li className="portfolio-navbar--item">
                    <i><BsFillPersonLinesFill /></i>
                    <Link href={''}>Projeto</Link>
                </li>
            </ul>
        </nav>
    )
}