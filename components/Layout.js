import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="container">
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/setup">
            <a>Setup</a>
          </Link>
          <Link href="/ios">
            <a>iOS</a>
          </Link>
          <Link href="/android">
            <a>Android</a>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 Boop SMS Business Cards. All rights reserved.</p>
      </footer>
    </div>
  )
}

