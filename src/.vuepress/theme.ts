import { MyTheme } from "./theme/index";
import config from "./data/config";
import encrypt from "./encrypt.js";
import navbar from "./navbar/index";
import sidebar from "./sidebar/index";
export default MyTheme({
  /**
   * -------------------------- 主题基础配置 --------------------------
   **/
  hostname: config.hostname,
  home: config.homePath,
  favicon: "./favicon.svg",
  logo: "./logo.svg",
  author: {
    name: config.author.name,
    url: config.author.url,
    email: config.author.email,
  },
  // 文档存放路径
  docsDir: "src",
  //主题多语言配置
  locales: {},
  //站点的额外语言环境
  extraLocales: {},
  // 热加载
  hotReload: false,

  /**
   * -------------------------- 主题配置 --------------------------
   **/
  // iconPrefix: "ify-",
  iconAssets: "iconify",
  darkmode: "switch",
  externalLinkIcon: true,
  fullscreen: true,
  pure: false,
  print: true,
  /**
   * -------------------------- 布局基础配置 --------------------------
   **/
  rtl: false,
  toc: true,
  // ------------- 导航栏 -------------
  logoDark: config.logo,
  navbarTitle: "",
  navbar: navbar,
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Wormhole", "Travelling", "Outlook", "Search"],
  },
  repoDisplay: true,
  repo: config.links.github,
  repoLabel: "查看源码",
  navbarAutoHide: "always",
  hideSiteNameOnMobile: false,
  // ------------- 侧边栏 -------------
  sidebar: sidebar,
  // 侧边栏排序 readme:README.md优先，or:正序在前并按其值升序排列，负序在后并按其值降序排列,  date: 按日期升序排序, title: 按标题字母顺序排序
  sidebarSorter: ["readme", "order", "date", "title", "filename"],
  headerDepth: 2,
  // ------------- 路径导航 -------------
  breadcrumb: true,
  breadcrumbIcon: true,
  prevLink: true,
  nextLink: true,
  // ------------- 标题 -------------
  titleIcon: true,
  //自定义当前页面的页面信息。
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word", "PageView"],
  // ------------- Meta -------------
  lastUpdated: true,
  contributors: true,
  editLink: true,
  // ------------- 页脚配置 -------------
  displayFooter: true,
  footer: "Power By VuePress | Theme By vuepress-theme-hope",
  copyright: config.footer.copyright,
  license: config.footer.license,
  /**
   * ----------------------------- 博客配置 -----------------------------
   **/
  blog: {
    name: config.author.name,
    avatar: config.author.avatar,
    description: config.author.introduce || "这个人很懒，什么都没留下...",
    intro: "/intro.html",
    medias: {
      Kugou: config.links.kugou,
      Douyin: config.links.douyin,
      Qzone: config.links.qzone,
      Gitee: config.links.gitee,
      GitHub: config.links.github,
      Email: config.author.email,
    },
    sidebarDisplay: "mobile",
    timeline: "闲云潭影日悠悠，物换星移几度秋。",
    articlePerPage: 10,
    //文章列表中展示的文章信息 Author:作者 Original:原创 Date:日期 PageView:浏览量 Category:分类 ReadingTime:阅读时间
    articleInfo: ["Author", "Original", "Date", "PageView", "Category", "ReadingTime"],
  },
  encrypt: {
    global: false,
    admin: ["++++", "----"],
    config: encrypt,
  },

  /**
   * ----------------------------- 插件配置 -----------------------------
   **/
  plugins: {
    // 博客
    prismjs: true,
    blog: {
      filter: ({ filePathRelative, frontmatter }) => {
        // 将标记为非文章，并且是说说的加入文章采集中，以便后续筛选
        if (!frontmatter.article && frontmatter.news) return true;
        return true;
      },
      type: [
        {
          key: "news",
          filter: (page) => page.frontmatter.news === true,
          layout: "News",
          frontmatter: () => ({ title: "说说" }),
        },
      ],
    },
    photoSwipe: {
      selector: [".theme-hope-content :not(a) > img:not([no-view])", ".news-content :not(a) > .vp-article-excerpt img"],
    },
    git: true,
    feed: {
      rss: true,
    },
    //启用插件
    components: {
      components: ["ArtPlayer", "Badge", "BiliBili", "CodePen", "PDF", "Share", "SiteInfo", "StackBlitz", "VPBanner", "VPCard", "VidStack", "XiGua"],
    },
    revealjs: true,
    // 复制版权信息
    copyright: true,
    // 水印配置
    watermark: {
      enabled: false,
      watermarkOptions: {
        contentType: "text",
        content: "vuepress-theme-hope",
        textType: "stroke",
      },
      delay: 500,
    },
    markdownTab: true,
    markdownImage: {
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      lazyload: true,
      // 启用图片标记
      mark: true,
      // 启用图片大小
      size: true,
    },
    mdEnhance: {
      gfm: true,
      vPre: true,
      linkify: true,
      align: true,
      attrs: true,
      sup: true,
      sub: true,
      footnote: true,
      mark: true,
      tasklist: true,
      include: true,
      component: true,
      chart: true,
      echarts: true,
      flowchart: true,
      mermaid: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      playground: {
        presets: ["ts", "vue"],
      },
      vuePlayground: true,
      sandpack: true,
      demo: {
        codepen: true,
        jsfiddle: true,
      },
    },
    docsearch: {
      appId: "OPKR5M4ODX",
      apiKey: "86538b8464510cb1211d679f6d18b7d2",
      indexName: "三个三",
      locales: {
        "/": {
          placeholder: "搜索内容",
          translations: {
            button: {
              buttonText: "搜索",
              buttonAriaLabel: "搜索",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    },
    pwa: {
      favicon: "./favicon.svg",
      cacheHTML: true,
      appendBase: true,
      cacheImage: true,
      maxSize: 1024 * 1024 * 5,
      maxImageSize: 1024 * 1024 * 5,
      update: "hint",
      apple: {
        icon: "/assets/pwa/apple-icon-152.png",
        statusBarColor: "black",
        maskIcon: "/assets/pwa/apple-icon-152.png",
      },
      msTile: {
        image: "/assets/pwa/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/pwa/chrome-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/pwa/chrome-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/pwa/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/pwa/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/pwa/chrome-192.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
