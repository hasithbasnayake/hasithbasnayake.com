import Layout from "./components/layout.tsx";
import Home from "./pages/home.tsx";

export const routes = [
    {
        path: '/',
        Component: Layout,
        children: [
            {index: true, Component: Home},
        ],
    },
];