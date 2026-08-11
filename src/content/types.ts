import type React from "react";

export interface Metadata {
    title: string;
    description: string;
    author: string;
    date: string;
    category: string;
}

export interface Post {
    slug: string;
    metadata: Metadata;
    content: React.ComponentType;
}