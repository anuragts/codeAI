import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title >codeAI</title>
      </Head>
    <div className='text-3xl font-bold text-center'>
    Hello World
    </div>
    </>
  )
}

export default Home
