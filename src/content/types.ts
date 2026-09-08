import type React from "react";

export interface ToCEntry {
    id: string;
    label: string;

}

export interface PageFrontmatter {
    title: string;
    description: string;
    author: string;
    toc: ToCEntry[];
    date: string;
    category: string;

}

export interface Post {
    slug: string;
    frontmatter: PageFrontmatter;
    content: React.ComponentType;
}
export type PostPreview = Omit<Post, 'content'>;

