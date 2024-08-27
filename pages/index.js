import { MDXProvider } from '@mdx-js/react'
import Content from '../content/intro.mdx'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <MDXProvider>
        <Content />
      </MDXProvider>
    </Layout>
  )
}

