export interface LinkData {
  name: string;
  desc: string;
  icon: string;
  link: string;
}

export const friends: LinkData[] = [
  {
    name: "Bing🐣",
    desc: "基于VuePress的个人博客，记录日常开发问题",
    icon: "https://liubing.me/logo.png",
    link: "https://liubing.me/",
  },
];
export const invalid: LinkData[] = [];
