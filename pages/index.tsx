import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

import styles from '../styles/home.module.scss'

interface HomeProps {
  product: {
    priceId: string,
    amount: number
  }
}

const Home: NextPage = ({ product }: HomeProps) => {
  return (
    <>
      <Head>
        <title>IG news</title>
      </Head>

      <main className={styles.container}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>News about <br />the <span>React</span> world</h1>
          <p>Get acees to all the publications <br /><span>for {product.amount} month</span></p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="avatar" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1Lf2lwCXtl70wKD10N1UI2YT')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 horas
  }
}

export default Home
