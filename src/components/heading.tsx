import styles from "./Heading.module.css";

interface HeadingProps {
    id: string;
    number: number;
    label: string;
    active: string | undefined;
}

export default function Heading({ id, number, label, active}: HeadingProps) {
    return (
        <li className={`${styles.item} ${active === id ? styles.active : ''}`}>
            <a
                className={styles.link}
                href={`#${id}`}
                onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${id}`)?.scrollIntoView({
                        behavior: 'smooth'
                    });
                }}
            >
                <span className={styles.number}>{String(number).padStart(2, '0')}</span>
                {label}
            </a>
        </li>
    )
}