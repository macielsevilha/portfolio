import { Navbar } from "../_ui/Navbar";
import "../../sass/app.scss";

export function Header() {
    return (
        <header className="imagem">
        <div className="img">
        <div className="portfolio-header__container">
         <div className="portfolio-header__middle">
                <a className="portfolio-header__logo --i:1" href="">
                    <span>@</span>devmacielsevilha_
                </a>
                <Navbar />
            </div>
         </div>
        </div>
        </header>
    )
}