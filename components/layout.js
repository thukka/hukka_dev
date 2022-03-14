import layoutStyles from "../styles/layout.module.css";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Hukka - Web Dev</title>
      </Head>
      <header>
        <nav className={layoutStyles.topNav}>
          <ul>
            <li><Link href="/"><a className={router.pathname == "/" ? layoutStyles.active : ""}>About</a></Link></li>
            <li><Link href="/portfolio"><a className={router.pathname == "/portfolio" ? layoutStyles.active : ""}>Portfolio</a></Link></li>
          </ul>
        </nav>
      </header>
      <div>
        {children}
      </div>
    </>
  );
}