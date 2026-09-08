import { useState } from "react";
import Card from "./card.tsx";
import Filter from "./filter.tsx";
import type { PostPreview } from "../content/types.ts";
import { slot, offset } from "../stagger.ts";
import styles from "./List.module.css"

// The way list works is that it ingests an array of objects that each contain frontmatter of one article
// Based on the parameters set in Filter, the list returns the revised list of objects
// A user should be able to click the Filter and then pass the state up the tree into the List component
// Which will re-render the Cards

// Each object contains a title, description, date, and type.

interface ListProps {
    postPreviewList: PostPreview[];
    startAt?: number;
}

export default function List ({postPreviewList, startAt = 0}: ListProps) {
    const [filter, setFilter] = useState("All");

    const filteredPostPreviewList = filter === "All" ? postPreviewList : postPreviewList.filter(post => post.frontmatter.category === filter);

    const renderedPostPreviewList = filteredPostPreviewList.map(post =>
        <Card frontmatter={post.frontmatter} slug={post.slug} style={slot(i + 1)}/>
    );

    return (
        <div className={styles.listSection} style={{offset(startAt)}}>
            <Filter filter={filter} setFilter={setFilter} style={{slot(0)}}/>
            <div className={styles.caseStudyList}>
                {renderedPostPreviewList}
            </div>
        </div>
    );
}