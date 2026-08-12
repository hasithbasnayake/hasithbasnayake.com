import { useParams } from "react-router-dom";
import { PostList } from "../content/index.tsx";
import styles from "./Post.module.css";
import TableOfContents from "../components/tableofcontents.tsx";

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
            <div className={styles.post}>
                <div className={styles.toc}>
                    <TableOfContents tableofcontents={post.metadata.toc}/>
                </div>
                <section className={styles.postPage}>
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
            </div>
        );
    }
}