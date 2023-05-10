<p align="center"><h1>🧠 Awesome Midjourney Prompts</h1></p>  

<img src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" style="margin-left:10px;" /><img src="https://raw.githubusercontent.com/steamship-core/python-client/main/badge.svg" style="margin-left:10px;" /><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fgjbae1212%2Fhit-counter&count_bg=%23FD1768&title_bg=%231F1D1D&icon=powershell.svg&icon_color=%23E7E7E7&title=MJ&edge_flat=false" style="margin-left:10px;"  />

Midjourney Prompts提示词助手，提供可视化生成看板，小白一键成MJ作图大师。收录最全的提示词和指令集，目前免费提供使用，支持随意嵌入到你的网站。(更新23-05-10，支持V5.1)

# 项目介绍
* ✅ 支持文本拼接
* ✅ 支持全量过滤词，支持权重，支持搜索
* ✅ 支持在线图片融图拼接
* ✅ 支持自定义参数
* ✅ 支持嵌入任何网站
* ❎ 即将支持中文GPT优化
* ❎ 即将支持在线图床服务
  
# 效果展示 
<div align=center>
<img src="./images/banner.gif" width="600"/> 
  <p>按照自己喜欢的风格一键生成</p>
</div>

# 使用教程
> 简单的描述加上可视化关键词，生成图的质量得到了显著的提升。
## Van Gogh style fashion photography（梵高风格的时尚摄影）
<img src="./images/vangogh.png" width="400"/>
<p><img src="./images/vangogh-res.png" width="640"/></p>

## a broken hallelujah
<p><img src="./images/2-res.png" width="600"/></p>  

## a girl doodlle  

<p><img src="./images/3.png" width="400"/></p>
<p><img src="./images/3-res.png" width="600"/></p>

##  a perfect woman doodle::2, hyperrealistic
<p><img src="./images/4.png" width="400"/></p>
<p><img src="./images/4-res.png" width="600"/></p>

##  a colorful paint-filled balloon hitting a canvas, resulting in a dynamic explosion of color as splash photography --v 5.1 --style raw
<p><img src="./images/6.png" width="400"/></p>
<p><img src="./images/6-res.png" width="600"/></p>

# 网站嵌入教程

网站可以无缝嵌入工具，并通过`postMessage`模式接受加工后的`prompts`
```html
 
 <body>
  <div>
    <button class="btn-target">点击打开抽屉</button>
    <div><textarea id="Prompts" placeholder="这里输出指令"></textarea></div>
  </div>
  <img src="./images/6-res.png" width="30%" alt="">
</body>
<script>
  IframeShare(
    {
      btnEl: 'btn-target',
      url: "https://punk.openai1s.com/aiimg/prompt?nohead=1&postmsg=1",
      mode: "slider",
      position: 'right',
      width: '650px',
      preload: true,
      defaultOpen: false,
      allowRepeatSubmit: true
    });
  //监听prompt参数
  const prompts = document.getElementById('Prompts')
  window.addEventListener('message', function (event) {
    if (event.origin === 'https://punk.openai1s.com') {
      console.log(event.data, '打印加工后的prompt')
      prompts.innerHTML = event.data
    }
  });
</script>

```
通过参数配置，可以自定义隐藏不需要的内容，更高效地使用Prompt工具。

* 隐藏头部：`nohead=1`
* 隐藏文本框：`notext=1`
* 开启传参：`postmsg=1`

```javascript
//在url后追加参数
url="https://punk.openai1s.com/aiimg/prompt?nohead=1&postmsg=1"
```
嵌入版-推荐
<p><img src="./images/nohead.png" width="600" /></p>
弹窗版

<p><img src="./images/tan.png" width="600" /></p>

# Midjourney交流群
> 麻烦大佬们备注下来源
<p><img src="./qun.png" width="300" /></p>

# Star History

[![Star History Chart](https://api.star-history.com/svg?repos=MaleWeb/awesome-midjourney-prompts&type=Timeline)](https://star-history.com/#MaleWeb/awesome-midjourney-prompts&Timeline)