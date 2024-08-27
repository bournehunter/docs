import { MDXProvider } from '@mdx-js/react'
import Content from '../content/android.mdx'
import Layout from '../components/Layout'
export default function Android() {
return (
<Layout>
<MDXProvider>
<Content />
</MDXProvider>
</Layout>
)
}
