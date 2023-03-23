
import { Links } from "./Buttons";
export function Navbar() {
    return (
        <nav className="navbar">
            <ul className="flex my-2">
                <li>
                    contato
                </li>
                <li>
                    <Links name="Projetos" />
                </li>
            </ul>
        </nav>
    )
}