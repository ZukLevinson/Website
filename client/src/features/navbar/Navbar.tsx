import styles from "./Navbar.module.scss";

import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg"

interface Props {
    setDarkMode: any
}

export function Navbar({ setDarkMode }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span onClick={setDarkMode}>Hi</span>
            </div>
            <div className={styles.icons}>
                <MenuIcon />
            </div>
        </div>
    )
}