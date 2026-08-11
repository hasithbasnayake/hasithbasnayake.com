import Layout from "./components/layout.tsx";
import Home from "./pages/home.tsx";
import Post from "./pages/post.tsx";
import {PostList} from "./content/index.tsx";

export const routes = [
    {
        path: '/',
        Component: Layout,
        children: [
            {index: true, Component: Home},
            {
                path: ':slug',
                Component: Post,
                getStaticPaths: () => PostList.map(post => post.slug),
            },
        ],
    },
];