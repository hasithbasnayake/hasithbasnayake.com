import styles from "./Card.module.css";
import type {PageFrontmatter} from "../content/types.ts";
import {Link} from "react-router-dom";

interface CardProps {
    frontmatter: PageFrontmatter;
    slug: string;
}

export default function Card ({frontmatter, slug}: CardProps) {
    return (
        <Link to={`/${slug}`}>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <div className={styles.cardContentHeader}>
                        <p className={styles.headerText}>{frontmatter.title}</p>
                        <p>{frontmatter.description}</p>
                    </div>
                    <p>{frontmatter.date}</p>
                </div>
                <div className={styles.divider}></div>
            </div>
        </Link>
    );
}