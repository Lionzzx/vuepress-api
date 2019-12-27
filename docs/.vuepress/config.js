module.exports = {
  title: '挖矿',
  description: '挖矿项目',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  dest: './dist',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '后台Api', link: '/oa/' },
      { text: '客户端Api', link: '/app/' }
    ],

    sidebar: 'auto',
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    displayAllHeaders: true
  }
}
