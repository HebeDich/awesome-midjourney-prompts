function IframeShare(config) {
  console.log("config", config);
  let u = null;
  let a = null;
  let w = Date.now();
  let I = w;
  const l = {
    Standard: "standard",
    FullPage: "fullpage",
    Popup: "popup",
    Slider: "slider",
    Popover: "popover",
    SideTab: "sidetab",
  };
  const $ = config.isPreview ? location.origin : "https://wenjuan.uupt.work";

  function dom(className) {
    return document.getElementsByClassName(className)[0];
  }
  function isHasClass(el, className) {
    return el.classList
      ? el.classList.contains(className)
      : ` ${el.className} `.indexOf(` ${className} `) > -1;
  }
  function addClassName(el, name) {
    (Array.isArray(name) ? name : [name]).forEach((item) => {
      el.classList
        ? el.classList.add(item)
        : isHasClass(el, item) || (el.className = `${el.className} ${name}`);
    });
  }
  function delClassName(el, name) {
    (Array.isArray(name) ? name : [name]).forEach((s) => {
      if (el.classList) n.classList.remove(s);
      else if (isHasClass(el, s)) {
        const elName = el.className;
        el.className = ` ${elName} `.replace(` ${name} `, " ");
      }
    });
  }
  function sendEvent(e) {}
  const svgIcon = {
    close:
      '<svg focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>',
    "like-outlined":
      '<svg focusable="false" class="" data-icon="like" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 00-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 00471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0142.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path></svg>',
    "message-outlined":
      '<svg focusable="false" class="" data-icon="message" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path></svg>',
    "mail-outlined":
      '<svg focusable="false" class="" data-icon="mail" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg>',
    "form-outlined":
      '<svg focusable="false" class="" data-icon="form" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"></path><path d="M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"></path></svg>',
  };

  const debounce = (func, wait = 50) => {
    let timer = null;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  };
  function pageStyle() {
    u && document.body.removeChild(u),
      (u = u || document.createElement("style")),
      (u.innerHTML = `
    .IframeShare-hide {
      display: none!important;
    }
    .IframeShare-alert {
      box-sizing: border-box;
      margin: 0;
      color: #000000d9;
      font-size: 14px;
      font-variant: tabular-nums;
      line-height: 1.5715;
      list-style: none;
      font-feature-settings: "tnum";
      position: relative;
      position: fixed;
      top: 0;
      width: 100%;
      text-align: center;
      padding: 8px 15px;
      word-wrap: break-word;
      background-color: rgb(255, 251, 230);
      border: 1px solid #ffe58f;
      z-index: 99;
    }
    .IframeShare-alert-for-preview {
      position: absolute;
      left: -100%;
      width: 100px;
      background: gray;
    }
    .IframeShare-embed {
      transition: opacity 0.35s ease-in-out;
    }
    .IframeShare button {
      border: none;
      display: inline-flex;
      align-items: center;
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 5px 15px;
      font-weight: 400;
      cursor: pointer;
      text-align: center;
      margin: 0px;
      text-decoration: none;
      touch-action: manipulation;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    }
    .IframeShare button svg {
      margin-right: 5px;
    }
    .IframeShare button:hover {
      opacity: 0.8;
    }
    .IframeShare a {
      display: inline-flex;
      align-items:center;
    }
    .IframeShare a svg {
      margin-right: 5px;
    }
    .IframeShare-fullpage {
      all:unset;position: fixed;top:0;left:0;bottom:0;right:0;
    }
    .IframeShare-popup,
    .IframeShare-slider {
      position: fixed;
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      z-index: 10001;
      height: 100%;
      background-color: #00000073;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.25s ease-in-out;
    }
    .IframeShare-sidetab {
      position: fixed;
      top: 50%;
      right: 0;
      z-index: 10001;
      max-width: 80%;
      will-change: transform;
      transform: translate(100%, -50%);
      transition: transform 250ms ease-in-out;
      box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 2px 12px rgb(0 0 0 / 6%);
    }
    .IframeShare-sidetab .IframeShare-iframe-wrapper {
      transition: opacity 0.25s ease-in-out;
    }
    .IframeShare-sidetab[data-open=true] {
      transform: translate(0, -50%);
    }
    .IframeShare-sidetab .IframeShare-launch-button {
      position: absolute;
      top: 50%;
      left: -48px;
      transform: rotate(-90deg) translateX(-50%);
      transform-origin: left top;
      min-width: 100px;
      max-width: 540px;
      height: 48px;
      display: flex;
      align-items: center;
      padding: 0 16px;
      cursor: pointer;
      border: 0;
      text-decoration: none;
      outline: none;
      border-radius: 0;
    }
    .IframeShare-sidetab .IframeShare-button-icon {
      width: 24px;
      height: 24px;
      font-size: 24px;
      transform: rotate(90deg);
      margin-right: 12px;
      position: relative;
      order: -1;
      opacity: 1;
      display: none;
    }
    .IframeShare-sidetab[data-open=true] .IframeShare-close-icon,
    .IframeShare-sidetab[data-open=false] .IframeShare-launch-icon {
      display: block;
    }
    .IframeShare-popover {
      bottom: 96px;
      position: fixed;
      right: 16px;
      z-index: 10001;
    }
    .IframeShare-popover[data-open=false] {
      width: 0!important;
      height: 0!important;
      max-width: 0!important;
      max-height: 0!important;
      min-width: 0!important;
      min-height: 0!important;
    }
    .IframeShare-popover[data-open=true] {
      max-width: 100%;
    }
    .IframeShare-popover .IframeShare-iframe-wrapper {
      transform: translateY(15px);
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
      box-shadow: rgb(0 0 0 / 8%) 0 2px 4px, rgb(0 0 0 / 6%) 0 2px 12px;
      z-index: 1;
    }
    .IframeShare-popover .IframeShare-launch-button {
      width: 54px;
      height: 54px;
      position: fixed;
      box-shadow: 0 2px 12px rgb(0 0 0 / 6%), 0 2px 4px rgb(0 0 0 / 8%);
      color: white;
      right: 26px;
      bottom: 26px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background: #3a7685;
      line-height: 0;
      border: none;
      padding: 0;
    }
    .IframeShare-popover .IframeShare-button-icon {
      width: 54px;
      height: 54px;
      font-size: 24px;
      border-radius: 50%;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      display: none;
    }
    .IframeShare-popover[data-open=true] .IframeShare-close-icon,
    .IframeShare-popover[data-open=false] .IframeShare-launch-icon {
      display: flex;
      opacity: 1;
    }
    .IframeShare-popover .IframeShare-iframe-wrapper .IframeShare-close-icon,
    .IframeShare-sidetab .IframeShare-iframe-wrapper .IframeShare-close-icon {
      display: none;
    }
   
    .IframeShare-embed iframe {
      overflow: hidden;
      border-radius: 4px;
    }
    .IframeShare-sidetab iframe {
      border-radius: 4px 0 0 4px;
    }
    .IframeShare-fullpage iframe,
    .IframeShare-slider iframe {
      border-radius: 0;
    }
    .IframeShare-loading-icon {
      border: 3px solid #aaa;
      font-size: 24px;
      width: 1em;
      height: 1em;
      border-radius: 0.5em;
      box-sizing: border-box;
      animation: IframeShare-spin 1s linear infinite;
      border-top-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -12px 0 0 -12px;
      top: 0;
      left: 0;
      margin: 0
    }
    .IframeShare-popup .IframeShare-iframe-wrapper {
      position: relative;
      transition: opacity 0.25s ease-in-out;
      min-width: 360px;
      min-height: 360px;
      height: 1px;
      max-height: 100%;
    }
    .IframeShare-close-icon {
      position: absolute;
      font-size: 24px;
      line-height: 24px;
      width: 24px;
      height: 24px;
      text-align: center;
      cursor: pointer;
      text-decoration: none;
      color: #fff;
      padding: 0;
      margin: 0;
      background: transparent;
      border: none;
      opacity: 0;
      transition: opacity 0.25s ease-in-out;
    }
    .IframeShare-popup .IframeShare-close-icon {
      top: -34px;
      right: 5px;
    }
    .IframeShare-slider .IframeShare-iframe-wrapper {
      height: 100%;
      max-width: 80%;
      position: absolute;
      top: 0;
      will-change: transform;
      transition: right 0.5s ease-in-out, left 0.5s ease-in-out, transform 0.5s ease-in-out;
    }
    
    .IframeShare-iframe-wrapper .IframeShare-close-icon {
      font-size: 24px;
    }
    .IframeShare-slider[data-position=left] .IframeShare-close-icon {
      top: 5px;
      right: -30px;
    }
    .IframeShare-slider[data-position=right] .IframeShare-close-icon {
      top: 5px;
      left: -30px;
    }
    .IframeShare-loading {
      border: 3px solid #aaa;
      font-size: 40px;
      width: 1em;
      height: 1em;
      border-radius: 0.5em;
      box-sizing: border-box;
      animation: IframeShare-spin 1s linear infinite;
      border-top-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -20px 0 0 -20px;
    }
    @keyframes IframeShare-spin {
      to {
          transform: rotate(360deg)
      }
    }
    @media (max-width: 480px) {
      .IframeShare-popup .IframeShare-iframe-wrapper {
        min-width: 100%;
        min-height: 100%;
      }
      .IframeShare-popup .IframeShare-iframe-wrapper .IframeShare-close-icon,
      .IframeShare-popover .IframeShare-iframe-wrapper .IframeShare-close-icon {
        top: 6px;
        right: 6px;
        color: rgba(0,0,0,.85);
        display: flex;
        width: 28px;
        height: 28px;
        justify-content: center;
        align-items: center;
        background-color: rgb(255,255,255,.4);
        border-radius: 4px;
        font-size: 16px;
      }
      .IframeShare-popover {
        right: 0;
        bottom: 0;
        height: 100% !important;
      }
      .IframeShare-popover .IframeShare-iframe-wrapper {
        transform: translateY(0px)!important;
      }
      .IframeShare-popover iframe,
      .IframeShare-popup iframe {
        border-radius: 0;
      }
    }
  `),
      document.body.contains(u) || document.body.appendChild(u);
  }
  function getIframeSrc() {
    return config.url;
  }

  function render(tpl) {
    const t = document.createElement("template");
    const emb = dom("IframeShare-embed");
    tpl = tpl.trim();
    t.innerHTML = tpl;
    t.content.firstChild;
    console.log("emb", emb);
    if (!emb) {
      document.body.appendChild(t.content.firstChild);
    }
  }
  function createFullpageDom() {
    const tpl = `
    <div class="IframeShare-embed IframeShare-fullpage">
      <iframe
        id="IframeShare"
        height="100%"
        width="100%"
        src="${getIframeSrc()}"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  `;
    return render(tpl);
  }
  function FullpageMode() {
    createFullpageDom();
    a && (a.style.opacity = "1");
  }
  function createPopoverDom() {
    var i;
    const o =
        config.mode === l.SideTab
          ? `${config.buttonRadius}px ${config.buttonRadius}px 0 0`
          : `${config.buttonRadius}px`,
      tpl = `
<div class="IframeShare-embed IframeShare-${
        config.mode
      }" data-open="false" style="opacity:1;height:${
        (i = config.height) != null ? i : "100%"
      };width:${config.width};">
  <div class="IframeShare-iframe-wrapper" style="height:100%;width:100%;">
  <iframe
    height="100%"
    width="100%"
    src="${config.preload ? getIframeSrc() : ""}"
    frameborder="0"
    allowfullscreen
  ></iframe>
    <button class="IframeShare-close-icon">${svgIcon.close}</button>
  </div>
  <button class="IframeShare-launch-button" style="background-color: ${
    config.buttonColor
  };
    color: ${config.textColor};
    font-size: ${config.fontSize}px;
    border-radius: ${o}"
  >
    ${config.buttonText || ""}
    <span class="IframeShare-button-icon IframeShare-close-icon">${
      svgIcon.close
    }</span>
    <span class="IframeShare-button-icon IframeShare-launch-icon" style="${
      svgIcon[config.buttonIcon] ? "" : "display:none;"
    }">${svgIcon[config.buttonIcon]}</span>
    <span class="IframeShare-button-icon IframeShare-loading-icon" style="display: none;"></span>
  </button>
</div>
`;
    return render(tpl);
  }
  function PopoverMode() {
    createPopoverDom();
    isHasPopup();
    openPopoverMode();
  }
  function openPopoverMode() {
    a = dom("IframeShare-popover");
    const butDom = dom("IframeShare-launch-button");
    if (butDom) {
      const iframeDom = dom("IframeShare-iframe-wrapper");
      butDom.onclick = () => {
        delayLoad();
        const isOpen = a.getAttribute("data-open") === "false";
        a.setAttribute("data-open", "true"),
          (iframeDom.style.opacity = isOpen ? "1" : "0"),
          config.mode === l.Popover
            ? ((iframeDom.style.transform = isOpen
                ? "translateY(0px)"
                : "translateY(15px)"),
              setTimeout(() => {
                a && a.setAttribute("data-open", String(isOpen));
              }, 300))
            : a.setAttribute("data-open", String(isOpen));
      };
      setTimeout(() => {
        config.defaultOpen && butDom.click();
      }, 300);
      iframeDom.ontransitionend = (c) => {
        c.propertyName === "opacity" &&
          iframeDom &&
          iframeDom.style.opacity === "0" &&
          a &&
          (a.setAttribute("data-open", "false"), allowRepeatSubmit());
      };
    }
  }
  function PopupMode(node) {
    debounce(
      (dom(node).onclick = () => {
        a = a || createPopuDom();
        isHasPopup();
        delayLoad();
        if (a) {
          const i = dom("IframeShare-iframe-wrapper");
          Object.assign(i.style, {
            height: config.height,
            width: config.width,
          }),
            a.setAttribute("data-position", config.position),
            isHasPopup(!1);
        }
      }),
      500
    );
    setTimeout(() => {
      config.defaultOpen && dom(node).click();
    }, 300);
  }
  function delayLoad() {
    if (config.preload) {
      const loading = dom("IframeShare-loading");
      loading && (loading.style.display = "block");
      const wrapper = dom("IframeShare-iframe-wrapper");
      const iframeNode =
        wrapper == null ? void 0 : wrapper.getElementsByTagName("iframe")[0];
      if (iframeNode) {
        const src = getIframeSrc();
        iframeNode.src !== src
          ? (iframeNode.src = src)
          : w !== I && (iframeNode.src = iframeNode.src);
      }
      I = w;
    }
  }
  function showCloseIcon() {
    const iframeDom = a.getElementsByTagName("iframe")[0];
    iframeDom &&
      (iframeDom.onload = () => {
        const loading = dom("IframeShare-loading"),
          closeIcon = dom("IframeShare-close-icon");
        if (
          (loading && (loading.style.display = "none"),
          closeIcon && (closeIcon.style.opacity = "1"),
          config.mode === l.Slider)
        ) {
          a.style.transform = "translateX(0)";
        }
      });
  }

  function createPopuDom() {
    let i;
    const mode =
      config.mode === l.Slider
        ? `${
            config.position === "left"
              ? "left: 0; transform: translateX(-100%)"
              : "right: 0;transform: translateX(100%)"
          }`
        : "";
    const tpl = `
    <div class="IframeShare-embed IframeShare-${config.mode}" data-position="${
      config.position
    }" style="opacity:0;">
      <div class="IframeShare-loading"></div>
      <div class="IframeShare-iframe-wrapper" style="height:${
        (i = config.height) != null && "" ? i : "100%"
      };width:${config.width};${mode}">
        <iframe
          height="100%"
          width="100%"
          src="${config.preload ? getIframeSrc() : ""}"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <button class="IframeShare-close-icon">${svgIcon.close}</button>
      </div>
    </div>
    `;
    return render(tpl);
  }

  let callback = (o) => {};
  function allowRepeatSubmit() {
    a = dom("IframeShare-embed");
    if (
      localStorage.getItem("submit") === "true" &&
      !config.allowRepeatSubmit &&
      a
    ) {
      a.style.opacity = "0";
      const t = setTimeout(() => {
        a && (a.style.display = "none"), callback("close");
      }, 500);
      a.ontransitionend = (i) => {
        i.target === a &&
          i.propertyName === "opacity" &&
          a &&
          a.style.opacity === "0" &&
          (clearTimeout(t), callback("close"), (a.style.display = "none"));
      };
    }
  }
  function clickClose() {
    const closeBtn = dom("IframeShare-close-icon");
    a = dom("IframeShare-embed");
    if (
      closeBtn &&
      ((closeBtn.onclick = () => {
        if (a) {
          if (((a.style.opacity = "0"), config.mode === l.Slider)) {
            const t = dom("IframeShare-iframe-wrapper");
            config.position === "left"
              ? (t.style.transform = "translateX(-100%)")
              : (t.style.transform = "translateX(100%)");
          }
          a.ontransitionend = (t) => {
            t.propertyName === "opacity" &&
              a &&
              a.style.opacity === "0" &&
              ((a.style.display = "none"), allowRepeatSubmit());
          };
        }
      }),
      config.mode === l.Popover)
    ) {
      const t = dom("IframeShare-iframe-wrapper"),
        i = t.getElementsByClassName("IframeShare-close-icon")[0];
      i.onclick = (c) => {
        (t.style.opacity = "0"), (t.style.transform = "translateY(15px)");
        a.setAttribute("data-open", String(false));
      };
    }
  }
  let M;
  function sliderPopup(onoff = true) {
    const wrap = dom("IframeShare-iframe-wrapper");
    wrap &&
      config.mode === l.Slider &&
      (config.position === "left"
        ? ((wrap.style.left = "0px"),
          (wrap.style.right = "unset"),
          onoff && (wrap.style.transform = "translateX(-100%)"))
        : ((wrap.style.left = "unset"),
          (wrap.style.right = "0px"),
          onoff && (wrap.style.transform = "translateX(100%)")),
      onoff &&
        (clearTimeout(M),
        (M = setTimeout(() => {
          wrap && (wrap.style.transform = "translateX(0)");
        }))));
  }
  let C;
  function isHasPopup() {
    document.body.contains(a)
      ? sliderPopup()
      : (createPopuDom, clickClose(), showCloseIcon()),
      clearTimeout(C),
      (a.style.display = "flex"),
      (C = setTimeout(() => {
        a && (a.style.opacity = "1");
      }));
  }

  function submitAfterClose() {
    const closeBtn =
      dom("IframeShare-launch-button") || dom("IframeShare-close-icon");
    closeBtn && closeBtn.click();
  }

  setTimeout(async () => {
    //閸愭瑥鍙嗛弽宄扮础
    pageStyle();
    switch (config.mode) {
      case l.FullPage:
        FullpageMode();
        break;
      case l.Popup:
      case l.Slider:
        PopupMode(config.btnEl);
        break;
      case l.SideTab:
      case l.Popover:
        PopoverMode();
        break;
    }
    clickClose();
  }, 300);
  window.addEventListener(
    "message",
    (e) => {
      if (e.origin === $) {
        try {
          setTimeout(() => {
            config.closeAfterSubmit && submitAfterClose();
          }, 500);
        } catch (e) {
          console.log("err", e);
        }
      }
    },
    false
  );
}
window.IframeShare = IframeShare;
let configs = [
  {
    name: "全屏幕模式",
    url: "",
    mode: "fullpage",
    preload: true,
    allowRepeatSubmit: false,
    submitAfterClose: false,
  },
  {
    name: "抽屉模式",
    url: "",
    mode: "slider",
    preload: true,
    position: "right",
    width: "550px",
    defaultOpen: false,
    allowRepeatSubmit: false,
  },
  {
    name: "侧边栏",
    url: "",
    mode: "sidetab",
    preload: true,
    width: "350px",
    height: "450px",
    defaultOpen: false,
    allowRepeatSubmit: false,
    buttonColor: "#1055FF",
    textColor: "#ffffff",
    fontSize: "18",
    buttonText: "点我",
    buttonRadius: 4,
    buttonIcon: "mail-outlined",
  },
];
console.log(configs, "调用方法:IframeShare(config)");
//閸忋劌鐫嗗Ο鈥崇础闁板秶鐤�
// IframeShare({
//   key: "D60EA0045E",
//   mode: "fullpage",
//   preload: true,
//   allowRepeatSubmit: false,
//   submitAfterClose:false
// });

