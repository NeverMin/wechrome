// ==UserScript==
// @name         WebChat
// @namespace    http://github.com
// @version      1.0
// @description  为特定路径的请求添加请求头部信息
// @match        *://web.wechat.com/*
// @match        *://wx.qq.com/*
// @match        *://wx2.qq.com/*
// @match        *://wx8.qq.com/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

    // 定义特定路径和请求头部信息
    var wechatUrls = [
        "*://web.wechat.com/*",
        "*://wx.qq.com/*",
        "*://wx2.qq.com/*",
        "*://wx8.qq.com/*"
    ];

    var wechatHeaders = {
        extspam: "Go8FCIkFEokFCggwMDAwMDAwMRAGGvAESySibk50w5Wb3uTl2c2h64jVVrV7gNs06GFlWplHQbY/5FfiO++1yH4ykCyNPWKXmco+wfQzK5R98D3so7rJ5LmGFvBLjGceleySrc3SOf2Pc1gVehzJgODeS0lDL3/I/0S2SSE98YgKleq6Uqx6ndTy9yaL9qFxJL7eiA/R3SEfTaW1SBoSITIu+EEkXff+Pv8NHOk7N57rcGk1w0ZzRrQDkXTOXFN2iHYIzAAZPIOY45Lsh+A4slpgnDiaOvRtlQYCt97nmPLuTipOJ8Qc5pM7ZsOsAPPrCQL7nK0I7aPrFDF0q4ziUUKettzW8MrAaiVfmbD1/VkmLNVqqZVvBCtRblXb5FHmtS8FxnqCzYP4WFvz3T0TcrOqwLX1M/DQvcHaGGw0B0y4bZMs7lVScGBFxMj3vbFi2SRKbKhaitxHfYHAOAa0X7/MSS0RNAjdwoyGHeOepXOKY+h3iHeqCvgOH6LOifdHf/1aaZNwSkGotYnYScW8Yx63LnSwba7+hESrtPa/huRmB9KWvMCKbDThL/nne14hnL277EDCSocPu3rOSYjuB9gKSOdVmWsj9Dxb/iZIe+S6AiG29Esm+/eUacSba0k8wn5HhHg9d4tIcixrxveflc8vi2/wNQGVFNsGO6tB5WF0xf/plngOvQ1/ivGV/C1Qpdhzznh0ExAVJ6dwzNg7qIEBaw+BzTJTUuRcPk92Sn6QDn2Pu3mpONaEumacjW4w6ipPnPw+g2TfywJjeEcpSZaP4Q3YV5HG8D6UjWA4GSkBKculWpdCMadx0usMomsSS/74QgpYqcPkmamB4nVv1JxczYITIqItIKjD35IGKAUwAA==",
        "client-version": "2.0.0"
    };

    var currentPathname = window.location.pathname;
    var targetPathname = '/cgi-bin/mmwebwx-bin/webwxnewloginpage';

    if (currentPathname === targetPathname) {
        GM_xmlhttpRequest({
            method: "GET",
            url: currentPathname + window.location.search, // 保留原有请求参数
            headers: Object.assign({}, wechatHeaders) // 复制请求头部信息
        });
    }

    // 然后重新请求 https://wx2.qq.com/?lang=zh_CN&target=t
    // 返回的地址为: https://wx2.qq.com/cgi-bin/mmwebwx-bin/webwxnewloginpage?ticket=Axs0jPVkyQFgTOhaCXZ1iE-Y@qrticket_0&uuid=QdReXXh15g==&lang=zh_CN&scan=1687105472
    // 需要马上刷新 https://wx2.qq.com/?target=t
})();
