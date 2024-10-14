import{Q as b,h,R as f,z as _,v as y,i as w,S as x,l as B,U as e,T as D,V as k,_ as E,c as C,b as d,e as F,o as T}from"./app-BrvR2SIQ.js";const a=b("bing-image",{index:0,data:[]}),A=h({name:"BingHeroBackground",setup(){const l=f(),n=_(),o=y(!1),s=w(()=>{const t=a.value.data[a.value.index],u=l.value.toLowerCase().split("-").shift();if(t){const{url:i,wallpaper:c,downloadable:p,locales:r}=t;return{url:i,wallpaper:c,downloadable:p,...r[u]??r.en}}return null}),g=()=>fetch("https://bing-wallpaper.vuejs.press/api/wallpaper").then(t=>t.json()),m=()=>{a.value.index-=1},v=()=>{a.value.index+=1};return x(n,()=>{o.value=!1}),B(()=>{g().then(t=>{a.value.data=t})}),()=>{const{title:t,headline:u,url:i,backstage:c,quickFact:p,copyright:r}=s.value??{};return e(k,()=>i?[e("div",{class:"vp-blog-mask",style:{background:`url(${i}) center/cover no-repeat`}}),e("div",{class:"bing-switch",onClick:()=>{o.value=!0}},[e(D,{name:"fade"},()=>o.value?e("div",{class:"bing-info",ref:n},[e("a",{href:c,target:"_blank",class:"bing-info-header"},u),e("hr"),e("div",{class:"bing-info-body"},p),e("div",{class:"bing-info-copyright"},r)]):null),e("div",{class:"bing-location"},[e("span",{class:"bing-location-icon"}),t]),e("button",{class:"bing-switch-prev",title:"prev image",type:"button",disabled:a.value.index===0,onClick:()=>m()}),e("button",{class:"bing-switch-next",title:"next image",type:"button",disabled:a.value.index===a.value.data.length-1,onClick:()=>v()})])]:null)}}}),q=h({__name:"赏析.html",setup(l,{expose:n}){n();const o={get BingHeroBackground(){return A}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),S={style:{width:"100%",height:"500px",position:"relative","border-radius":"10px",overflow:"hidden"}};function Z(l,n,o,s,g,m){return T(),C("div",null,[d("div",S,[F(s.BingHeroBackground)]),n[0]||(n[0]=d("blockquote",null,[d("p",null,"人生的意义在于不断地探索，不断地学习，不断地进步，不断地创新，不断地超越自己。——赵本山")],-1))])}const P=E(q,[["render",Z],["__file","赏析.html.vue"]]),j=JSON.parse('{"path":"/private/%E8%B5%8F%E6%9E%90.html","title":"赏析","lang":"zh-CN","frontmatter":{"title":"赏析","date":"2017-01-16T00:00:00.000Z","icon":"alias","footer":false,"tag":["生活"],"description":"人生的意义在于不断地探索，不断地学习，不断地进步，不断地创新，不断地超越自己。——赵本山","head":[["meta",{"property":"og:url","content":"https://www.cnmd.icu/private/%E8%B5%8F%E6%9E%90.html"}],["meta",{"property":"og:site_name","content":"氚花盏-三个三"}],["meta",{"property":"og:title","content":"赏析"}],["meta",{"property":"og:description","content":"人生的意义在于不断地探索，不断地学习，不断地进步，不断地创新，不断地超越自己。——赵本山"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-14T05:13:17.000Z"}],["meta",{"property":"article:tag","content":"生活"}],["meta",{"property":"article:published_time","content":"2017-01-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-14T05:13:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"赏析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-01-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-14T05:13:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三个三\\",\\"url\\":\\"https://www.cnmd.icu\\",\\"email\\":\\"mailto:2029364173@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1728882797000,"updatedTime":1728882797000,"contributors":[{"name":"cnmd-icu","email":"2029364173@qq.com","commits":1}]},"readingTime":{"minutes":0.26,"words":77},"filePathRelative":"private/赏析.md","localizedDate":"2017年1月16日","excerpt":"<div style=\\"width: 100%; height: 500px;position: relative;border-radius: 10px;overflow: hidden;\\">\\n  </div>\\n<blockquote>\\n<p>人生的意义在于不断地探索，不断地学习，不断地进步，不断地创新，不断地超越自己。——赵本山</p>\\n</blockquote>\\n","autoDesc":true}');export{P as comp,j as data};
