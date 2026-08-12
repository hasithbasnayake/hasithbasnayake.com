import type React from "react";

export interface ToC {
    id: string;
    name: string;
}

export interface Metadata {
    title: string;
    description: string;
    author: string;
    toc: ToC[];
    date: string;
    category: string;
}

export interface Post {
    slug: string;
    metadata: Metadata;
    content: React.ComponentType;
}