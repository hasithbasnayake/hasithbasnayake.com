import styles from "./Home.module.css";
import List from "../components/list.tsx";

const post_metadata = [{
    title: "Creating photoshop with WebAssembly",
    description: "WebAssembly and C++",
    date: "09.08.26",
    category: "Blog",
    url: "https://www.creativecommons.com/",
}, {
    title: "Creating a B-tree",
    description: "B-trees",
    date: "09.10.26",
    category: "Projects",
    url: "https://www.creativecommons.com/",
}, {
    title: "Creating A*",
    description: "A* for pathfinding",
    date: "09.12.26",
    category: "Album",
    url: "https://www.creativecommons.com/",
}];


export default function Home () {
    return (
        <>
            <header className={styles.intro}>
                <div className={styles.headerLeft}>
                    <h1>Building for human and machine intelligence.</h1>
                    <p>Hey, my name’s Hasith. This is my personal website where I post about the work I’ve been up to, what’s currently piquing my interest,
                        and where I’ve been.</p>
                </div>
                <div className={styles.headerRight}>
                    <p>I recently graduated from the University of California, Santa Barbara where I pursued my own individual major, a B.S. in Computational Neuroscience.
                        I completed a senior thesis in Efficient Image Encoding for Spiking Neural Networks. I currently work as a Product Designer within the Maritime Autonomy division at Anduril Industries. </p>
                </div>
            </header>
            <section>
                <List case_studies={post_metadata}/>
            </section>
        </>
    );
}