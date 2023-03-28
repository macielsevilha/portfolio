
import { Links } from "./Buttons";
export function Navbar() {
    return (
        <nav className="navbar">
            <ul className="flex my-2">
                <li>
                    <Links name="Contato" />
                </li>
                <li className="bg-white rounded-full border border-slate-400">
                    <Links name="Projetos" />
                </li>
            </ul>
        </nav>
    )
}