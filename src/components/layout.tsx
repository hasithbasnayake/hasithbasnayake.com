import {Outlet} from "react-router-dom";
import styles from "./Layout.module.css";
import { Analytics } from "@vercel/analytics"


export default function Layout() {
    return (
      <div className={styles.page}>
          <Outlet/>
          <Analytics />
      </div>
    );
}