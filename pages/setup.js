import { MDXProvider } from '@mdx-js/react'
import Content from '../content/setup.mdx'
import Layout from '../components/Layout'
export default function Setup() {
return (
<Layout>
<MDXProvider>
<Content />
</MDXProvider>
</Layout>
)
}
