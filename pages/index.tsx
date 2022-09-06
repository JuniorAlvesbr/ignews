import type { NextPage } from 'next'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'

import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IG news</title>
      </Head>

      <main className={styles.container}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>News about <br />the <span>React</span> world</h1>
          <p>Get acees to all the publications <br /><span>for $9,90 month</span></p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="avatar" />
      </main>
    </>
  )
}

export default Home
