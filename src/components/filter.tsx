import styles from "./Filter.module.css";
import InternetIcon from "../assets/InternetIcon.svg";

interface FilterProps {
    filter: string;
    setFilter: (category: string) => void;
}

export default function Filter ({filter, setFilter}: FilterProps) {

    return (
        <div className={styles.filterSection}>
            <div className={styles.buttonGroup}>
                <button className={`${styles.filterButton} ${filter === "All" ? styles.selected : ""}`} onClick={() => setFilter("All")}>All</button>
                <button className={`${styles.filterButton} ${filter === "Blog" ? styles.selected : ""}`} onClick={() => setFilter("Blog")}>Blog</button>
                <button className={`${styles.filterButton} ${filter === "Projects" ? styles.selected : ""}`} onClick={() => setFilter("Projects")}>Projects</button>
            </div>
            <div className={styles.hyperlinkWrapper}>
                <a href="https://github.com/hasithbasnayake" target="_blank" rel="noopener noreferrer" aria-label="Github">
                    <img src={InternetIcon} alt="" width={16} height={16} />
                </a>
                <a href="https://github.com/hasithbasnayake" target="_blank" rel="noopener noreferrer" aria-label="Github">
                    <img src={InternetIcon} alt="" width={16} height={16} />
                </a>
            </div>
        </div>
    );
}

