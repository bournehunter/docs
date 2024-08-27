import { MDXProvider } from '@mdx-js/react'
import Content from '../content/ios.mdx'
import Layout from '../components/Layout'
export default function IOS() {
return (
<Layout>
<MDXProvider>
<Content />
</MDXProvider>
</Layout>
)
}
