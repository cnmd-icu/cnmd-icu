import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "导航", icon: "discover", link: "demo/" },
  {
    text: "笔记",
    icon: "edit",
    children: [
      {
        text: "代码笔记",
        prefix: "/posts/",
        children: [
          { text: "前端笔记", icon: "code", link: "Web/" },
          { text: "Linux", icon: "linux", link: "Linux/" },
          { text: "Python", icon: "python", link: "Python/" },
        ],
      },
      {
        text: "博客相关",
        prefix: "/blog/",
        children: [{ text: "博客相关", icon: "blog", link: "" }],
      },
    ],
  },
  {
    text: "软件教程",
    icon: "software",
    link: "/tutorial/",
  },
  {
    text: "收藏",
    icon: "hk-shoucang1",
    link: "/collect",
  },
  {
    text: "说说",
    icon: "news",
    link: "/news/",
  },
  {
    text: "留言板",
    icon: "mark",
    link: "/visitorsbook",
  },
  {
    text: "友链",
    icon: "link",
    link: "/friend",
  },
  {
    text: "关于",
    icon: "info",
    children: [
      { text: "关于我", icon: "people", link: "/intro" },
      { text: "关于本站", icon: "info", link: "/about" },
    ],
  },
]);
