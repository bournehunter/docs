export default {
  logo: <span>Boop</span>,
  project: {
    link: 'https://github.com/bournehunter/docs'
  },
  docsRepositoryBase: 'https://github.com/bournehunter/docs/tree/main',
  footer: {
    text: '© 2024 Boop Me Inc.'
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent: ({ title, type }) => <>{title}</>
  }
}
