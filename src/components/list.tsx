import { useState } from "react";
import Card from "./card.tsx";
import Filter from "./filter.tsx";
import type {Post} from "../content/types.ts";
import styles from "./List.module.css"

// The way list works is that it ingests an array of objects that each contain metadata of one article
// Based on the parameters set in Filter, the list returns the revised list of objects
// A user should be able to click the Filter and then pass the state up the tree into the List component
// Which will re-render the Cards

// Each object contains a title, description, date, and type.


interface ListProps {
    postList: Post[]
}

export default function List ({postList}: ListProps) {
    const [filter, setFilter] = useState("All");

    const filteredPostList = filter === "All" ? postList : postList.filter(post => post.metadata.category === filter);

    const renderedPostList = filteredPostList.map(post =>
        <Card metadata={post.metadata} slug={post.slug}/>
    );

    return (
        <div className={styles.listSection}>
            <Filter filter={filter} setFilter={setFilter}/>
            <div className={styles.caseStudyList}>
                {renderedPostList}
            </div>
        </div>
    );
}