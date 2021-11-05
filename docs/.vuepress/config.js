/*
 * @Date: 2021-11-04 16:12:42
 * @LastEditors: 曾令宇
 * @LastEditTime: 2021-11-05 17:08:55
 * @FilePath: /zly981026.github.io/docs/.vuepress/config.js
 */
module.exports = {
    title: '没有好名字',
    markdown: {
        toc: {
            includeLevel: [2, 3, 4]
        }
    },
    themeConfig: {
        nav: [
            { text: "GitHub", link: 'https://github.com/zly981026', target: '_blank' },
            { text: "Issues", link: 'https://github.com/zly981026/zly981026.github.io/issues', target: '_blank' },
        ]
    }, sidebar: {
        collapsable: false,
        sidebarDepth: 2
    }
}