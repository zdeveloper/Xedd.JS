var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="XeddJSCSS.ts" />
/* *** XEDD.JS MODULES *** */
var globalAttributes = (function (_super) {
    __extends(globalAttributes, _super);
    function globalAttributes() {
        _super.call(this);
        this.object = null;
    }
    globalAttributes.prototype.setAcessKey = function (val) {
        this.object.accessKey = val;
    };

    globalAttributes.prototype.setClass = function (val) {
        this.object.className = val;
    };
    globalAttributes.prototype.setContentEditable = function (val) {
        if (val == "true" || val == "false" || val == "inherit") {
            this.object.contentEditable = val;
            return true;
        } else {
            return false;
        }
    };
    globalAttributes.prototype.setDir = function (val) {
        if (val == "ltr" || val == "rtl" || val == "auto") {
            this.object.dir = val;
            return true;
        } else {
            return false;
        }
    };
    globalAttributes.prototype.setDraggable = function (val) {
        this.object.draggable = val;
    };
    globalAttributes.prototype.setId = function (val) {
        this.object.id = val;
    };
    globalAttributes.prototype.getId = function () {
        return this.object.id;
    };
    globalAttributes.prototype.setLang = function (val) {
        this.object.lang = val;
    };
    globalAttributes.prototype.setSpellCheck = function (val) {
        this.object.spellcheck = val;
    };
    globalAttributes.prototype.getStyle = function () {
        return this.object.style;
    };
    globalAttributes.prototype.setTabIndex = function (val) {
        this.object.tabIndex = val;
    };
    globalAttributes.prototype.setTitle = function (val) {
        this.object.title = val;
    };
    globalAttributes.prototype.remove = function () {
        document.body.removeChild(this.object);
    };
    return globalAttributes;
})(css);

var title = (function () {
    function title(text) {
        document.title = text;
    }
    return title;
})();

var script = (function (_super) {
    __extends(script, _super);
    function script(src) {
        _super.call(this);
        this.object = document.createElement('script');
        this.object.src = src;
    }
    return script;
})(globalAttributes);

var button = (function (_super) {
    __extends(button, _super);
    function button(text, onclick, disabled) {
        _super.call(this);
        this.object = document.createElement('button');
        this.object.innerText = text;
        this.object.onclick = onclick;
        this.object.disabled = disabled;
    }
    button.prototype.setDisabled = function (val) {
        this.object.disabled = val;
    };
    button.prototype.onClick = function (func) {
        this.object.onclick = func;
    };
    button.prototype.onDoubleClick = function (func) {
        this.object.ondblclick = func;
    };
    button.prototype.onMouseEnter = function (func) {
        this.object.onmouseenter = func;
    };
    button.prototype.onMouseLeave = function (func) {
        this.object.onmouseleave = func;
    };
    button.prototype.onMouseDown = function (func) {
        this.object.onmousedown = func;
    };
    button.prototype.onMouseMove = function (func) {
        this.object.onmousemove = func;
    };
    button.prototype.onMouseOut = function (func) {
        this.object.onmouseout = func;
    };
    button.prototype.onMouseOver = function (func) {
        this.object.onmouseover = func;
    };
    button.prototype.onMouseUp = function (func) {
        this.object.onmouseup = func;
    };
    button.prototype.onMouseWheel = function (func) {
        this.object.onmousewheel = func;
    };
    button.prototype.onScroll = function (func) {
        this.object.onscroll = func;
    };
    button.prototype.show = function () {
        document.body.appendChild(this.object);
    };
    return button;
})(globalAttributes);

var p = (function (_super) {
    __extends(p, _super);
    function p(text) {
        _super.call(this);
        this.p = document.createElement('p');
        this.p.innerText = text;
    }
    p.prototype.text = function (text) {
        this.p.innerText = text;
    };
    p.prototype.show = function () {
        document.body.appendChild(this.p);
    };
    return p;
})(globalAttributes);

