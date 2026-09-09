// Step 1: We need a simple toc component that will take in an array of headers and map them to heading components, which will simply be a thin wrapper for styling and active state
// Step 2: We'll need to write a simple function that scans the rendered DOM for h2's and turns them into an array (will use useState and useEFfect
// Step 3: We'll need to thread that through the toc component and then into the header component
import Heading from "../components/heading";
import styles from "./TableOfContents.module.css";
import type { CSSProperties } from "react";

interface TableOfContentsProps {
    headerList: HTMLHeadingElement[];
    activeId: string | undefined;
    style?: CSSProperties;
}
export default function TableofContents({ headerList, activeId, style }: TableOfContentsProps) {
    return (
        <ol className={styles.toc} data-stagger style={style}>
            {headerList.map((header, num) => <Heading key={header.id} id={header.id} number={num + 1} label={header.textContent} active={activeId}/>)}
        </ol>
    )
}