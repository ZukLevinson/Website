import { useEffect, useState } from "react";
import styles from "./index.module.scss";

export default function Languages({languages_url}: {languages_url: string}) {
    const [languages, setLanguages] = useState([] as string[]);


    useEffect(() => {
        fetch(languages_url).then((res) => res.json()).then((data) => setLanguages(Object.entries(data).map((languageData) => languageData[0])));
    }, [languages_url])

    return (
        <div className={styles.container}>
            {
                languages.map((language, i) => (<span key={i}>{language}</span>))
            }
        </div>
    )
}