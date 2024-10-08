<template>
  <div id="article-list" class="vp-article-list">
    <!-- <h3>{{hitokotoContent}}</h3> -->
     <img class="news-top-img" src="/assets/background/1.png" alt="news-top" />
    <p class="sub-title" :data-item-count="String(items.length)">
      共{{ items.length }}条说说~ (｡♥‿♥｡)
    </p>
    <figure>
    </figure>
    <template v-if="currentArticles.length">
      <template v-for="({ info, path }, index) in currentArticles">
        <DropTransition :appear="true" :delay="index * 0.04">
          <NewsItem :info="info" :path="path" :key="path" />
        </DropTransition>
      </template>
      <Pagination
        :current="currentPage"
        :perPage="articlePerPage"
        :total="items.length"
        @update-current-page="updatePage"
      />
    </template>
    <EmptyIcon v-else />
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { EmptyIcon } from "@theme-hope/modules/blog/components/icons/index";
import { useBlogOptions } from "@theme-hope/modules/blog/composables/index";
import { DropTransition } from "@theme-hope/components/transitions/DropTransition";
import Pagination from "@theme-hope/modules/blog/components/Pagination";
import NewsItem from "./NewsItem.vue";

declare const SUPPORT_PAGEVIEW: boolean;


const props = defineProps<{
  items: any[];
}>();
const route = useRoute();
const router = useRouter();
const blogOptions = useBlogOptions();
const currentPage = ref(1);
const articlePerPage = computed(() => blogOptions.value.articlePerPage || 10);
const currentArticles = computed(() =>
  props.items.slice(
    (currentPage.value - 1) * articlePerPage.value,
    currentPage.value * articlePerPage.value
  )
);
const updatePage = (page: number) => {
  currentPage.value = page;
  const query = { ...route.query };
  if (query["page"] === page.toString() || (page === 1 && !query["page"]))
    return;
  if (page === 1) delete query["page"];
  else query["page"] = page.toString();
  void router.push({ path: route.path, query });
};

</script>
<style lang="scss" scoped>
h3 {
  font-family: PRshouxie;
  @media (max-width: hope-config.$pad) {
    font-size: 1.8rem;
  }
  background: linear-gradient(
    120deg,
    var(--theme-color-light),
    var(--theme-color) 30%,
    #50e3eb 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 1.5;
  -webkit-text-fill-color: transparent;
}
.sub-title {
  font-family: ZWZT;
  font-size: 1.5rem;
  @media (max-width: hope-config.$pad) {
    font-size: 1.0rem;
  }
  font-weight: bold;
  text-align: right;
}
.sub-title::before {
  content: "共" attr(data-item-count) "条碎碎念~ (｡♥‿♥｡)";
  position: absolute;
  color: #353434;
  transform: translate(-20px, 12px) scaleY(0.5) skew(50deg);
  z-index: -1;
  filter: blur(3px);
  -webkit-mask-image: linear-gradient(transprent, #6c6868);
  mask-image: linear-gradient(transprent, #6c6868);
}
figure {
  position: relative;
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 1rem auto;
  text-align: center;
  transition: transform var(--vp-tt);
}
.news-top-img {
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  object-fit: cover;
}
.news-top-img:hover {
  box-shadow: 2px 2px 10px 0 var(--card-shadow);
}
</style>
