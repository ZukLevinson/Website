import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import Languages from "./Languages";

export default function Projects() {
    const { repos_url } = useSelector((state: any) => state.github);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(repos_url).then((res) => res.json()).then((data) => setProjects(data));
    }, [repos_url]);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>Projects</span>
            </div>
            <div className={styles.content}>
                <div className={styles.projects} id="container">
                    {
                        projects.sort((dateA:any, dateB:any) => new Date(dateA.created_at) < new Date(dateB.created_at) ? 1 : -1).map(({ name, description, languages_url, html_url, created_at }, i:number) => (
                            <div id={`project_${i}`} className={styles.project} key={i} onClick={() => window.open(html_url)}>
                                <div className={styles.info}>
                                    <div className={styles.title}>
                                        <span>{name}</span>
                                    </div>
                                    <div className={styles.description}>
                                        <p>{description}</p>
                                    </div>
                                </div>

                                <div className={styles.additional}>
                                    <div className={styles.languages}>
                                        <Languages languages_url={languages_url} />
                                    </div>

                                    <div className={styles.date}>
                                        Created at { new Date(created_at).toLocaleDateString("he-il") }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}