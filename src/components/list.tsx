import { useState } from "react";
import Card from "./card.tsx";
import Filter from "./filter.tsx";
import styles from "./List.module.css"

// The way list works is that it ingests an array of objects that each contain metadata of one article
// Based on the parameters set in Filter, the list returns the revised list of objects
// A user should be able to click the Filter and then pass the state up the tree into the List component
// Which will re-render the Cards

// Each object contains a title, description, date, and type.

interface CaseStudy {
    title: string;
    description: string;
    data: string;
    category: string;
    url: string;

}

interface ListProps {
  case_studies: CaseStudy[]
}


export default function List ({case_studies}: ListProps) {
    const [filter, setFilter] = useState("All");

    const filteredCases =
        filter === "All"
        ? case_studies : case_studies.filter(study => study.category === filter);

    const listedCases = filteredCases.map(study =>
        <Card study={study}/>
    );

    return (
        <div className={styles.listSection}>
            <Filter filter={filter} setFilter={setFilter}/>
            <div className={styles.caseStudyList}>
                {listedCases}
            </div>
        </div>
    );
}