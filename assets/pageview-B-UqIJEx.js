function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{M as t}from"./app-CpKAKiQD.js";var o={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://waline.okill.cn/",reaction:!0,requiredMeta:["nick"],wordLimit:300,emoji:["https://unpkg.com/@waline/emojis@1.1.0/tieba","https://unpkg.com/@waline/emojis@1.1.0/weibo","https://emoji.shojo.cn/bili/webp/tv_小电视_动图","https://unpkg.com/@waline/emojis@1.2.0/tw-emoji","https://emoji.shojo.cn/bili/webp/2233娘","https://emoji.shojo.cn/bili/webp/装扮小姐姐梦幻冬季","https://emoji.shojo.cn/bili/webp/装扮小姐姐·秋日午后","https://emoji.shojo.cn/bili/webp/星尘","https://emoji.shojo.cn/bili/webp/池年"]};const n=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-CpKAKiQD.js").then(i=>i.Y),__vite__mapDeps([]));return e({serverURL:o.serverURL})}catch{console.error("@waline/client is not installed!")}};export{n as updatePageview};
