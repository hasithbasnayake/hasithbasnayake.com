import { useParams } from "react-router-dom";
import { PostList } from "../content";
import styles from "./Post.module.css";
import {useEffect, useRef, useState} from "react";
import TableofContents from "../components/tableofcontents.tsx";



export default function PostPage () {
    const [headers, setHeaders] = useState<HTMLHeadingElement[]>([]);

    const useIntersectionObserver = (setActiveId, activeId) => {
        const headingElementsRef = useRef({});

        useEffect(() => {
            const callback = (headings) => {
                headingElementsRef.current = headings.reduce((map, headingElement) => {
                    map[headingElement.target.id] = headingElement;
                    return map;
                }, headingElementsRef.current);

                const visibleHeadings = [];
                Object.keys(headingElementsRef.current).forEach((key) => {
                    const headingElement = headingElementsRef.current[key];
                    if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
                });

                const getIndexFromId = (id) =>
                    headingElements.findIndex((heading) => heading.id === id);

                if (visibleHeadings.length === 1) {
                    setActiveId(visibleHeadings[0].target.id);
                } else if (visibleHeadings.length > 1) {
                    const sortedVisibleHeadings = visibleHeadings.sort(
                        (a, b) => getIndexFromId(a.target.id) - getIndexFromId(b.target.id)
                    );
                    setActiveId(sortedVisibleHeadings[0].target.id);
                }

                if (visibleHeadings.length === 0) {
                    const activeElement = headingElements.find((element) => element.id === activeId);
                    const activeIndex = headingElements.findIndex((element) => element.id === activeId);

                    const activeIdYcoord =
                        activeElement?.getBoundingClientRect().y;
                        if (activeIdYcoord && activeIdYcoord > 150 && activeIndex !== 0) {
                            setActiveId(headingElements[activeIndex - 1].id);
                        }
                }

            };



            const observer = new IntersectionObserver(callback, {
                rootMargin: '-110px 0px -40% 0px',
            });

            const headingElements = Array.from(document.querySelectorAll("h2"));
            headingElements.forEach((element) => observer.observe(element));

            return () => observer.disconnect();

        }, [setActiveId, activeId]);
    };

    useEffect(() => {
        const scrapedHeaderList = Array.from(document.querySelectorAll("h2"));
        setHeaders(scrapedHeaderList);

    }, []);

    const [activeId, setActiveId] = useState();
    useIntersectionObserver(setActiveId, activeId);

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
                </div>
                <section className={styles.postPage}>
                    <div className={styles.postContent}>
                        <div className={styles.title}>
                            <p className={styles.headerText}>
                                {post.frontmatter.title}
                            </p>
                            <div className={styles.titleFrontmatter}>
                                <p className={styles.contentFrontmatter}>
                                    {post.frontmatter.author}
                                </p>
                                <p className={styles.contentFrontmatter}>
                                    {post.frontmatter.date}
                                </p>
                            </div>
                            <div className={styles.divider}></div>
                        </div>
                        <TableofContents headerList={headers} activeId={activeId}/>
                        <Content/>
                    </div>
                </section>
            </div>
        );
    }
}