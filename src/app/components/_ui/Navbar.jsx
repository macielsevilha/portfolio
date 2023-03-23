

import Link from "next/link";
import { ButtonCircle } from "./Button";


export function Navbar() {
    return (
        <nav className="navbar">
            <ul className="flex my-2">
                <li>
                    <Link href={'contato'}>Contato</Link>
                </li>
                <li>
                    <ButtonCircle name="Projetos" />
                </li>
            </ul>
        </nav>
    )
}