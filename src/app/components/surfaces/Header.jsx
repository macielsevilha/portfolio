import { Navbar } from "../_ui/Navbar";
import "../../sass/app.scss";

export function Header() {
    return (
        <div className="portfolio-container">
            <div className="portfolio-middle">
                <a className="portfolio-logo" href="">
                    <span>@</span>devmacielsevilha_
                </a>
                <Navbar />
            </div>
        </div>
    )
}