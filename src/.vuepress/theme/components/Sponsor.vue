<template>
  <div class="sponsor">
    <div id="drinks-box">
      <div id="drinks-box-s" class="drinks-button left-100">
        <div id="drinks-icons" class="left-100 tr3">
          <div id="coffee-donate" class="icon-donate">
            <span class="icon-hk-flutter"></span>
            赞助
          </div>
        </div>
        <div id="drinks-button-box" class="tr3 left-100">
          <div id="drinks-button-bg" class="left-100"></div>
          <ul id="donate-buttons" class="list tr3">
            <li id="qqpay_donate" class="donate-button">QQPay</li>
            <li id="alipay_donate" class="donate-button1">AliPay</li>
            <li id="wechat_donate" class="donate-button2">WeChat</li>
          </ul>
        </div>
        <div id="drinks-qrcodes" class="left-100 tr3" ref="drinksQrcodes">
          <div id="drinks-qrcode"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {  reactive, onMounted } from "vue";
import { useWindowSize } from "@theme-hope/composables/index";
const qrCodes = reactive({
  qqpay_donate: "/assets/pay/QQPayQR.jpg",
  alipay_donate: "/assets/pay/AliPayQR.jpg",
  alipay_donate_link: "https://qr.alipay.com/fkx19256tvxnepchwenvmed",
  wechat_donate: "/assets/pay/WeChatPayQR.jpg",
}) as Record<string, string>;
const { isMobile } = useWindowSize();

onMounted(() => {
  const drink_box_s = document.querySelector("#drinks-box-s") as HTMLElement;
  const icon_donate = document.querySelector(".icon-donate") as HTMLElement;
  const donate_button = document.querySelector(".donate-button") as HTMLElement;
  const donate_button1 = document.querySelector(".donate-button1") as HTMLElement;
  const donate_button2 = document.querySelector(".donate-button2") as HTMLElement;
  const donate_buttons = document.querySelector("#drinks-button-box") as HTMLElement;
  const donate_button_bg = document.querySelector("#drinks-button-bg") as HTMLElement;
  const drinks_qrcodes = document.querySelector("#drinks-qrcodes") as HTMLElement;
  const drinks_qrcode = document.querySelector("#drinks-qrcode") as HTMLElement;

  const drinks_an: Array<() => void> = [];
  // 弹出菜单
  drinks_an[0] = function () {
    drink_box_s.classList.remove("donate-animation-2", "donate-animation-3");
    drink_box_s.classList.add("donate-animation-1");
    donate_buttons.classList.add("showBox");
    setTimeout(() => {
      donate_buttons.classList.remove("showBox");
    }, 300);
  };
  // 关闭菜单
  drinks_an[1] = function () {
    drink_box_s.classList.remove("donate-animation-1", "donate-animation-3");
    drink_box_s.classList.add("donate-animation-2");
    setTimeout(() => {
      drink_box_s.classList.remove("donate-animation-2");
    }, 300);
  };
  // 展示二维码
  drinks_an[2] = function () {
    drink_box_s.classList.remove("donate-animation-2", "donate-animation-1");
    drink_box_s.classList.add("donate-animation-3");
    drinks_qrcodes.classList.add("showBox");
    setTimeout(() => {
      drinks_qrcodes.classList.remove("showBox");
    }, 300);
  };
  // 关闭二维码
  drinks_an[3] = function () {
    drink_box_s.classList.remove("donate-animation-3", "donate-animation-2");
    drink_box_s.classList.add("donate-animation-4");
    setTimeout(() => {
      drink_box_s.classList.remove("donate-animation-4");
      drink_box_s.classList.add("donate-animation-1");
    }, 300);
  };

  icon_donate.addEventListener("click", drinks_an[0]);
  donate_button_bg.addEventListener("click", drinks_an[1]);
  donate_button.addEventListener("click", function (event: MouseEvent) {
    const thisID = (event.target as HTMLElement).getAttribute("id") as string;
    if (isMobile.value && thisID === "alipay_donate") {
      window.open(qrCodes["alipay_donate_link"]);
    } else {
      drinks_qrcode.style.backgroundImage = `url(${qrCodes[thisID]})`;
      drinks_an[2]();
    }
  });
  donate_button1.addEventListener("click", function (event: MouseEvent) {
    const thisID = (event.target as HTMLElement).getAttribute("id") as string;
    if (isMobile.value && thisID === "alipay_donate") {
      window.open(qrCodes["alipay_donate_link"]);
    } else {
      drinks_qrcode.style.backgroundImage = `url(${qrCodes[thisID]})`;
      drinks_an[2]();
    }
  });
  donate_button2.addEventListener("click", function (event: MouseEvent) {
    const thisID = (event.target as HTMLElement).getAttribute("id") as string;
    if (isMobile.value && thisID === "alipay_donate") {
      window.open(qrCodes["alipay_donate_link"]);
    } else {
      drinks_qrcode.style.backgroundImage = `url(${qrCodes[thisID]})`;
      drinks_an[2]();
    }
  });

  drinks_qrcode.addEventListener("click", drinks_an[3]);
});
</script>
<style lang="scss" scoped>
.icon-hk-flutter {
  display: inline-block;
  width: 1em;
  height: 1em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%23f44336' d='M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9C7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12'/%3E%3C/svg%3E");
}
img {
  border-width: 0px;
}
a {
  color: #000;
  text-decoration: none;
  outline: none;
  border: none;
}
.list,
.list li,
.list-left li {
  list-style: none;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}
