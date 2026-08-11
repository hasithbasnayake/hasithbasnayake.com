import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import './index.css';
import './content/index.tsx';

export const createRoot = ViteReactSSG({ routes });

/*
 * The structure of the src folder is as follows.
 * The components directory contains Layout.tsx and all the other components used to build out the app.
 * Note that the components directory can be further subdivided into components relevant to certain
 * pages, like components/post/Exhibit.tsx, Figure.tsx, etc.
 * pages contains the page definitions (which may include further components) for Home.tsx and Post.tsx.
 * content is where we define the post bodies alongside their metadata, which index.ts collects into a
 * single list that both the home.tsx and post.tsx read from in order to render them.
 */