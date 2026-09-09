import Layout from "./components/layout.tsx";
import Home from "./pages/home.tsx";
import PostPage from "./pages/post.tsx";
import {PostList} from "./content/index.tsx";

export const routes = [
    {
        path: '/',
        Component: Layout,
        children: [
            {index: true, Component: Home},
            {
                path: ':slug',
                Component: PostPage,
                getStaticPaths: () => PostList.map(post => post.slug),
            },
        ],
    },
];