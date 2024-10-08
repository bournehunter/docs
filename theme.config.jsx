import React from 'react'

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

export default {
  logo: <span>Boop</span>,
  project: {
    link: 'https://www.linkedin.com/company/boopme',
    icon: <LinkedInIcon />
  },
  docsRepositoryBase: 'https://github.com/bournehunter/docs/tree/main',
  footer: {
    text: '© 2024 Boop Me Inc.'
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent: ({ title, type }) => <>{title}</>
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Boop SMS Business Cards',
      defaultTitle: 'Boop SMS Business Cards Documentation',
      description: "Learn how to use Boop SMS Business Cards for efficient digital networking. Your comprehensive guide to setup and usage.",
      openGraph: {
        title: 'Boop SMS Business Cards Documentation',
        description: "Learn how to use Boop SMS Business Cards for efficient digital networking. Your comprehensive guide to setup and usage.",
        site_name: 'Boop SMS Business Cards'
      }
    }
  },
  head: (
    <>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://raw.githubusercontent.com/Boop-Me-Inc/boop-nextjs/master/public/favicon.ico?token=GHSAT0AAAAAACUY6GZF2CLGHQ7CY2TUZUJOZWNTFCA"
      />
    </>
  ),
}