.pos-f {
  position: fixed;
}
.left-100 {
  width: 100%;
  height: 100%;
  float: left;
}
.blur {
  -webkit-filter: blur(3px);
  filter: blur(3px);
}
.tr3,
.list li {
  transition: all 0.3s;
}
.hidden {
  display: none;
}
.click-cursor,
.icon-donate,
.list li {
  cursor: pointer;
}
#drinks-box .opacity-show {
  opacity: 1;
}
.sponsor {
  width: 100%;
  height: 100px;
  text-align: center;
  position: relative;
  //   background-color: #fff;
}
#drinks-box {
  width: 320px;
  height: 100px;
  text-align: center;
  left: calc(50% - 160px);
  top: calc(50% - 50px);
  position: absolute;
  // background-color: #62cdff;
}
#drinks-icons {
  //   background: no-repeat center center url(images/text.png);
}
.drinks-button > div {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s;
  transform-style: preserve-3d;
  transform-origin: center center;
}
.icon-donate {
  width: 80px;
  height: 36px;
  position: absolute;
  left: calc(50% - 32px);
  top: calc(50% - 18px);
  border: solid 1.5px var(--theme-color);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-donate img {
  max-width: 64px;
  max-height: 64px;
}
#drinks-button-box {
  display: none;
  opacity: 0;
  transform: scale(1.3, 1.3);
}
#drinks-button-bg {
  position: absolute;
  top: 0px;
  left: 0;
  height: 100px;
  opacity: 0;
}
#donate-buttons {
  position: absolute;
  overflow: hidden;
  top: calc(50% - 14px);
  left: 50px;
  height: 28px;
  border-radius: 6px;
  background-color: #62cdff;
  box-shadow: 0 10px 20px 1px rgba(103, 207, 248, 0.5);
}
#donate-buttons a,
#github-box a {
  display: block;
}
li[id$="_donate"] {
  position: relative;
  float: left;
  width: 70px;
  height: 28px;
  line-height: 600px;
  overflow: hidden;
  cursor: pointer;
  background: no-repeat center center;
  background-size: 45px;
  float: left;
  text-align: center;
}
li[id$="_donate"]::after {
  content: "";
  position: absolute;
  top: -5px;
  left: calc(50% - 5px);
  height: 0;
  width: 0;
  opacity: 0;
  border: 5px solid #fff;
  border-color: #fff transparent transparent transparent;
  transition: all 0.3s;
}
li[id$="_donate"]:hover::after {
  opacity: 1;
  top: 0px;
}
#github-box {
  width: 32px;
  height: 32px;
  position: absolute;
  top: calc(50% - 16px);
  background: no-repeat center center url(/assets/images/github.svg);
  background-size: contain;
  right: 70px;
  line-height: 600px;
  overflow: hidden;
  transform: rotatez(20deg);
  opacity: 0;
  transition: all 0.3s ease-out;
  @media (max-width: hope-config.$tablet) {
    top: calc(50% - 40px);
    right: 70px;
    transform: rotatez(5deg);
    opacity: 0.8;
  }
}
#drinks-button-box:hover #github-box {
  top: calc(50% - 40px);
  right: 70px;
  transform: rotatez(5deg);
  opacity: 0.8;
}
#qqpay_donate {
  background-image: url(data:image/png;base64,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);

}
#btc_donate {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMzAzLjYgMjc0LjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEzMDMuNiAyNzQuNjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9DQo8L3N0eWxlPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEzNi42LDkzLjZsLTcuNSwzMC4xYzguNSwyLjEsMzQuNywxMC44LDM5LTYuMkMxNzIuNSw5OS43LDE0NS4xLDk1LjcsMTM2LjYsOTMuNnoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTcwLjUsNC4xQzk3LTE0LjIsMjIuNSwzMC41LDQuMiwxMDQuMWMtMTguMyw3My41LDI2LjQsMTQ4LDk5LjksMTY2LjNjNzMuNiwxOC4zLDE0OC0yNi40LDE2Ni40LTk5LjkNCgkJQzI4OC44LDk2LjksMjQ0LDIyLjQsMTcwLjUsNC4xeiBNMTk3LjgsMTE3LjdjLTIsMTMuNC05LjQsMTkuOC0xOS4yLDIyLjFjMTMuNSw3LDIwLjQsMTcuOCwxMy44LDM2LjUNCgkJYy04LjEsMjMuMi0yNy40LDI1LjItNTMuMSwyMC4zbC02LjIsMjVsLTE1LjEtMy44bDYuMS0yNC42Yy0zLjktMS03LjktMi0xMi0zLjFsLTYuMiwyNC44bC0xNS0zLjhsNi4yLTI1DQoJCWMtMy41LTAuOS03LjEtMS45LTEwLjctMi44bC0xOS42LTQuOWw3LjUtMTcuMmMwLDAsMTEuMSwyLjksMTAuOSwyLjdjNC4zLDEuMSw2LjItMS43LDYuOS0zLjZsOS45LTM5LjVjMC42LDAuMSwxLjEsMC4zLDEuNiwwLjQNCgkJYy0wLjYtMC4yLTEuMS0wLjQtMS42LTAuNWw3LTI4LjJjMC4yLTMuMi0wLjktNy4yLTctOC44YzAuMi0wLjItMTAuOS0yLjctMTAuOS0yLjdsNC0xNi4xbDIwLjgsNS4ydjAuMWMzLjEsMC44LDYuMywxLjUsOS42LDIuMw0KCQlsNi4yLTI0LjdsMTUuMSwzLjhsLTYsMjQuM2M0LDAuOSw4LjEsMS45LDEyLjEsMi44bDYtMjQuMWwxNS4xLDMuOEwxNjcuNiw4M0MxODYuNiw4OS42LDIwMC41LDk5LjQsMTk3LjgsMTE3Ljd6Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyOTQuMiwxMDcuMmMtMTAuMy0xNS43LTI4LjktMjMuNS01NS45LTIzLjVjLTkuMiwwLTE3LjUsMC40LTI0LjcsMS4yYy03LjMsMC44LTEzLjksMS44LTE5LjcsMy4xDQoJCWMtNS45LDEuMi0xMS4yLDIuNi0xNS45LDQuMWMtNC43LDEuNS05LjEsMi45LTEyLjksNGwtNDEuOSwxNzMuNmg1MS41bDMzLjYtMTQwLjdjNi45LTEuNCwxMy43LTIuMSwyMC40LTIuMWM2LjksMCwxMiwxLjMsMTUuNCw0DQoJCWMzLjMsMi43LDUuNSw2LjIsNi40LDEwLjRjMSw0LjMsMSw5LjIsMC4yLDE0LjlzLTEuOSwxMS41LTMuMywxNy41bC0yMi44LDk2LjFoNTEuNWwyMy41LTk4LjINCgkJQzEzMDYuMywxNDQuNCwxMzA0LjUsMTIyLjksMTI5NC4yLDEwNy4yeiIvPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTA3Ni42LDg3LjkgMTAzMy40LDI2OS44IDEwODQuNiwyNjkuOCAxMTI4LjIsODcuOSAJIi8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEwOTAuMiw1OS4zYzUuNyw0LjMsMTIuMiw2LjQsMTkuMyw2LjRjNC45LDAsOS40LTAuOSwxMy43LTIuOGM0LjMtMS44LDgtNC4zLDExLjItNy40DQoJCWMzLjItMy4xLDUuOC02LjgsNy44LTExLjFjMS45LTQuMywzLTguOCwzLTEzLjdjMC04LjctMi45LTE1LjMtOC43LTE5LjVjLTUuOC00LjMtMTIuMi02LjQtMTkuNC02LjRjLTQuOCwwLTkuNCwwLjktMTMuNiwyLjgNCgkJcy04LDQuMy0xMS4yLDcuNHMtNS44LDYuOC03LjgsMTEuMXMtMi45LDguOC0yLjksMTMuNkMxMDgxLjUsNDguNiwxMDg0LjQsNTUuMSwxMDkwLjIsNTkuM3oiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTIwLjYsNTkuM2M1LjcsNC4zLDEyLjIsNi40LDE5LjQsNi40YzQuOCwwLDkuNC0wLjksMTMuNy0yLjhjNC4yLTEuOCw4LTQuMywxMS4yLTcuNA0KCQljMy4yLTMuMSw1LjgtNi44LDcuOC0xMS4xczIuOS04LjgsMi45LTEzLjdjMC04LjctMi45LTE1LjMtOC42LTE5LjVjLTUuOC00LjMtMTIuMi02LjQtMTkuMy02LjRjLTQuOSwwLTkuNCwwLjktMTMuNywyLjgNCgkJcy04LDQuMy0xMS4yLDcuNHMtNS44LDYuOC03LjgsMTEuMWMtMiw0LjMtMyw4LjktMywxMy43QzUxMiw0OC42LDUxNC45LDU1LjEsNTIwLjYsNTkuM3oiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTI1LjMsMTM4LjhMMTE3LDE3MmMxMC4yLDIuNSw0MS43LDEyLjcsNDYuNC02LjFDMTY4LjIsMTQ2LjQsMTM1LjUsMTQxLjQsMTI1LjMsMTM4Ljh6Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTgwOC4xLDEyNi42YzcuMiwwLDEzLjIsMC43LDE4LjIsMi4zYzUsMS41LDkuNywzLjEsMTQuNCw1bDE3LjctNDAuMWMtNi43LTMuMi0xNC4xLTUuOC0yMi4zLTcuOA0KCQlzLTE3LjQtMy0yNy44LTNjLTE2LjYsMC0zMS43LDMtNDUuMSw5Yy0xMy41LDYtMjUsMTQuMi0zNC40LDI0LjVjLTkuNSwxMC40LTE2LjcsMjIuNS0yMS44LDM2LjNjLTUuMSwxMy44LTcuNiwyOC42LTcuNiw0NC4zDQoJCWMwLDEwLjQsMS41LDIwLjMsNC4zLDI5LjdjMi45LDkuNSw3LjUsMTcuNywxNCwyNC43YzYuNSw3LDE0LjYsMTIuNiwyNC41LDE2LjhjOS45LDQuMSwyMiw2LjIsMzYuMyw2LjJjMTAuOCwwLDIwLjItMSwyOC0yLjkNCgkJYzcuOC0yLDE1LTQuMywyMS40LTYuOGwtMy44LTQxLjFjLTQuOSwyLjEtMTAuNCwzLjgtMTYuNiw1LjJjLTYuMiwxLjQtMTIuNywyLjEtMTkuNCwyLjFjLTEzLjYsMC0yMi45LTMuNi0yOC0xMC45DQoJCWMtNS4xLTcuMy03LjYtMTYuOC03LjYtMjguNWMwLTE5LjgsNS0zNS42LDE1LjEtNDcuNEM3NzcuNSwxMzIuNSw3OTEsMTI2LjYsODA4LjEsMTI2LjZ6Ii8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEwMTEuMSwxMDQuMWMtNS45LTYuNy0xMy40LTExLjktMjIuNS0xNS42cy0xOS43LTUuNi0zMS43LTUuNmMtMTYuMywwLTMwLjksMy41LTQzLjUsMTAuNQ0KCQljLTEyLjcsNy4xLTIzLjQsMTYuMS0zMi4xLDI3LjJjLTguOCwxMS4xLTE1LjQsMjMuNS0xOS45LDM3LjNzLTYuNywyNy43LTYuNyw0MS41YzAsMTEsMS41LDIxLjEsNC41LDMwLjJjMyw5LjEsNy40LDE3LDEzLjMsMjMuNw0KCQljNS45LDYuNywxMy4zLDExLjksMjIuMywxNS42YzksMy43LDE5LjYsNS41LDMxLjgsNS41YzE2LjgsMCwzMS43LTMuNSw0NC40LTEwLjZjMTIuOC03LDIzLjUtMTYuMSwzMi0yNy4xDQoJCWM4LjUtMTEuMSwxNS0yMy41LDE5LjQtMzcuM2M0LjQtMTMuOSw2LjYtMjcuNyw2LjYtNDEuNWMwLTExLjEtMS41LTIxLjItNC41LTMwLjJDMTAyMS40LDExOC43LDEwMTYuOSwxMTAuOCwxMDExLjEsMTA0LjF6DQoJCSBNOTc0LjgsMTg1LjljLTIsOC00LjksMTUuMy04LjgsMjJjLTMuOSw2LjctOC44LDEyLjItMTQuNSwxNi42Yy01LjgsNC40LTEyLjQsNi42LTIwLjEsNi42Yy05LjcsMC0xNi40LTMuMi0yMC4xLTkuNw0KCQljLTMuNy02LjUtNS41LTE1LjUtNS41LTI3YzAtNy4yLDEtMTQuNywyLjktMjIuNmMyLTcuOSw0LjktMTUuMyw4LjgtMjJjMy45LTYuNyw4LjctMTIuMiwxNC41LTE2LjZjNS43LTQuNCwxMi40LTYuNiwyMC02LjYNCgkJYzkuNywwLDE2LjQsMy4yLDIwLjEsOS43YzMuNyw2LjUsNS42LDE1LjUsNS42LDI3Qzk3Ny43LDE3MC40LDk3Ni43LDE3OCw5NzQuOCwxODUuOXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjE4LjgsMTkzLjdsMTUuMi02My42aDU3bDEwLjQtNDIuMkg2NDRsMTMuMi01My42bC01My42LDguM2wtMzMuOSwxNDMuMmMtMi44LDExLjgtNC40LDIyLjktNC44LDMzLjUNCgkJYy0wLjUsMTAuNiwxLjIsMjAsNC44LDI4LjJjMy43LDguMiw5LjksMTQuNywxOC43LDE5LjRjOC44LDQuNywyMS4xLDcuMSwzNyw3LjFjMTEuMSwwLDIwLjYtMC45LDI4LjctMi44YzguMS0xLjgsMTUuNi00LDIyLjUtNi42DQoJCWwtMy44LTM5LjRjLTUuMywxLjktMTAuNSwzLjMtMTUuNyw0LjNzLTEwLjYsMS42LTE2LjEsMS42Yy02LjcsMC0xMS44LTAuOS0xNS40LTIuOGMtMy42LTEuOC02LjEtNC40LTcuNC03LjgNCgkJYy0xLjQtMy4zLTItNy4zLTEuNy0xMS45QzYxNi42LDIwMy45LDYxNy40LDE5OSw2MTguOCwxOTMuN3oiLz4NCgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjQ2My45LDI2OS44IDUxNS4xLDI2OS44IDU1OC43LDg3LjkgNTA3LjEsODcuOSAJIi8+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ0NCwxMDUuOGMtNS40LTYuNy0xMi0xMi0yMC4xLTE1LjljLTgtMy45LTE3LjYtNS45LTI4LjctNS45Yy01LjMsMC0xMC4yLDAuNi0xNC45LDEuNw0KCQljLTQuNiwxLjItOS4yLDIuOC0xMy44LDQuOGwyMS40LTg5LjJsLTUzLjYsOC4zTDI3NC41LDI2MWM2LjcsMy4yLDEzLjgsNS44LDIxLjMsNy42YzcuNSwxLjksMTQuNiwzLjIsMjEuMyw0LjINCgkJYzYuNywwLjksMTIuNiwxLjQsMTcuOCwxLjVjNS4yLDAuMSw4LjgsMC4yLDEwLjksMC4yYzE2LjEsMCwzMS4xLTMuMSw0NC45LTkuMnMyNS44LTE0LjQsMzYtMjQuOXMxOC4yLTIyLjgsMjQtMzcNCgkJYzUuOS0xNC4yLDguOC0yOS4yLDguOC00NS4xYzAtMTAuNC0xLjMtMjAtMy44LTI5QzQ1My4yLDEyMC40LDQ0OS4zLDExMi41LDQ0NCwxMDUuOHogTTQwMy45LDE4OC4xYy0zLDguMy03LjEsMTUuNy0xMi4zLDIyLjMNCgkJYy01LjIsNi42LTExLjQsMTEuOC0xOC41LDE1LjdzLTE0LjcsNS45LTIyLjgsNS45Yy0yLjUsMC00LjYsMC02LjIsMHMtMy0wLjEtNC4yLTAuMmMtMS4xLTAuMS0yLjItMC4zLTMuMy0wLjUNCgkJYy0xLTAuMi0yLjMtMC40LTMuNi0wLjdsMjIuOC05NC43YzQuMi0zLjcsOC44LTYuMSwxNC03LjNjNS4yLTEuMSw5LjQtMS43LDEyLjYtMS43YzkuOSwwLDE2LjcsMy4xLDIwLjQsOS4zDQoJCWMzLjcsNi4yLDUuNSwxNC45LDUuNSwyNS45QzQwOC40LDE3MS4yLDQwNi45LDE3OS44LDQwMy45LDE4OC4xeiIvPg0KPC9nPg0KPC9zdmc+DQo=);
}
#alipay_donate {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ0OC41IDE0NS41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NDguNSAxNDUuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQ0KCS5zdDF7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30NCjwvc3R5bGU+DQo8ZyBpZD0i5Zu+5bGCXzIiPg0KPC9nPg0KPGcgaWQ9IuWbvuWxgl8xIj4NCgk8ZyBpZD0i5qSt5ZyGXzJfMV8iIGNsYXNzPSJzdDAiPg0KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTA1LjYsMEg4MS44djE4LjdoLTQ4djkuOGg0OHYxOEg0OC4xdjExLjFoNjcuNGMwLDAsMCwxNS45LTIwLjMsMzcuNlM2Ny40LDEyMC4yLDU3LjgsMTIzcy0yNiwyLjQtMzEuNS0xLjUNCgkJCXMtMTEuOC04LjktMTEuMy0xOFMyNi45LDg0LjEsMzMuOSw4M2MwLDAtMjAtMi4yLTI0LjUsMTguMWMtMy41LDE1LjYsNi42LDIzLjMsMTIuNCwyNy4yczE4LjIsOC41LDI2LjMsOXMyNS44LTAuNiw0Mi43LTEyLjgNCgkJCWMxNi44LTEyLjIsMzcuMy0zNi43LDQzLjUtNTEuOHM4LjktMjEuMyw5LjgtMjYuMmgtMzguNHYtMThoNTAuMnYtOS44aC01MC4yVjAiLz4NCgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE4NiwwYzAsMC0yLjUsMjEuNS0zMy44LDQ1bDMuNiw1LjNjMCwwLDEzLjktNS41LDE3LjQtOC4zdjgwLjNIMTk4VjI1LjVjMCwwLDEyLTEyLjUsMTItMjUuNQ0KCQkJQzIxMCwwLDE4NiwwLDE4NiwweiIvPg0KCQk8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjI0NiwwIDI0NiwyNyAyMDIuNSwyNyAyMDIuNSwzNi4xIDI0NiwzNi4xIDI0NiwxMjEuNSAyNzAuMSwxMjEuNSAyNzAuMSwzNi4xIDI4MS4zLDM2LjEgMjgxLjMsMjcgDQoJCQkyNzAuMSwyNyAyNzAuMSwwIAkJIi8+DQoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNjQuNSwwdjExLjJINDExdjcuNWMwLDIyLjEtMTQuMiwyNC44LTE0LjIsMjQuOGgtMzIuM1Y2M2gzMi4zdjkuOGgtMzIuM3Y0NS44aC0yNC43VjcyLjhoLTM0LjZWNjNoMzQuNg0KCQkJVjQzLjVoLTQ5LjVWOC4zaDIzLjF2M2gyNi40VjBIMzY0LjV6IE0zMTMuMywyMS41djEzaDc3LjR2LTEzSDMxMy4zeiIvPg0KCTwvZz4NCgk8ZyBpZD0i5qSt5ZyGXzFfMV8iIGNsYXNzPSJzdDAiPg0KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDQuMSwxMzYuN2MwLDAtMjIuNS0zLjctMzIuMS0yMC41Yy0zLjctNi40LTQtMTkuMyw2LTI3LjhjOC40LTcuMSwxOS41LTYuNiwzMy44LTNzMjQuNCw4LjEsNDIuOCwxNy4zDQoJCQljMTguNSw5LjMsNDQuOSwyMi41LDc4LjcsMjkuNmMzMy43LDcuMSw1Mi4zLDkuNCw3Mi44LDEwLjljMzUuNCwyLjYsMTQ5LjQtMi40LDE2NS02bDM3LjUtMzljMCwwLTExMi45LDE3LjQtMTgzLjgsMTgNCgkJCWMtNzAuOCwwLjYtNzguOC0zLjctOTUuMy02LjhTMTA5LjYsOTIuMyw5Ni44LDg3Yy02LjMtMi42LTQxLjctMTYuMy02My0xNC4zUzEuMiw4NCwwLjgsOTguM1M1LjgsMTMyLjIsNDQuMSwxMzYuN3oiLz4NCgkJDQoJCQk8cmVjdCB4PSIyMDYuNiIgeT0iNDYuNyIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSAyMS4zNjgzIDE3NC42Mzk3KSIgY2xhc3M9InN0MSIgd2lkdGg9IjI5LjciIGhlaWdodD0iMjkuNyIvPg0KCQkNCgkJCTxyZWN0IHg9IjM3OC40IiB5PSI3OC45IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIDUwLjc0MDMgMzAxLjE0OTEpIiBjbGFzcz0ic3QxIiB3aWR0aD0iMjAuOSIgaGVpZ2h0PSIyMC45Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=);
}
#wechat_donate {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i5Zu+5bGCXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTMxLjIgMTYxLjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzMS4yIDE2MS43OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZGRkZGO30NCjwvc3R5bGU+DQo8Zz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjguNiwwQzMxLjEtMC42LDAsMjcsMCw1OS41YzAsMTguOCw4LjgsMzUsMjUuOSw0N2MwLDAtNi4zLDIwLjctNi4yLDIxLjFjMC4xLDAuNCwxLjUsMS4yLDEuOSwxDQoJCWMwLjQtMC4yLDIyLjYtMTMuNSwyMi42LTEzLjVjMTcsNS44LDI2LjksMy45LDI3LjQsMy45Yy0xLjctNS0yLjgtMTIuNy0xLjUtMjBjNi42LTM4LjEsNDUuNi01MCw2Ny00Ny45DQoJCUMxMzEuMiwyMy40LDEwNS42LDAuNSw2OC42LDB6IE00Mi41LDQ5LjFjLTQuOSwwLTguOS00LTguOS04LjlzNC04LjksOC45LTguOXM4LjksNCw4LjksOC45UzQ3LjQsNDkuMSw0Mi41LDQ5LjF6IE05Ni40LDQ5LjENCgkJYy00LjksMC04LjktNC04LjktOC45czQtOC45LDguOS04LjlzOC45LDQsOC45LDguOVMxMDEuNCw0OS4xLDk2LjQsNDkuMXoiLz4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTkyLDEwNC43YzAtMjcuOC0yNi45LTQ5LjItNTguMS00OS4yYy0zMy4xLDAtNTkuNCwyMS44LTU5LjQsNDkuNmMwLDI3LjksMjUuMSw1MSw1OS41LDUxLjINCgkJYzYuOSwwLDE3LjItMS43LDI0LjItNC42YzAsMCwxNi42LDEwLjEsMTcuNSwxMHMxLjQtMC44LDEuNC0xLjRzLTUuMy0xNi40LTUuMy0xNi40QzE4NiwxMzIuNywxOTIsMTIwLjQsMTkyLDEwNC43eiBNMTEyLjEsOTQuNA0KCQljLTQuNCwwLTcuOS0zLjUtNy45LTcuOXMzLjUtNy45LDcuOS03LjlzNy45LDMuNSw3LjksNy45UzExNi40LDk0LjQsMTEyLjEsOTQuNHogTTE1NC4yLDk0LjRjLTQuNCwwLTcuOS0zLjUtNy45LTcuOQ0KCQlzMy41LTcuOSw3LjktNy45czcuOSwzLjUsNy45LDcuOVMxNTguNiw5NC40LDE1NC4yLDk0LjR6Ii8+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIyNzcuNiw2Ni41IDI2NS43LDExNS41IDI1NS43LDY2LjUgMjQwLjUsNjYuNSAyMzAuNSwxMTUuNSAyMTguNiw2Ni41IDIwMy44LDY2LjUgMjIzLjcsMTM2IA0KCQkJMjM3LjIsMTM2IDI0OCw4Mi44IDI1OC44LDEzNiAyNzIuNCwxMzYgMjkyLjMsNjYuNSAJCSIvPg0KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzI4LjMsODkuOGMtNC4zLTQuNy0xMC4zLTcuMS0xOC4yLTcuMWMtNy40LDAtMTMuMiwyLjUtMTcuNSw3LjNjLTQuMyw0LjktNi40LDExLjUtNi40LDE5LjkNCgkJCWMwLDguNiwyLjIsMTUuMyw2LjUsMjAuM3MxMC4yLDcuNSwxNy42LDcuNWM2LDAsMTEuMS0xLjUsMTUuMy00LjZjNC4yLTMuMSw3LTcuMyw4LjQtMTIuN2gtMTMuNmMtMC45LDEuOS0yLjEsMy40LTMuNiw0LjENCgkJCWMtMS41LDAuOS0zLjQsMS40LTUuOCwxLjRjLTMuNCwwLTUuOS0xLjEtNy43LTMuMWMtMS43LTItMi43LTUuMS0yLjktOS4xaDM0LjJjMC0wLjQsMC4xLTAuOSwwLjEtMS40czAtMS4yLDAtMi4yDQoJCQlDMzM0LjcsMTAxLjMsMzMyLjYsOTQuNSwzMjguMyw4OS44eiBNMzAwLjQsMTA0LjljMC4zLTMuNCwxLjMtNiwzLTcuOWMxLjctMS44LDQtMi43LDctMi43YzMuMiwwLDUuNywwLjksNy40LDIuNw0KCQkJYzEuOCwxLjgsMi43LDQuNCwyLjgsNy45SDMwMC40eiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQwMi43LDExMi4yTDQwMi43LDExMi4yQzQwMi43LDExMi4xLDQwMi43LDExMi4yLDQwMi43LDExMi4yTDQwMi43LDExMi4yeiIvPg0KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzgzLjQsMTIxLjdjLTIuOCwyLjItNi40LDMuMy0xMC43LDMuM2MtNiwwLTEwLjYtMi4xLTEzLjktNi4ycy00LjktMTAtNC45LTE3LjVjMC03LjgsMS42LTEzLjcsNC45LTE3LjgNCgkJCWMzLjItNC4xLDgtNi4xLDE0LjMtNi4xYzQuNSwwLDgsMSwxMC42LDMuMXM0LjIsNS4xLDQuOCw5aDE0LjFjLTAuNS03LjktMy40LTE0LTguNS0xOC4zcy0xMi4xLTYuNS0yMS02LjUNCgkJCWMtMTAuOSwwLTE5LjMsMy4xLTI1LjEsOS40cy04LjcsMTUuNC04LjcsMjcuMmMwLDExLjYsMi45LDIwLjYsOC42LDI3czEzLjcsOS42LDI0LDkuNmM4LjksMCwxNi4yLTIuMywyMS43LTcNCgkJCWM1LjUtNC42LDguNi0xMC44LDkuMS0xOC43aC0xMy45QzM4OCwxMTYuMywzODYuMiwxMTkuNSwzODMuNCwxMjEuN3oiLz4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ0OC41LDg5LjNjLTEuNS0xLjktMy41LTMuNC01LjktNC40Yy0yLjUtMS4xLTUuMi0xLjYtOC4yLTEuNmMtMy4yLDAtNi4xLDAuNi04LjYsMS44DQoJCQljLTIuNSwxLjItNC43LDMtNi42LDUuM1Y2Ni41aC0xMy42djY5LjNoMTMuNnYtMzAuNGMwLTMuMywwLjktNiwyLjgtNy45czQuNS0yLjksNy43LTIuOWMzLDAsNS4yLDAuNyw2LjMsMi40DQoJCQljMS4xLDEuNywxLjcsNS43LDEuNywxMnYyNi44aDEzLjZ2LTMzLjJ2LTAuOWMwLTMuNy0wLjItNi4zLTAuNi04QzQ1MC4zLDkyLjEsNDQ5LjUsOTAuNiw0NDguNSw4OS4zeiIvPg0KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTAwLjcsMTMxLjRjLTAuNS0xLjEtMC43LTIuNy0wLjctNC44Vjk3LjVjMC00LjctMS45LTguMy01LjctMTAuOFM0ODUsODMsNDc3LjgsODMNCgkJCWMtNi42LDAtMTEuNywxLjUtMTUuNCw0LjVzLTUuNiw3LjEtNS42LDEyLjR2MC45aDEyLjhWMTAwYzAtMiwwLjctMy42LDIuMi00LjdzMy42LTEuNyw2LjQtMS43YzMuMSwwLDUuMiwwLjQsNi41LDEuMw0KCQkJczEuOSwyLjQsMS45LDQuNWMwLDIuNi0yLjksNC4yLTguNyw1Yy0yLjMsMC4zLTQuMiwwLjYtNS42LDAuOGMtNi4yLDAuOS0xMC42LDIuNy0xMy4zLDUuMmMtMi43LDIuNi00LDYuMy00LDExLjENCgkJCWMwLDUuMiwxLjMsOS4zLDQsMTIuMWMyLjcsMi44LDYuNSw0LjIsMTEuNSw0LjJjMy43LDAsNy0wLjcsOS44LTIuMXM1LjEtMy40LDYuOC02LjFjMCwxLjIsMC4yLDIuNCwwLjQsMy42YzAuMywxLDAuNiwyLDEuMSwyLjkNCgkJCWgxNC4zdi0yLjNDNTAxLjksMTMzLjIsNTAxLjEsMTMyLjUsNTAwLjcsMTMxLjR6IE00ODYuOSwxMTUuNmMwLDMuNy0xLjEsNi41LTMuMiw4LjZzLTUsMy4xLTguNywzLjFjLTIuMSwwLTMuOC0wLjYtNS0xLjcNCgkJCXMtMS44LTIuNi0xLjgtNC41YzAtMS44LDAuNC0zLjMsMS40LTQuM3MyLjctMS45LDUuMS0yLjZjMC4xLDAsMS42LTAuNCw0LjUtMXM1LjUtMS41LDcuNy0yLjVWMTE1LjZ6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01MzEuMiw5NC40di05LjZoLTcuOXYtMTRoLTEzLjZ2MTRoLTYuOHY5LjZoNi44djI3LjdjMCw1LjgsMSw5LjYsMi45LDExLjZjMiwxLjksNS41LDIuOSwxMC44LDIuOQ0KCQkJYzAuNCwwLDEuNiwwLDMuMy0wLjFjMS43LTAuMSwzLjItMC4yLDQuNS0wLjJsMCwwdi0xMC4yaC0zLjNjLTEuOSwwLTMuMS0wLjItMy43LTAuNmMtMC42LTAuNS0wLjktMS4zLTAuOS0yLjdWOTQuNEw1MzEuMiw5NC40DQoJCQlMNTMxLjIsOTQuNHoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==);
}
#drinks-qrcodes {
  display: none;
}
#drinks-qrcode {
  position: absolute;
  top: calc(50% - 90px);
  left: calc(50% - 90px);
  width: 180px;
  height: 180px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(103, 207, 248, 0.5);
}

