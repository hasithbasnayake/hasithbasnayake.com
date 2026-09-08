import styles from "./Home.module.css";
import List from "../components/list.tsx";
import { slot } from "../stagger.ts";
import {PostList} from "../content";

export default function Home () {
    return (
        <div className={styles.home}>
            <header data-stagger style={slot(1)} className={styles.intro}>
                <div className={styles.headerLeft}>
                    <h1>Building for human and machine intelligence.</h1>
                    <p>Hey, my name’s Hasith. This is my personal website where I post about the work I’ve been up to, what’s currently piquing my interest,
                        and where I’ve been.</p>
                </div>
                <div className={styles.headerRight}>
                    <p>I graduated from the University of California, Santa Barbara where I pursued my own individual major, a B.S. in Computational Neuroscience.
                        I completed a senior thesis in Efficient Image Encoding for Spiking Neural Networks. I currently work as a Product Designer within the Maritime Autonomy division at Anduril Industries. </p>
                </div>
            </header>
            <section>
                <List postPreviewList={PostList}/>
            </section>
        </div>
    );
}