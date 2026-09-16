import type {PageFrontmatter} from "../types.ts";
import styles from "./PostStyles.module.css";
import ReactPlayer from "react-player";

export const frontmatter: PageFrontmatter = {
    title: "Welcome",
    description: "Welcome to my new portfolio",
    author: "Hasith Basnayake",
    toc: [{
        id: "Introduction",
        label: "Introduction",
    }, {
        id: "Goals",
        label: "Goals",
    },
    ],
    date: "09.09.26",
    category: "Blog",
}

export default function PostContent () {
    return(
        <>
            <div className={styles.h2wrapper}>
                <p className={styles.number}>1</p>
                <h2 id="1" >Introduction</h2>
            </div>
            <p>
                One of the perks of being a designer is that refreshing one's portfolio is almost a tradition. Oftentimes a portfolio refresh comes about due to a new job, a new project, or simply a desire for some change.  <br></br><br></br>

                This time around, I opted to redesign my portfolio for those reasons, and one more. As my work begins to span both design and engineering, I wanted a new surface to capture work that was a bit more interdisciplinary.
                That read less like a case study, and more like a blog. <br></br><br></br>

                My old portfolio was hosted on Framer, and the one before that on Webflow. I think my first ever portfolio was a PDF. This is the first time I've attempted to create one fully from scratch. <br></br><br></br>

                It was a cool experience. The site is built entirely with React and Typescript. I got to learn a lot about what goes into building even a simple site.
                How to think about site architecture, defining shared types, eliminating redundancy, creating a portable design system, and more.

            </p>
            <div className={styles.playerwrapper}>
                <ReactPlayer src="https://ujoco4f6nmc9bkmu.public.blob.vercel-storage.com/IMG_8330.mp4" playing={true} muted={true} loop={true} style={{
                    width: "100%",
                    height: "100%",
                }}
                />
            </div>
            <p>

                Now that this site is up, my hope is that I'll be a bit more active on posting my projects and work here. Stay tuned! <br></br><br></br>

                - Hasith Basnayake
            </p>
        </>
    );
}