var h1 = (function (_super) {
    __extends(h1, _super);
    function h1(text) {
        _super.call(this);
        this.h1 = document.createElement('h1');
        this.h1.innerText = text;
    }
    h1.prototype.show = function () {
        document.body.appendChild(this.h1);
    };
    return h1;
})(globalAttributes);

var img = (function (_super) {
    __extends(img, _super);
    function img(alt, src, width, height) {
        _super.call(this);
        this.object = document.createElement('img');
        this.object.alt = alt;
        this.object.src = src;
        this.object.width = width;
        this.object.height = height;
    }
    img.prototype.alt = function (text) {
        this.object.alt = text;
    };
    img.prototype.setWidth = function (val) {
        this.object.width = val;
    };
    img.prototype.setHeight = function (val) {
        this.object.height = val;
    };
    img.prototype.getWidth = function () {
        return this.object.width;
    };
    img.prototype.getHeight = function () {
        return this.object.height;
    };
    img.prototype.show = function () {
        document.body.appendChild(this.object);
    };
    return img;
})(globalAttributes);

var video = (function (_super) {
    __extends(video, _super);
    function video(src, height, width, controls, autoplay) {
        _super.call(this);
        this.object = document.createElement('video');
        this.object.src = src;
        this.object.height = height;
        this.object.width = width;
        this.object.autoplay = autoplay;
        this.object.controls = controls;
    }
    video.prototype.setWidth = function (val) {
        this.object.width = val;
    };
    video.prototype.setHeight = function (val) {
        this.object.height = val;
    };
    video.prototype.getHeight = function () {
        return this.object.height;
    };
    video.prototype.getWidth = function () {
        return this.object.width;
    };
    video.prototype.setPreload = function (val) {
        this.object.preload = val;
    };
    video.prototype.setPoster = function (url) {
        this.object.poster = url;
    };
    video.prototype.setControls = function (val) {
        this.object.controls = val;
    };
    video.prototype.setLoop = function (val) {
        this.object.loop = val;
    };
    video.prototype.setMuted = function (val) {
        this.object.muted = val;
    };

    video.prototype.show = function () {
        document.body.appendChild(this.object);
    };
    return video;
})(globalAttributes);

/***** Anchor Class  *****/
// naming not final
var link = (function (_super) {
    __extends(link, _super);
    function link(text, url) {
        _super.call(this);
        this.link = document.createElement('a');
        this.link.innerText = text;
        this.link.href = url;
    }
    link.prototype.show = function () {
        document.body.appendChild(this.link);
    };
    return link;
})(globalAttributes);

var input = (function (_super) {
    __extends(input, _super);
    function input(type, name, value, action) {
        _super.call(this);
        this.object = document.createElement('input');
        this.object.type = type;
        this.object.name = name;
        this.object.value = value;
        this.object.formAction = action;
    }
    input.prototype.setValue = function (val) {
        this.object.value = val;
    };
    input.prototype.getValue = function () {
        return this.object.value;
    };
    input.prototype.setAutoComplete = function (val) {
        if (val == true) {
            this.object.autocomplete = 'on';
        } else {
            this.object.autocomplete = 'off';
        }
    };
    input.prototype.setPlaceholder = function (placeholder) {
        this.object.placeholder = placeholder;
    };
    input.prototype.setChecked = function (val) {
        this.object.checked = val;
    };
    input.prototype.setHeight = function (val) {
        this.object.height = val + "px";
    };

    ////   setGroup + setTabIndex are COPIES
    input.prototype.setGroup = function (val) {
        this.object.tabIndex = val;
    };
    input.prototype.setTabIndex = function (val) {
        this.object.tabIndex = val;
    };
    input.prototype.show = function () {
        document.body.appendChild(this.object);
    };
    return input;
})(globalAttributes);