//閹惰棄鐪藉Ο鈥崇础闁板秶鐤�
// IframeShare({
//   key: "D60EA0045E",
//   mode: "slider",
//   preload: true,
//   position: "right",
//   width: "550px",
//   defaultOpen: false,
//   allowRepeatSubmit: false,
// });

//瀵湱鐛ュΟ鈥崇础闁板秶鐤�
// IframeShare({
//   key: "D60EA0045E",
//   mode: "popup",
//   preload: true,
//   position: "right",
//   width: "400px",
//   height: "350px",
//   defaultOpen: false,
//   allowRepeatSubmit: false,
// });

//濮樻梹鍦哄Ο鈥崇础闁板秶鐤�
// IframeShare({
//   key: "D60EA0045E",
//   mode: "popover",
//   preload: true,
//   position: "right",
//   width: "400px",
//   height: "350px",
//   defaultOpen: false,
//   allowRepeatSubmit: false,
//   buttonColor: "#1055FF",
//   textColor: "#ffffff",
//   fontSize: "18",
//   buttonText: "",
//   buttonRadius: 50,
//   buttonIcon: "message-outlined",
// });

// 娓氀嗙珶濡€崇础闁板秶鐤�
// IframeShare({
//   key: "D60EA0045E",
//   mode: "sidetab",
//   preload: true,
//   width: "350px",
//   height: "450px",
//   defaultOpen: false,
//   allowRepeatSubmit: false,
//   buttonColor: "#1055FF",
//   textColor: "#ffffff",
//   fontSize: "18",
//   buttonText: "閸欏秹顩�",
//   buttonRadius: 4,
//   buttonIcon: "mail-outlined",
// });
