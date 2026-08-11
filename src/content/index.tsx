import type React from "react";
import type {Metadata, Post} from "./types.ts";

interface Module {
    metadata: Metadata;
    default: React.ComponentType;
}

const modules = import.meta.glob<Module>('./posts/*.tsx', { eager: true});

export const PostList = Object.entries(modules).map(([path, module]): Post => {
    return {
        slug: path.split('/').pop()!.replace('.tsx', ''),
        metadata: module.metadata,
        content: module.default,
    };
});

export const PostListMetadata: Metadata[] = PostList.map((post: Post): Metadata => post.metadata);