var audio = (function (_super) {
    __extends(audio, _super);
    function audio(src, controls, autoPlay) {
        _super.call(this);
        this.object = document.createElement('audio');
        this.object.src = src;
        this.object.controls = controls;
        this.object.autoplay = autoPlay;
    }
    audio.prototype.setControls = function (val) {
        this.object.controls = val;
    };
    audio.prototype.setLoop = function (val) {
        this.object.loop = val;
    };
    audio.prototype.setMuted = function (val) {
        this.object.muted = val;
    };

    /**
    * @type {string}
    * @param String : auto , metadata, none
    */
    audio.prototype.setPreload = function (val) {
        this.object.preload = val;
    };
    audio.prototype.show = function () {
        document.body.appendChild(this.object);
    };
    return audio;
})(globalAttributes);

var line = (function (_super) {
    __extends(line, _super);
    function line() {
        _super.call(this);
        this.object = document.createElement('br');
        document.body.appendChild(this.object);
    }
    return line;
})(globalAttributes);

var style = (function (_super) {
    __extends(style, _super);
    function style(html) {
        _super.call(this);
        this.object = document.createElement('style');
        this.object.innerHTML = html;
    }
    style.prototype.setFontFace = function (fontName, src) {
        this.object.appendChild(document.createTextNode("\
            @font-face {\
                font-family: '" + fontName + "';\
                src: url('" + src + "') format(yourFontFormat);\
            }\
            "));
    };
    style.prototype.show = function () {
        document.body.appendChild(this.object);
    };
    return style;
})(globalAttributes);

var canvas = (function (_super) {
    __extends(canvas, _super);
    function canvas(width, height) {
        _super.call(this);
        this.object = document.createElement('canvas');
        this.object.width = width;
        this.object.height = height;
    }
    canvas.prototype.getObject = function () {
        return this.object;
    };
    canvas.prototype.show = function () {
        document.body.appendChild(this.object);
    };
    return canvas;
})(globalAttributes);

var textArea = (function (_super) {
    __extends(textArea, _super);
    function textArea(name, text, rows, cols) {
        _super.call(this);
        this.object = document.createElement('textarea');
        this.object.name = name;
        this.object.innerText = text;
        this.object.rows = rows;
        this.object.cols = cols;
    }
    textArea.prototype.setText = function (text) {
        this.object.innerText;
    };
    textArea.prototype.getText = function () {
        return this.object.innerText;
    };
    textArea.prototype.setAutofocus = function (val) {
        this.object.autofocus = val;
    };
    textArea.prototype.setDisabled = function (val) {
        this.object.disabled = val;
    };
    textArea.prototype.setFormId = function (id) {
        this.object.form.id = id;
    };
    textArea.prototype.setFormAction = function (action) {
        this.object.form.action = action;
    };
    textArea.prototype.setMaxLength = function (max) {
        this.object.maxLength = max;
    };
    textArea.prototype.setPlaceHolder = function (text) {
        this.object.placeholder = text;
    };
    textArea.prototype.setReadOnly = function (val) {
        this.object.readOnly = val;
    };
    textArea.prototype.setRequired = function (val) {
        this.object.required = val;
    };
    textArea.prototype.setWrap = function (val) {
        if (val == "hard") {
            this.object.wrap = val;
            return true;
        } else if (val == "soft") {
            this.object.wrap = val;
            return true;
        } else {
            return false;
        }
    };

    textArea.prototype.addHTML = function (html) {
        this.object.innerHTML += html;
    };
    textArea.prototype.show = function () {
        document.body.appendChild(this.object);
    };
    return textArea;
})(globalAttributes);

var div = (function (_super) {
    __extends(div, _super);
    function div() {
        _super.call(this);
        this.object = document.createElement('div');
    }
    div.prototype.insert = function (val) {
        this.object.insertAdjacentElement = val;
    };
    div.prototype.align = function (val) {
        this.object.align = val;
    };
    return div;
})(globalAttributes);
//@ sourceMappingURL=XeddJS.js.map
