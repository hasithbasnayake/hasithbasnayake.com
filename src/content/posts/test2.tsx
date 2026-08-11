import type {Metadata} from "../types.ts";

export const metadata: Metadata = {
    title: "This is a test post2",
    description: "This is a test description2",
    author: "Hasith Basnayake",
    date: "09.09.09",
    category: "Project",
}

export default function TestPost2 () {
    return(
        <>
            <p>I’ve been reading Designing Data-Intensive Applications by Martin Kleppmann & Chris Riccomini and have been inspired to write and build a relational database.
                A common relational database like the ones queried using SQL is implemented with a B-tree data structure. </p>
        </>

    );
}