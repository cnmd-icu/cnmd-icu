import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "导航", icon: "material-symbols:assistant-navigation-rounded", link: "demo/" },
  {
    text: "笔记",
    icon: "material-symbols:assignment-rounded",
    children: [
      {
        text: "代码笔记",
        prefix: "/posts/",
        children: [
          { text: "前 端 笔 记", icon: "mdi:web", link: "Web/" },
          { text: "Java 笔 记", icon: "mdi:coffee", link: "Java/" },
          { text: "Android笔记", icon: "mdi:android", link: "Android/" },
          { text: "Python笔记", icon: "mdi:language-python", link: "Python/" },
          { text: "数据库笔记", icon: "iconamoon:3d", link: "Database/" },
          { text: "Linux文档", icon: "logos:linux-tux", link: "Linux/" },
          { text: "其他文档", icon: "basil:other-1-outline", link: "Other/" },
        ],
      },
      {
        text: "博客相关",
        prefix: "/blog/",
        children: [{ text: "博客相关", icon: "la:blog", link: "" }],
      },
    ],
  },
  {
    text: "开发工具教程",
    icon: "mdi:apple-keyboard-command",
    link: "/tutorial/",
  },
  {
    text: "收藏",
    icon: "solar:chat-round-like-bold",
    link: "/collect",
  },
  {
    text: "说说",
    icon: "ic:twotone-message",
    link: "/news/",
  },
  {
    text: "留言板",
    icon: "icon-park-solid:message-emoji",
    link: "/visitorsbook",
  },
  {
    text: "友链",
    icon: "ri:link",
    link: "/friend",
  },
  {
    text: "关于",
    icon: "ri:information-2-fill",
    children: [
      { text: "关于我", icon: "solar:user-id-bold", link: "/intro" },
      { text: "关于本站", icon: "ri:information-2-fill", link: "/about" },
    ],
  },
]);
