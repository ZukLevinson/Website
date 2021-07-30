import { useDispatch, useSelector } from "react-redux";

import styles from "./Navbar.module.scss";

import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedin.svg";

import { setMode } from "./modeSlice";

export function Navbar() {
    const { isDark } = useSelector((state: any) => state.mode);
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.icons} onClick={() => dispatch(setMode(!isDark))}>
                <div>
                    {isDark ? <SunIcon /> : <MoonIcon/>}
                </div>
            </div>

            <div className={styles.social}>
                <a href="https://www.twitter.com/ZukLevinson">
                    <TwitterIcon/>
                </a>
                <a href="https://www.facebook.com/zuklevinson/">
                    <FacebookIcon/>
                </a>
                <a href="https://www.linkedin.com/in/zuk-levinson-abb753150">
                    <LinkedInIcon/>
                </a>
            </div>
        </div>
    )
}