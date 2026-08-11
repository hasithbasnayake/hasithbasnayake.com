import type {Metadata} from "./types.ts";

export const metadata: Metadata = {
    title: "This is a test post",
    description: "This is a test description",
    date: "09.09.09",
    category: "blog",
}

export default function TestPost () {
    return(
        <>
            <p>I’ve been reading Designing Data-Intensive Applications by Martin Kleppmann & Chris Riccomini and have been inspired to write and build a relational database.
                A common relational database like the ones queried using SQL is implemented with a B-tree data structure. </p>
        </>

    );
}