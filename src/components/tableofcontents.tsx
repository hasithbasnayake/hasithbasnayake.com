import type {ToC} from "../content/types.ts";
import {useState, useEffect} from "react";
import styles from "./TableOfContents.module.css";

interface TableOfContentsProps {
    tableofcontents: ToC[];
}

export default function TableOfContents({tableofcontents}: TableOfContentsProps) {
    const [activeID, setActiveID] = useState(tableofcontents[0]?.id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter(e => e.isIntersecting);
                if (visible.length > 0) setActiveID(visible[0].target.id);
            },
            {rootMargin: "0px 0px -70% 0px"},
        );
        tableofcontents.forEach(({id}) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();

    }, [tableofcontents]);

    return (
        <nav className={styles.toc} aria-label={"Table of Contents"}>
            <ol className={styles.list}>
                {tableofcontents.map((entry, index) => (
                    <li key={entry.id}>
                        <a href={`#${entry.id}`} className={entry.id === activeID ? styles.active : styles.link}>
                            <span className={styles.number}>
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            {entry.name}
                        </a>
                    </li>
                ))}
            </ol>
        </nav>
    );

}