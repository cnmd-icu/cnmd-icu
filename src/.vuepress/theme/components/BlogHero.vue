<!-- .vuepress/components/BlogHero.vue -->
<script setup lang="ts">
import BlogHero from "vuepress-theme-hope/blog/components/BlogHero.js";
import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js";
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";
</script>

<template>
  <BlogHero>
    <!-- <template #bg>
      <video autoplay loop muted playsinline class="hero-background">
        <source src="https://wisdomhallsup.oss-cn-beijing.aliyuncs.com/798.mp4" type="video/mp4" />
      </video>
    </template> -->
    <template #info="info">
      <HitokotoBlogHero 
        :text="info.text || 'Hello World!'" 
        :tagline="info.tagline" 
        :image="info.image|| ''"
        :imageDark="info.imageDark || ''"
        :alt="info.alt" 
        :imageStyle="info.imageStyle" 
        :isFullScreen="info.isFullScreen" 
      />
    </template>
  </BlogHero>
</template>

<style scoped lang="scss">
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
</style>