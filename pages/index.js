import Image from "next/image";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const ImageComponent = ({ file, alt }) => {
  return (
    <Image
      src={`/images/${file}`}
      alt={`${alt}`}
      width="32px"
      height="32px"
    />
  );
};

export default function Home() {
  return (
    <>
      <Layout>
        <div className={utilStyles.tile}>
          <div className={`${utilStyles.header} ${utilStyles.col13}`}>
            <Image
              src="/images/profile_picture.png"
              alt="Picture of Toni"
              width="200px"
              height="200px"
            />
            <h2>Toni Hukka</h2>
            <div className={utilStyles.bioSites}>
              <a href="mailto:hukkatoni@gmail.com">
                <ImageComponent file="sites/mail.svg" alt="E-mail" />
              </a>
              <a href="https://linkedin.com/in/hukka" target="_blank" rel="noreferrer">
                <ImageComponent file="sites/linkedin.svg" alt="LinkedIn" />
              </a>
              <a href="https://github.com/thukka" target="_blank" rel="noreferrer">
                <ImageComponent file="sites/github.svg" alt="GitHub" />
              </a>
            </div>
            <ul className={utilStyles.quickInfoList}>
              <li>Amateur pizzaiolo.</li>
              <li>Hockey fan.</li>
              <li>Trying to grow chilies!</li>
              <li>Enjoy playing video games and watching esports.</li>
            </ul>
          </div>
          <section className={utilStyles.col23}>
            <p>foobar</p>
          </section>
        </div>
      </Layout>
    </>
  );
};