/* 动画 */
#drinks-icons,
#drinks-button-box {
  filter: blur(0px);
}
.donate-animation-1 > #drinks-icons,
.donate-animation-4 > #drinks-icons,
.donate-animation-3 > #drinks-button-box {
  transform: scale(0.7, 0.7);
  filter: blur(2px);
  display: block;
  opacity: 1;
}
.donate-animation-1 > #drinks-button-box,
.donate-animation-4 > #drinks-button-box,
.donate-animation-3 > #drinks-qrcodes {
  display: block;
  opacity: 1;
  transform: scale(1, 1);
}
.donate-animation-2 > #drinks-button-box,
.donate-animation-4 > #drinks-qrcodes,
.hideBox {
  display: block;
  transform: scale(1, 1);
  animation-name: hideBox;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.donate-animation-3 > #drinks-icons {
  transform: scale(0.4, 0.4);
  filter: blur(2px);
}
.showBox {
  animation-name: showBox;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@keyframes showBox {
  from {
    opacity: 0;
    transform: scale(1.3, 1.3);
  }
  to {
    opacity: 1;
    transform: scale(1, 1);
  }
}
@keyframes hideBox {
  from {
    opacity: 1;
    transform: scale(1, 1);
  }
  to {
    opacity: 0;
    transform: scale(1.3, 1.3);
  }
}
</style>
