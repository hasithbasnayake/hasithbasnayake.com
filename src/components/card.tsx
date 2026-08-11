import styles from "./Card.module.css";

interface CaseStudy {
    title: string;
    description: string;
    date: string;
    category: string;
    url: string;

}

interface CardProps {
    study: CaseStudy;
}

export default function Card ({study}: CardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.cardContentHeader}>
                    <p className={styles.headerText}>{study.title}</p>
                    <p>{study.description}</p>
                </div>
                <p>{study.date}</p>
            </div>
            <div className={styles.divider}></div>
        </div>
    );
}