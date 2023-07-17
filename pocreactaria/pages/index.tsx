//@ts-ignore
import Head from 'next/head';
import React from 'react';
import { ReactAriaSelect } from '../components/select/ReactAriaSelect';
import { Item } from '@react-stately/collections';

export default function Home() {
  const poc = 'PoC Next App React-Aria';
  return (
    <div className={'container'}>
      <Head>
        <title>{poc}</title>
        <meta name="description" content={poc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'main'}>
        <h1 className={'title'}>{poc}</h1>

        <p className={'description'}>Configurando projeto</p>

        <div className={'grid'}>
          <div className={'card'}>
            {/* comentado para poder executar build 
            <ReactAriaSelect label="React Aria Select" name="react-aria-select">
              <Item>Option 1</Item>
              <Item>Option 2</Item>
              <Item>Option 3</Item>
              <Item>Option 4</Item>
              <Item>Option 5</Item>
            </ReactAriaSelect> */}
          </div>
        </div>

        <div className={'grid'}>
          <div className={'card'}>
            <h2>Next</h2>
            <p>v12.2.4</p>
          </div>
          <div className={'card'}>
            <h2>React</h2>
            <p>v18.2.0</p>
          </div>
          <div className={'card'}>
            <h2>Typescript</h2>
            <p>v4.7.4</p>
          </div>
          <div className={'card'}>
            <h2>React-Aria</h2>
            <p>v3.26.0</p>
          </div>
        </div>
      </main>

      <footer className={'footer'}>
        <a
          href="https://github.com/ericanoronha/pocnextreactaria"
          target="_blank"
          rel="noopener noreferrer"
        >
          Erica Noronha ✌️
        </a>
      </footer>
      <style>{`
        .container {
          padding: 0 2rem;
        }

        .main {
          min-height: 100vh;
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .footer {
          display: flex;
          flex: 1;
          padding: 2rem 0;
          border-top: 1px solid #eaeaea;
          justify-content: center;
          align-items: center;
        }

        .footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          margin: 4rem 0;
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          cursor: default;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          max-width: 300px;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
          margin-left: 0.5rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        @media (prefers-color-scheme: dark) {
          .card,
          .footer {
            border-color: #222;
          }

          .code {
            background: #111;
          }

          .logo img {
            filter: invert(1);
          }
        }
      `}</style>

      <style>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }

        @media (prefers-color-scheme: dark) {
          html {
            color-scheme: dark;
          }
          body {
            color: white;
            background: black;
          }
        }
      `}</style>
    </div>
  );
}
