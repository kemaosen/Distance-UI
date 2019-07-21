module.exports = {
    base:'/Distance-UI/',
    themeConfig: {
        // 配置导航栏
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/components/' },
            { text: '交流', link: 'https://google.com' },
        ],
        // 配置侧边栏
        sidebar: [
            {
                title: '入门',
                // collapsable: false,
                children: [
                  '/Install/',
                  '/GetStart/'
                ]
            },
            {
                title: '组件',
                // collapsable: false,
                children: [
                  '/components/button'
                ]
            },
        ]
    }
  }