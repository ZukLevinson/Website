import styles from "./Navbar.module.css";

interface Props {
    setDarkMode: any
}

export function Navbar({ setDarkMode }: Props) {
    return (
        <a onClick={setDarkMode}>I am navbar</a>
    )
}