import { Navbar } from "../_ui/Navbar";


export function Header() {
    return (
        <div>
            <div className={`
        flex justify-between items-center max-w-7xl m-auto px-2`}>
                <h2>@Maciel Sevilha</h2>
                <Navbar />
            </div>
        </div>
    )
}