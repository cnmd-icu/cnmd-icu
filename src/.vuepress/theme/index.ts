// .vuepress/theme/index.ts
import { getDirname, path } from "vuepress/utils";
import { hopeTheme } from "vuepress-theme-hope";
import type { ThemeOptions } from "vuepress-theme-hope";
import type { Theme } from "vuepress/core";

const __dirname = getDirname(import.meta.url);

export const MyTheme = (options: ThemeOptions): Theme => {
  return {
    name: "vuepress-theme-local",

    extends: hopeTheme(options, { custom: true }),

    alias: {
      "@theme-hope/components/PageFooter": path.resolve(__dirname, "./components/PageFooter.vue"),
      "@theme-hope/modules/blog/components/BlogHero": path.resolve(__dirname, "./components/BlogHero.vue"),
    },
  };
};
