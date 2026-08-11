import { useParams } from "react-router-dom";
import { PostList } from "../content/index.tsx";
import styles from "./Post.module.css";

export default function Post () {
    const { slug } = useParams();
    const post = PostList.find(p => p.slug === slug);

    if (!post) {
        console.error("No such post");
        return (
            <p>No such post</p>
        )
    }
    else {
        const Content = post.content;
        return (
            <section className={styles.postPage}>
                {/*<div className={styles.toc}>*/}
                {/*    */}
                {/*</div>*/}
                <div className={styles.postContent}>
                    <div className={styles.title}>
                        <p className={styles.headerText}>
                            {post.metadata.title}
                        </p>
                        <div className={styles.titleMetadata}>
                            <p className={styles.contentMetadata}>
                                {post.metadata.author}
                            </p>
                            <p className={styles.contentMetadata}>
                                {post.metadata.date}
                            </p>
                        </div>
                        <div className={styles.divider}></div>
                    </div>
                    <Content/>
                </div>
            </section>
        );
    }
}