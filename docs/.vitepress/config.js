
function sidebarMysql() {
    return [
        {
            text: '组件商城(2023.03.09)', collapsed: false, items: [
                { text: '部署手册', link: '/mysql/honeycomb-store/deploy' },
                { text: '建表脚本', link: '/project/honeycomb-store/ddl' },
                { text: '接口文档', link: '/project/honeycomb-store/api' },
            ]
        },
        {
            text: '日志收集工程(2022.12.01)', collapsed: false, items: [
                { text: '部署手册', link: '/project/log-collection/deploy' },
                // { text: '建表脚本', link: '/project/honeycomb-store/ddl' },
                // { text: '接口文档', link: '/project/honeycomb-store/api' },
            ]
        },
        {
            text: '啄木鸟监控(2022.10.16)', collapsed: false, items: [
                { text: '部署手册', link: '/project/woodpecker/deploy' },
                // { text: '建表脚本', link: '/project/honeycomb-store/ddl' },
                // { text: '接口文档', link: '/project/honeycomb-store/api' },
            ]
        },
    ]
}

function sidebarPostgres() {
    return [
        {
            text: 'Postgres Spring 实践', collapsed: false, items: [
                { text: '数组字段映射', link: '/postgres/spring/array-field' },
            ]
        },
    ]
}

export default {
    title: "Jansora's document",
        titleTemplate: 'Jansora\'s knowledge base',
        description: 'Just playing around.',
        cleanUrls: true,
        lang: 'zh-CN',
        lastUpdated: true,
        themeConfig: {
        nav: [
            // { text: 'project', link: '/project' },
            // { text: 'project', link: '/project' },
            { text: '项目管理', link: '/project/honeycomb-store/deploy' },
            { text: '研发指南', link: '/development/qa/api-doc' },
            { text: '资源索引', link: '/linked/development/1' },
            { text: '新人必读', link: '/new-comers/first-day' },
            // {
            //     text: 'Dropdown Menu',
            //     items: [
            //         { text: 'Item A', link: '/item-1' },
            //         { text: 'Item B', link: '/item-2' },
            //         { text: 'Item C', link: '/item-3' }
            //     ]
            // }
        ],
        sidebar: {

            // '/mysql/': sidebarMysql(),
            '/postgres/': sidebarPostgres(),
                // '/linked/': sidebarLinked(),
                // '/new-comers/': sidebarNewComers(),
        }



    ,
        editLink: {
            pattern: 'https://github.com/Jansora/doc-database/edit/main/:path',
            text: 'Edit this page on GitHub'
        },
        footer: {
            message: 'Jansora\'s knowledge base',
                copyright: 'Copyright © 2019-present Jansora'
        }
    }
}
