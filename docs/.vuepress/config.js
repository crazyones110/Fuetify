module.exports = {
  title: 'Fuetify UI',
  description: '一个好用的UI框架',
  markdown: {
    lineNumbers: true
  },
  chainWebpack: (config, isServer) => {
    return {
      loader: 'sass-loader',
    options: {
        sassOptions: {
            indentedSyntax: true
        }
    }
    }
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
    ]
  }
}