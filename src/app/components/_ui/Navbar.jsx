import Link from "next/link";


export function Navbar() {
    return (
        <nav className="navbar">
            <ul className="flex my-2">
                <li className="px-4 py-2">
                    <Link href={'contato'}>Contato</Link>
                </li>
                <li className="px-4 py-2 rounded-xl border border-cyan-600">
                    <Link href={'projetos'}>Projetos</Link>
                </li>
            </ul>
        </nav>
    )
}