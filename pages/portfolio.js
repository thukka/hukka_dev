import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/portfolio.module.css";
import { motion } from "framer-motion";
import { projectsArr } from "../components/portfolio-projects.js";

const ProjectComponent = ({ name, description, technology, img, imgAlt, url }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className={styles.tile}>
      <div className={styles.projectInfo}>
        <h2>{name}</h2>
        <p className={styles.projectDescription}>{description}</p>
        <a className={styles.linkGitHub} href={url} target="_blank" rel="noreferrer">
          <div className={styles.linkGitHubPic}>
            <Image
              src="/images/github_round.svg"
              alt="Link to GitHub"
              height="15px"
              width="15px"
            />
          </div>
          <span>View on GitHub</span>
        </a>
        <ul>
          {
            technology.split(", ").map((x, i) => <li key={i} className={styles.skill}>{x}</li>)
          }
        </ul>
      </div>
      <aside className={styles.projectPic}>
        <Image
          src={`/images/projects/${img}`}
          alt={imgAlt}
          width="150px"
          height="150px"
        />
      </aside>
    </motion.div>
  );
};


export default function Portfolio() {
  return (
    <Layout>
      {projectsArr.map((x) =>
        <ProjectComponent key={x.name} name={x.name} description={x.description} technology={x.technology} img={x.img} imgAlt={x.imgAlt} url={x.url} />
      )}
    </Layout>
  );
}