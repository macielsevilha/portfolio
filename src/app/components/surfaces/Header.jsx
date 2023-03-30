import { Navbar } from "../_ui/Navbar";
import "../../sass/app.scss";

export function Header() {
    return (
        <div className="portfolio-container">
            <div className="portfolio-middle">
                <h2>@Maciel Sevilha</h2>
                <Navbar />
            </div>
        </div>
    )
}