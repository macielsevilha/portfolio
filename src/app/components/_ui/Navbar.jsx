
import { Links } from "./Buttons";
export function Navbar() {
    return (
        <nav className="navbar">
            <ul className="flex my-2">
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