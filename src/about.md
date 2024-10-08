---
date: 2023-3-14 21:45:45
icon: info
footer: false
category:
  - Blog
tag:
  - Blog
---
# 关于本站

:::: info ✨📒
详细记录一下此次建站过程
::::

## 开始

博客是基于[vuepress-theme-hope](https://theme-hope.vuejs.press/zh/)开发的，漂亮的外观和简洁的配置，构造模式一下子就吸引到我了，然后去官网深入研究了一番，发现开发的成本并不高，对于我来说比较友好，基本都是基于选项的配置型，和一小部分的定制开发，也可以基于vue来写，这让我觉得很合适用于自己的博客，于是就开始了这个项目。


## Markdown增强

hope主题的markdown效果是出乎意料的好，而且支持了很多普通markdown不支持的东西，如自定义容器、带tab的代码块，最方便的是可以直接写流程图了，可选高亮主题（本站代码高亮基于shikiPlugin,虽不如默认的prismjs轻量高效，但能提供更准确的语法高亮）具体效果看这里☞[Markdown展示](/demo/markdown.md)

## 目录结构

```Shell
├─ 📁.github   #github配置
│  ├─ 📁ISSUE_TEMPLATE
│  │  └─ 📄bug-report.yml
│  └─ 📁workflows
│     └─ 📄deploy-docs.yml
├─ 📁.vscode
│  └─ 📄settings.json
├─ 📁api  #api配置
│  └─ 📄proxy.js
├─ 📁node_modules
├─ 📁script
│  ├─ 📄requirements.txt
│  └─ 📄submit.py
├─ 📁src
│  ├─ 📁.vuepress
│  │  ├─ 📁.cache
│  │  ├─ 📁.temp
│  │  ├─ 📁components  #自定义组件配置
│  │  │  ├─ 📄MyCoverLink.vue
│  │  │  └─ 📄Mylink.vue
│  │  ├─ 📁data        #全局数据配置
│  │  │  ├─ 📄config.ts
│  │  │  └─ 📄friendData.ts
│  │  ├─ 📁navbar     #导航栏配置
│  │  │  ├─ 📄index.ts
│  │  │  └─ 📄zh.ts 
│  │  ├─ 📁plugins    #插件项配置
│  │  │  ├─ 📁vuepress-plugin-canvas
│  │  │  │  ├─ 📁client
│  │  │  │  │  └─ 📄canvas-client-config.ts
│  │  │  │  ├─ 📁components
│  │  │  │  │  ├─ 📄figure.ts
│  │  │  │  │  └─ 📄ribbon.js
│  │  │  │  ├─ 📄index.ts
│  │  │  │  └─ 📄type.ts
│  │  │  └─ 📁vuepress-plugin-gradient-cover
│  │  │     ├─ 📁client
│  │  │     │  ├─ 📁components
│  │  │     │  │  └─ 📄BlogBg.ts
│  │  │     │  ├─ 📁style
│  │  │     │  │  └─ 📄cove.scss
│  │  │     │  └─ 📄cover-client-config.ts
│  │  │     └─ 📄index.ts
│  │  ├─ 📁public   #静态资源
│  │  │  ├─ 📁assets
│  │  │  │  ├─ 📁background
│  │  │  │  │  ├─ 📄1.png
│  │  │  │  │  ├─ 📄2.jpg
│  │  │  │  │  ├─ 📄3.webp
│  │  │  │  │  ├─ 📄4.webp
│  │  │  │  │  └─ 📄5.webp
│  │  │  │  ├─ 📁images
│  │  │  │  │  ├─ 📄cover.png
│  │  │  │  │  └─ 📄cover2.png
│  │  │  │  ├─ 📁pwa
│  │  │  │  │  ├─ 📄apple-icon-152.png
│  │  │  │  │  ├─ 📄chrome-192.png
│  │  │  │  │  ├─ 📄chrome-256.ico
│  │  │  │  │  ├─ 📄chrome-512.png
│  │  │  │  │  ├─ 📄logo.svg
│  │  │  │  │  └─ 📄ms-icon-144.png
│  │  │  │  └─ 📄avatar.jpg
│  │  │  ├─ 📄favicon.svg
│  │  │  └─ 📄logo.svg
│  │  ├─ 📁sidebar
│  │  │  ├─ 📄index.ts
│  │  │  └─ 📄zh.ts
│  │  ├─ 📁styles   #样式配置
│  │  │  ├─ 📄config.scss
│  │  │  ├─ 📄index.scss
│  │  │  ├─ 📄md.scss
│  │  │  ├─ 📄palette.scss
│  │  │  └─ 📄waline.scss
│  │  ├─ 📁theme
│  │  │  ├─ 📁api
│  │  │  │  └─ 📄bing.ts
│  │  │  ├─ 📁components
│  │  │  │  ├─ 📄BlogHero.vue
│  │  │  │  ├─ 📄NewsItem.vue
│  │  │  │  ├─ 📄NewsList.vue
│  │  │  │  ├─ 📄PageFooter.vue
│  │  │  │  ├─ 📄Travelling.ts
│  │  │  │  └─ 📄Wormhole.ts
│  │  │  ├─ 📁layouts
│  │  │  │  ├─ 📄News.vue
│  │  │  │  └─ 📄NotFound.vue
│  │  │  ├─ 📁utils
│  │  │  │  └─ 📄time.ts
│  │  │  └─ 📄index.ts
│  │  ├─ 📄client.ts
│  │  ├─ 📄config.ts
│  │  ├─ 📄encrypt.ts
│  │  └─ 📄theme.ts
│  ├─ 📄about.md
│  ├─ 📄collect.md
│  ├─ 📄friend.md
│  ├─ 📄intro.md
│  ├─ 📄README.md
│  └─ 📄visitorsbook.md
├─ 📄.gitignore
├─ 📄.npmrc
├─ 📄env.d.ts
├─ 📄package.json
├─ 📄tsconfig.json
└─ 📄vercel.json
```
## 框架支持

[vuepress2.x](https://v2.vuepress.vuejs.org/zh/)

## 主题支持

[vuepress-theme-hope](https://theme-hope.vuejs.press/zh/)

## 自定义内容

基于原主题进行了继承，个性化内容如下，主要自定义内容分为

1. **自定义布局**
   - NotFound.vue
   - News.vue(说说列表布局)

2. **自定义组件**

   - BlogHero.vue
   - PageFooter.vue
   - Sponsor.vue（打赏组件）
   - NewsList.vue （说说列表）
   - NewsItem.vue （说说item）

3. **本地插件开发**

   - vuepress-plugin-canvas（支持彩虹背景和动态几何图形两种）
   - vuepress-plugin-gradient-cover （遮罩背景）

4. **引用外部内容**


5. **配置内容**
   - navbar
   - sidebar
   - 评论基于 [Waline](https://waline.js.org/)
   - 搜索基于[algolia](https://www.algolia.com/developers/?utm_content=powered_by&utm_source=localhost&utm_medium=referral&utm_campaign=docsearch)
   - 启用 copyright 版权信息插件
   - feed rss插件
   - 增加文章类型-说说，为说说markdown图片添加预览选择器

6. **零碎**
   - 运行时间统计
   - CSS 样式美化
   - 引入字体，品如手写体，夏行楷体
   - wanlie 增加自定义emoji，并修改展示样式
   - 个性log
   - 自动推送新文章url到搜索引擎（百度、Bing、Google）👉[详细配置](/platform/github/github-action)

## 总结
> 未完待续，持续优化中
> 
本地插件，喜欢自取，源码公开，点击右上角，github图标即可，当然不要忘记点个✨哦

