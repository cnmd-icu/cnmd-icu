import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "logos:whatwg",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "代码笔记",
      icon: "emojione-v1:note-pad",
      prefix: "posts/",
      children: [
        {
          text: "前端开发",
          icon: "mdi:web",
          prefix: "Web/",
          link: "Web/",
        },
        {
          text: "Android",
          icon: "mdi:android",
          prefix: "Android/",
          link: "Android/",
        },
        {
          text: "Java",
          icon: "mdi:coffee",
          prefix: "Java/",
          link: "Java/",
        },
        {
          text: "Python",
          icon: "mdi:language-python",
          prefix: "Python/",
          link: "Python/",
        },
        {
          text: "数据库",
          icon: "iconamoon:3d",
          prefix: "Database/",
          link: "Database/",
        },
        {
          text: "Linux",
          icon: "logos:linux-tux",
          prefix: "Linux/",
          link: "Linux/",
        },
        {
          text: "其他文档",
          icon: "basil:other-1-outline",
          prefix: "Other/",
          link: "Other/",
        },
      ],
    },
    {
      text: "软件/工具",
      icon: "mdi:apple-keyboard-command",
      prefix: "tutorial/",
      link: "tutorial",
    },
    {
      text: "博客相关",
      icon: "la:blog",
      prefix: "blog/",
      link: "blog/",
    },
    {
      text: "站点收藏",
      icon: "solar:chat-round-like-bold",
      prefix: "site",
      link: "site",
      children: "structure",
    },
    {
      text: "随笔",
      icon: "clarity:note-line",
      prefix: "private/",
      children: "structure",
    },
    {
      text: "关于本站",
      icon: "ri:information-2-fill",
      prefix: "about/",
      link: "about",
    },
  ],
  "/posts/": [
    {
      text: "代码笔记",
      icon: "emojione-v1:note-pad",
      children: [
        {
          text: "前端开发",
          icon: "mdi:web",
          prefix: "Web/",
          link: "Web/",
        },
        {
          text: "Android",
          icon: "mdi:android",
          prefix: "Android/",
          link: "Android/",
        },
        {
          text: "Java",
          icon: "mdi:coffee",
          prefix: "Java/",
          link: "Java/",
        },
        {
          text: "Python",
          icon: "mdi:language-python",
          prefix: "Python/",
          link: "Python/",
        },
        {
          text: "数据库",
          icon: "iconamoon:3d",
          prefix: "Database/",
          link: "Database/",
        },
        {
          text: "Linux",
          icon: "logos:linux-tux",
          prefix: "Linux/",
          link: "Linux/",
        },
        {
          text: "其他文档",
          icon: "basil:other-1-outline",
          prefix: "Other/",
          link: "Other/",
        },
      ],
    },
  ],
});
