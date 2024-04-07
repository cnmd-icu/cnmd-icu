---
title: "谷歌发布多平台应用开发神器Project IDX！PaLM 2加持"
icon: "support"
description: "Project IDX，PaLM 2加持，代码效率翻倍"
date: 2023-08-15
star: true
isOriginal: true
category:
  - AI
tag:
  - AI
---

[[toc]]

8 月 8 日，谷歌宣布推出 AI 代码编辑器 Project IDX，这是一个基于浏览器的开发环境：集成 AI、支持全栈编程语言、跨平台真机预览、一键部署，用于构建全栈网络和多平台应用程序。
![](https://s3.bmp.ovh/imgs/2023/08/15/c778fbcb229fc714.png)

一直以来，从 0 开始构建应用，都是一项复杂的工作。尤其是跨越手机、Web 和桌面平台的程序。

这是一片无尽的复杂海洋，需要把技术堆栈融合在一起，来引导、编译、测试、部署、监控应用程序。

多年来，谷歌一直致力于让多平台程序开发流程更快、更顺畅。

经过几个月的成果，团队成功做出了 Project IDX。

谷歌在创建 Project IDX 时并没有构建新的 IDE（集成开发环境），而是使用 VS Code 作为其项目的基础。这让团队能够专注于与 Codey 的集成，Codey 是谷歌基于 PaLM 2 的编程任务基础模型。Project IDX 支持智能代码补全，可以帮助开发者解答一般编码问题，提供与你正在处理的代码有关的特定问题（包括解释能力）的类似 ChatGPT/Bard 的聊天机器人，以及添加如 “添加注释” 等上下文代码操作的能力。
目前，Project IDX 支持 Angular、Flutter、Next.js、React、Svelte 和 Vue 等框架以及 JavaScript 和 Dart 等语言，后续还将支持 Python、Go 和其他语言。

## Project IDX 特性

- **随时随地快速开始**：你能够在任何地方、任何设备上进行开发，具有本地开发的全部保真度。每个 Project IDX 工作空间都具有基于 Linux 的虚拟机的全部功能，配合云中托管的通用访问权限。

![](https://s3.bmp.ovh/imgs/2023/08/15/6ce0e43362735ec2.gif)

- **一键导入或从模板创建**：从 GitHub 导入现有项目，让你继续之前的进度。还可以创建新项目，预先包含流行框架的模板，包括 Angular、Flutter、Next.js、React、Svelte、Vue 和如 JavaScript、Dart 以及（即将推出的）Python、Go 等语言。IDX 还在积极努力为更多项目类型和框架添加一流支持。

![](https://s3.bmp.ovh/imgs/2023/08/15/5fb316d7a0d02033.png)

- **跨平台预览**：应用成功发布后，需要优化设计和不同平台上的行为（像用户那样预览自己的应用），而 IDX 内置的网络预览（目前只支持 web 预览），和即将推出的完全配置的 Android 模拟器和嵌入式 iOS 模拟器，所有这些都可以直接在浏览器中使用。

![](https://s3.bmp.ovh/imgs/2023/08/15/f0ee99149149ef4b.gif)

- **AI 助手**：我们花费大量时间编写代码，而人工智能的最新进展创造了巨大的机会，可以让我们的时间变得更加高效。IDX 正在探索 Google 在 AI 领域的创新 —— 包括 为 Android Studio 中的 Studio Bot 提供支持的 Codey 和 PaLM 2 模型、Google Cloud 中的 Duet [4] 等 —— 可以帮助你不仅更快地编写代码，还可以编写更高质量的代码。

![](https://s3.bmp.ovh/imgs/2023/08/15/c40f15f7d756b746.gif)

- **一键部署**：在最后，将应用推向生产方面的一个常见痛点是部署它。通过集成 Firebase Hosting，通过几次点击就可以部署你的 Web 应用的可共享预览，或通过快速、安全和全球托管平台部署到生产环境。由于 Firebase Hosting 支持由 Cloud Functions 提供动力的动态后端，所以它非常适合像 Next.js 这样的全栈框架。

- **IDX 申请链接**：https://idx.dev/

## IDX 背后的 AI 模型 Codey

根据介绍，IDX 由 Codey 提供支持。

在 Google I/O 2023 大会上，谷歌正式发布 Codey。这是一款新型 AI 驱动工具，能够编写并理解代码内容。这款新工具被外界视为谷歌对于 GitHub Copilot 的回应，属于同 Replit 结盟打造的成果。

Codey 基于谷歌的下一代大语言模型 PaLM 2，并采用谷歌自家产品代码及大量合法许可的源代码作为训练素材。更重要的是，Codey 仍在不断学习和发展，从谷歌服务生态系统的各个项目中持续汲取新的力量。

Codey 支持 20 多种编程语言，包括 Go、谷歌标准 SQL、Java、JavaScript、Python 以及 TypeScript。开发者可以通过 Visual Studio Code、JetBrains IDE、Google Shell 编辑器以及 Google Cloud 托管工作站服务的扩展来访问 Codey。开发者能够直接在 IDE 的聊天框中与该模型交流（例如 Android Studio Bot），或者在文本文件中编写注释以指示其生成相关代码。它支持各种编码任务，通过以下方式帮助开发人员更快地工作并缩小技能差距：

代码完成：Codey 根据提示中输入的代码上下文建议接下来的几行。

代码生成：小程根据开发人员的自然语言提示生成代码。

代码聊天：Codey 允许开发人员与机器人对话，以获得调试、文档、学习新概念和其他与代码相关问题的帮助。

Codey 在处理与编码相关的提示词方面接受了专门训练，谷歌还通过其他训练让该模型学会了处理关于 Google Cloud 的一般查询。

## 目前在用的辅助AI开发工具

### - [CodeGeeX 智能编程助手](https://codegeex.cn/zh-CN) 
- **代码自动生成和补全** CodeGeeX可以根据自然语言注释描述的功能自动生成代码，也可以根据已有的代码自动生成后续代码，补全当前行或生成后续若干行，帮助你提高编程效率。
- **提供代码翻译能力** 基于AI大模型对代码进行语义级翻译，支持多种编程语言互译
- **自动添加注释** CodeGeeX可以给代码自动添加行级注释，节省大量开发时间。没有注释的历史代码，也不再是问题。

基于[CodeGeeX2](https://github.com/THUDM/CodeGeeX2/): 更强大的多语言代码生成模型
是多语言代码生成模型 CodeGeeX (KDD’23) 的第二代模型。不同于一代 CodeGeeX（完全在国产华为昇腾芯片平台训练） ，CodeGeeX2 是基于 ChatGLM2 架构加入代码预训练实现，得益于 ChatGLM2 的更优性能，CodeGeeX2 在多项指标上取得性能提升（+107% > CodeGeeX；仅 60 亿参数即超过 150 亿参数的 StarCoder-15B 近 10%），更多特性包括：

- **更强大的代码能力**：基于 ChatGLM2-6B 基座语言模型，CodeGeeX2-6B 进一步经过了 600B 代码数据预训练，相比一代模型，在代码能力上全面提升，HumanEval-X 评测集的六种编程语言均大幅提升 (Python +57%, C++ +71%, Java +54%, JavaScript +83%, Go +56%, Rust +321%)，在 Python 上达到 35.9% 的 Pass@1 一次通过率，超越规模更大的 StarCoder-15B。
- **更优秀的模型特性**：继承 ChatGLM2-6B 模型特性，CodeGeeX2-6B 更好支持中英文输入，支持最大 8192 序列长度，推理速度较一代 CodeGeeX-13B 大幅提升，量化后仅需 6GB 显存即可运行，支持轻量级本地化部署。
更全面的 AI 编程助手：CodeGeeX 插件（VS Code, Jetbrains）后端升级，支持超过 100 种编程语言，新增上下文补全、跨文件补全等实用功能。结合 Ask CodeGeeX 交互式 AI 编程助手，支持中英文对话解决各种编程问题，包括且不限于代码解释、代码翻译、代码纠错、文档生成等，帮助程序员更高效开发。
- **更开放的协议**：CodeGeeX2-6B 权重对学术研究完全开放，填写登记表申请商业使用。

### - [AWS CodeWhisperer](https://aws.amazon.com/cn/codewhisperer/)
4月18日，亚马逊云科技宣布，实时AI编程助手Amazon CodeWhisperer正式可用，同时推出的还有供所有开发人员免费使用的个人版（CodeWhisperer Individual）。CodeWhisperer帮助开发者基于注释生成代码，追踪开源参考，扫描查找漏洞。此外，还可以帮助开发者创建代码胜任如下场景，比如常规、耗时的无差别任务，或是在使用不熟悉的API或SDK时构建示例代码，亦或要正确高效地使用亚马逊云科技API操作，还有其他场景比如编写读写文件、处理图像、编写单元测试等代码。

Amazon CodeWhisperer 为多种编程语言提供基于人工智能（AI）的代码建议，包括 Python、Java、JavaScript、TypeScript、C#、Go、Rust、PHP、Ruby、Kotlin、C、C++、Shell 脚本、SQL 和 Scala。您可以使用来自多个 IDE 的服务，包括 JetBrains IDE（IntelliJ IDEA、PyCharm、WebStorm 和 Rider）、Visual Studio（VS）Code、AWS Cloud9、AWS Lambda 控制台、JupyterLab 和 Amazon SageMaker Studio。

### - [Poe](https://poe.com/)
国内可注册，使用方便，免费，有针对代码和程序专门优化的gpt-3.5-turbo模型 **Assistant**
当然还有其他的模型，包含一些限额和付费的，你也可以创建自己的bot
- Claude-2-100k
- Claude-instant-100k
- gpt-4-32k（Powered by gpt-4-32k. Since this is a beta model, the usage limit is subject to change.）
- Google-PaLM（Powered by Google's PaLM 2 chat-bison-001 model）


*CodeGeeX2*和*AWS CodeWhisperer*都提供了VSCode的插件可以使用，体验下来，*CodeGeeX2*支持的文件类型更多一点，而且反应也还算迅速，*AWS CodeWhisperer*只支持了主流开发语言，对于如dart、Vue、markdown、CSS等非主流编程语言支持效果很差，目前两者都免费，体验下来**CodeGeeX2**更不错一点，根据注释生成代码，给现有代码生成注释，代码翻译，纠错等功能也比较实用

## Some thoughts🤔
看来云上开发将来一定是主流趋势，程序员再也不用因为换设备，换环境而苦恼，集成式一体开发环境，开箱即用，开发随时可中断，可恢复，不受限于设备，环境，地点影响
而且集成AI代码助手，各大厂家都在发力了，微软的**GitHub Copilot**,亚马逊的**CodeWhisperer**，还有即将到来的Google的**Project IDX** 方便快捷的开发，将大量繁琐重复的工作交给AI来执行


## That's It


> 参考资料：
>
> - OSC 开源社区（ID：oschina2013)
> - https://developers.googleblog.com/2023/08/introducing-project-idx-experiment-to-improve-full-stack-multiplatform-app-development.html
> - https://codeandhack.com/google-codey/
