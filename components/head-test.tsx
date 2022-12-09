import Head from 'next/head'

export const Tester = () => {
  return <>
  <Head>
    <script src="/test.js" id="testId" key="testKey" async />
  </Head>
  <span>A component</span></>
}