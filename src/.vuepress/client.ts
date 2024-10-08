// .vuepress/client.ts
import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import Wormhole from "./theme/components/Wormhole";
import Travelling from "./theme/components/Travelling";
import NotFound from "./theme/layouts/NotFound.vue";
// import Layout from "./theme/layouts/Layout.vue";
import News from "./theme/layouts/News.vue";

import "@vuepress/helper/normalize.css";
import "vuepress-theme-hope/presets/round-blogger-avatar.scss";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import "vuepress-theme-hope/presets/bounce-icon.scss";
// import "vuepress-theme-hope/presets/hide-navbar-icon.scss";
// import "vuepress-theme-hope/presets/hide-sidebar-icon.scss";
import "vuepress-theme-hope/presets/hr-driving-car.scss";

export default defineClientConfig({
  layouts: {
    NotFound,
    News,
  },
  enhance: ({ app }) => {
    app.component("Wormhole", Wormhole);
    app.component("Travelling", Travelling);
  },
  setup: () => {
    setupRunningTimeFooter(new Date("2023-01-20"), { "/": "本站已运行 :day 天 :hour 小时 :minute 分钟 :second 秒" }, true);
    setupTransparentNavbar({
      type: "blog-homepage",
      light: "#eee",
      dark: "#fff",
    });
  },
});
