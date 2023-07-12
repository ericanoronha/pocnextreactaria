import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const poc = 'PoC Next App React-Aria';
  return (
    <div className={styles.container}>
      <Head>
        <title>{poc}</title>
        <meta name="description" content={poc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{poc}</h1>

        <p className={styles.description}>
          Configurando projeto
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Next</h2>
            <p>v12.2.4</p>
          </div>
          <div className={styles.card}>
            <h2>React</h2>
            <p>v18.2.0</p>
          </div>

          <div className={styles.card}>
            <h2>Typescript</h2>
            <p>v4.7.4</p>
          </div>

          {/* <div className={styles.card}>
            <h2>React-Aria</h2>
            <p>v3.23.1</p>
          </div> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/ericanoronha/pocnextreactaria"
          target="_blank"
          rel="noopener noreferrer"
        >
          Erica Noronha ✌️
        </a>
      </footer>
    </div>
  );
}
