import { Navbar } from "../../_ui/Navbar";
import styles from './Header.module.scss'
export function Header() {
    return (
        <div className={styles.container}>
            <div className={`
        flex justify-between items-center max-w-7xl m-auto px-2`}>
                <h2>@Maciel Sevilha</h2>
                <Navbar />
            </div>
        </div>
    )
}