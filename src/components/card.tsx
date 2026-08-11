import styles from "./Card.module.css";
import type {Metadata} from "../content/types.ts";
import {Link} from "react-router-dom";

interface CardProps {
    metadata: Metadata;
    slug: string;
}

export default function Card ({metadata, slug}: CardProps) {
    return (
        <Link to={`/${slug}`}>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <div className={styles.cardContentHeader}>
                        <p className={styles.headerText}>{metadata.title}</p>
                        <p>{metadata.description}</p>
                    </div>
                    <p>{metadata.date}</p>
                </div>
                <div className={styles.divider}></div>
            </div>
        </Link>
    );
}