interface HeadingProps {
    id: string;
    label: string;
    active: undefined;
}

export default function Heading({ id, label, active}: HeadingProps) {
    return (
        <li className={active}>
            <a
                href={`#${id}`}
                onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${id}`).scrollIntoView({
                        behavior: 'smooth'
                    });
                }}
            >
                {label}
            </a>
        </li>
    )
}