module.exports = {
  base: '/Fuetify/',
  title: 'Fuetify UI',
  description: '一个好用的UI框架',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/grid',
          '/components/input',
          '/components/layout',
          '/components/popover',
          '/components/tabs',
          '/components/toast'
        ]
      }
    ],
    lastUpdated: '最后更新时间',
    repo: 'https://github.com/crazyones110/Fuetify',
    repoLabel: 'Github',
  }
}