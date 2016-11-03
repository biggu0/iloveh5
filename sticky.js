define(["zepto.js"], function ($) {
    $('head').append('<style>.sticky-top,.sticky-bottom{position:fixed!important;z-index:10;top:0;left:0;box-sizing:border-box;-webkit-filter:drop-shadow(0 0 .06rem rgba(0,0,0,0.6));}.sticky-bottom{top:auto;bottom:0}</style>');
    var wh = document.documentElement.clientHeight;
    var hasSticky = (function () {
        var a = document.createElement("div");
        return "position" in a.style ? (a.style.position = "-webkit-sticky", a.style.position.indexOf("sticky") > -1) : !1
    })();
    return function (dom) {
        var $dom = $(dom);
        var dir = $(dom).attr('sticky-pos') || "top";
        if (hasSticky && dir == "top") {
            $dom.css('position', '-webkit-sticky').css('top', '0').css('z-index', '10');
            return;
        }
        var $anchor = $('<div class="sticky_anchor"></div>');
        if($dom.prev().hasClass('sticky_anchor')) {
            $anchor = $dom.prev();
        } else {
            $dom.before($anchor);
        }
        var $offsetParent = $dom.offsetParent();
        $dom.before($anchor);
        function checkfixd () {
            if ($dom.hasClass('sticky-top')) {
                if($anchor.offset().top >= document.body.scrollTop) {
                    //ios 的 bug，当页面拖动小于0后，js停止执行
                    setTimeout(function () {
                        $anchor.height(0);
                        $dom.removeClass('sticky-top').css('display', '');
                    });
                }
                if($offsetParent.offset().top + $offsetParent.height() - $dom.height() < document.body.scrollTop) {
                    $dom.addClass('sticky-top-bottom');
                } else {
                    $dom.removeClass('sticky-top-bottom');
                }
            } else if ($dom.hasClass('sticky-bottom')) {
                if($anchor.offset().top + $dom.height() < document.body.scrollTop + wh) {
                    $dom.removeClass('sticky-bottom');
                    $anchor.height(0);
                }
            } else {
                if (dir == "bottom") {
                    if($anchor.offset().top + $dom.height() >= document.body.scrollTop + wh) {
                        $dom.addClass('sticky-bottom');
                        $anchor.height($dom.height());
                    }
                } else {
                    if($dom.offset().top < document.body.scrollTop) {
                        $dom.addClass('sticky-top');
                        $anchor.height($dom.height());
                    }
                }
            }
        }
        checkfixd();
        document.addEventListener('scroll', checkfixd);
        //修复ios下webview的scroll问题
        var nav = navigator.userAgent;
        if (/iPhone/.test(nav)) {
            document.addEventListener('touchmove', checkfixd);
        }
    }
});