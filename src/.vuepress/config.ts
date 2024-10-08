import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { viteBundler } from "@vuepress/bundler-vite";
//自定义插件
import { canvasPlugin, CanvasPluginType } from "./plugins/vuepress-plugin-canvas";
import { gradientCoverPlugin } from "./plugins/vuepress-plugin-gradient-cover/index.js";
import config from "./data/config.js";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: config.seo.title,
  description: config.seo.description,
  theme: theme,
  port: 8080,
  alias: {
    "@MyLink": path.resolve(__dirname, "./components/Mylink.vue"),
    "@MyCoverLink": path.resolve(__dirname, "./components/MyCoverLink.vue"),
    "@Config": path.resolve(__dirname, "./data/config.ts"),
  },
  bundler: viteBundler({
    viteOptions: {
      optimizeDeps: {
        include: ["vue", "chart.js"],
      },
      server: {
        proxy: {
          "/bing": {
            target: "https://cn.bing.com",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/bing/, ""),
          },
        },
      },
    },
  }),
  plugins: [
    // 背景插件
    gradientCoverPlugin(),
    canvasPlugin({
      type: CanvasPluginType.Figure,
      ribbonOption: {
        zIndex: 1,
        alpha: 0.8,
        size: 90,
      },
    }),
  ],
  shouldPrefetch: true,
});
