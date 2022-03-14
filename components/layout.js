import layoutStyles from "../styles/layout.module.css";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence exitBeforeEnter>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.15 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}