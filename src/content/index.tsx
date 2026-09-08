import type React from "react";
import type {PageFrontmatter, Post} from "./types.ts";

interface Module {
    frontmatter: PageFrontmatter;
    default: React.ComponentType;
}

const modules = import.meta.glob<Module>('./posts/*.tsx', { eager: true});

export const PostList = Object.entries(modules).map(([path, module]): Post => {
    return {
        slug: path.split('/').pop()!.replace('.tsx', ''),
        frontmatter: module.frontmatter,
        content: module.default,
    };
});

