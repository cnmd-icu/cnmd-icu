<template>
  <footer class="footer-wrapper" v-show="enable">
    <div class="footer-content">
      <div class="footer" v-html="content"></div>
      <div class="copyright">{{ copyright }}</div>
    </div>
    <span id="runtime_span"></span>
    <div class="footer-link">
      <a href="https://www.foreverblog.cn/go.html" target="_blank">
        <img
          :src="wormhole"
          alt=""
          style="width: auto; height: 32px"
          title="穿梭虫洞-随机访问十年之约友链博客"
      /></a>
      <a href="https://www.travellings.cn/go.html" target="_blank">
        <img
          src="https://www.travellings.cn/assets/logo.gif"
          alt=""
          style="width: auto; height: 32px"
          title="开往-友链接力"
      /></a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { usePageFrontmatter } from "vuepress/client";
import { isString } from "vuepress/shared";
import { computed, watch, onMounted } from "vue";
import {
  usePageAuthor,
  useThemeLocaleData,
} from "@theme-hope/composables/index";
import { show_runtime } from "../utils/time";
import { useDarkmode } from "@theme-hope/modules/outlook/composables/index";
const dartmode = useDarkmode();
const wormhole = computed(() => {
  return dartmode.status.value == "dark"
    ? "https://img.foreverblog.cn/wormhole_3.gif"
    : "https://img.foreverblog.cn/wormhole_1.gif";
});
onMounted(() => {
  show_runtime();
});
const frontmatter = usePageFrontmatter();
const themeLocale = useThemeLocaleData();
const author = usePageAuthor();
const enable = computed(() => {
  const { copyright, footer } = frontmatter.value;
  return (
    footer !== false &&
    Boolean(copyright || footer || themeLocale.value.displayFooter)
  );
});
const content = computed(() => {
  const { footer } = frontmatter.value;
  return footer === false
    ? false
    : isString(footer)
    ? footer
    : themeLocale.value.footer || "";
});
const copyright = computed(() =>
  "copyright" in frontmatter.value
    ? frontmatter.value["copyright"]
    : "copyright" in themeLocale.value
    ? themeLocale.value.copyright
    : author.value.length
    ? `Copyright © 2024-${new Date().getFullYear()} ${author.value[0].name}`
    : false
);
</script>

<style lang="scss">
// .footer-wrapper {
  // margin-top: 50px;
  // background-color: var(--color-transition);
// }

.footer-wrapper:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

[data-theme="light"] .footer-wrapper:before {
  background: #000;
  opacity: 0.3;
}

[data-theme="dark"] .footer-wrapper:before {
  background: #000;
  opacity: 0.7;
}

.footer-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0rem;

  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-inline-start: calc(var(--sidebar-space) + 2rem);
  padding-inline-end: 2rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: bottom;
  color: #fff;
  text-align: center;

  transition: border-top-color var(--color-transition),
    background var(--color-transition), padding var(--transform-transition);

  @media (max-width: hope-config.$tablet) {
    z-index: 50;
    padding-inline-start: 2rem;
  }

  @media (min-width: hope-config.$pad) {
    z-index: 50;
    padding-inline-start: 2rem;
  }

  @media print {
    margin: 0 !important;
    padding: 0 !important;
  }

  @media (max-width: hope-config.$mobile) {
    // display: block;
    min-height: 136px;
  }

  .footer-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    z-index: 1;

    .footer {
      margin: 0.5rem 1rem;
      font-size: 14px;

      @media print {
        display: none;
      }
    }

    .copyright {
      margin: 6px 0;
      font-size: 13px;
    }
  }

  .footer-link {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    z-index: 1;

    a {
      margin: 0.5rem;
    }
  }

  .no-sidebar &,
  .sidebar-collapsed & {
    padding-inline-start: 2rem;
  }

  .busuanzi {
    font-size: 14px;
    z-index: 1;
  }

  #runtime_span {
    font-size: 14px;
    z-index: 1;
  }
}

.page:not(.not-found) + .footer-wrapper {
  margin-top: -2rem;
}
</style>
