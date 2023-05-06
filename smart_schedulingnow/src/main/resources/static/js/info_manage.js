//2023.3.27
//kang

//获取页面元素
var info_manage = document.querySelector('.info_manage')
var info_btn1 = info_manage.querySelector('#info_button1')
var info_nav = info_manage.querySelector('.info_nav')
var info_body = info_manage.querySelector('.info_body')
var numturn = info_manage.querySelector('#numturn')
var addinfo = info_manage.querySelector('.addinfo')
var addinfo_btn = addinfo.querySelector('.addinfo_btn')
var addinfo_body = addinfo.querySelector('.addinfo_body')
var close = addinfo_btn.querySelector('.close')
var big = addinfo_btn.querySelector('.big')
var container = addinfo_body.querySelector('form').querySelector('#container')
var textarea = addinfo_body.querySelector('form').querySelector('.container1').querySelector('.main-content').querySelector('#content')
var documentfile = addinfo_body.querySelector('form').querySelector('#document')
var tab1 = document.querySelector('#tab1')
var tab2 = document.querySelector('#tab2')
var main_content = document.querySelector('.main-content')
var contentbt1 = document.querySelector('#contentbt1')
var contentbt2 = document.querySelector('#contentbt2')
var contentbt3 = document.querySelector('#contentbt3')
// =================================================================================
//获取不同电脑分辨率，不影响布局
var window_width = window.innerWidth
var width1 = 0.8 * window_width
var width2 = 0.7 * window_width
var window_height = window.innerHeight

// =================================================================================
//监听numturn的聚焦事件
numturn.addEventListener('focus', function (event) {
    previousValue = numturn.value
    console.log(previousValue);
})
let enterPressed = false;

// 监听input元素的input值变化事件
numturn.addEventListener('input', function (event) {
    enterPressed = false;
});

// 监听input元素的blur事件
numturn.addEventListener('blur', function (event) {
    if (enterPressed) {
        console.log('按下了回车键失去焦点');
    } else {
        numturn.value = previousValue
        console.log('失去了焦点，但没有按下回车键');
    }
});

// 监听input元素的keydown（enter）事件
numturn.addEventListener('keydown', function (event) {
    if (event.keyCode === 13 || event.keyCode === 10) {
        enterPressed = true;
        console.log('按下回车键后失去焦点');
        numturn.blur();
    }
});
// =================================================================================

//监听info_btn1的点击事件(使背景加上模糊滤镜，并且显示出addinfo的添加公告的页面框
info_btn1.onclick = function () {
    info_nav.style.filter = 'blur(4px)'
    info_body.style.filter = 'blur(4px)'
    addinfo.style.display = 'block'
    numturn.setAttribute('disabled', true)
    addinfo.focus()
}
// =================================================================================

// 监听close元素关闭addinfo的事件
close.onclick = function () {
    info_nav.style.filter = 'none'
    info_body.style.filter = 'none'
    addinfo.style.display = 'none'
    big.setAttribute('flag', '0')
    addinfo.style.left = 'calc(50% - 500px)'
    addinfo.style.width = '1000px'
    addinfo.style.height = '600px'
    addinfo_body.style.height = '550px'
    addinfo_body.style.backgroundColor = '#dbdbdb'
    numturn.removeAttribute('disabled')
    main_content.style.height = '264px'
    textarea.style.height = '220px'
    container.style.height = '220px'
    contentbt2.setAttribute('flag', '0')
    // main_content.style.postion='none'
    main_content.style.top = '100%'
    main_content.style.left = '0%'
    main_content.style.width = '170%'
    main_content.style.height = '264px'
    textarea.style.height = '220px'
    container.style.height = '220px'
}
close.onmouseover = function () {
    this.style.transition = 'all 0.25s'
    this.style.backgroundColor = 'red'
    this.style.color = 'white'
}
close.onmouseout = function () {
    this.style.backgroundColor = 'white'
    this.style.color = 'black'
}
// =================================================================================

//监听addinfo页面变大big事件以及cintain大小的事件
big.onmouseover = function () {
    this.style.transition = 'all 0.25s'
    this.style.color = 'white'
    this.style.backgroundColor = '#c7cacf'
}
big.onmouseout = function () {
    this.style.color = 'black'
    this.style.backgroundColor = 'white'
}
big.onclick = function () {
    if (this.getAttribute('flag') === '0') {
        this.setAttribute('flag', '1')
        addinfo.style.transition = 'all 0.2s'
        addinfo.style.left = '5%'
        addinfo.style.width = width1 + 'px'
        console.log(addinfo.style.width)
        addinfo.style.height = '100%'
        addinfo_body.style.transition = 'all 0.2s'
        addinfo_body.style.height = '665px'
        addinfo_body.style.backgroundColor = '#dbdbdb'
        main_content.style.transition = 'all 0.2s'
        textarea.style.transition = 'all 0.2s'
        container.style.transition = 'all 0.2s'
        // console.log(window.innerWidth)
        main_content.style.width = width2 + 'px'
        console.log(main_content.style.width)
        main_content.style.height = '342px'
        textarea.style.height = '295px'
        container.style.height = '295px'
    } else if (this.getAttribute('flag') === '1') {
        this.setAttribute('flag', '0')
        addinfo.style.left = 'calc(50% - 500px)'
        addinfo.style.width = '1000px'
        addinfo.style.height = '600px'
        addinfo_body.style.height = '550px'
        addinfo_body.style.backgroundColor = '#dbdbdb'
        // main_content.style.width = '130%'
        main_content.style.height = '264px'
        textarea.style.height = '220px'
        container.style.height = '220px'
        contentbt2.setAttribute('flag', '0')
        // main_content.style.postion='none'
        main_content.style.top = '100%'
        main_content.style.left = '0%'
        main_content.style.width = '170%'
        main_content.style.height = '264px'
        textarea.style.height = '220px'
        container.style.height = '220px'
    }
}
// =================================================================================
//注意，此处应该添加addinfo框消失时，里面的内容重置
//实现弹出添加公告（addinfo)框时，按esc使添加公告框消失
addinfo.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        info_nav.style.filter = 'none'
        info_body.style.filter = 'none'
        addinfo.style.display = 'none'
        big.setAttribute('flag', '0')
        addinfo.style.left = 'calc(50% - 500px)'
        addinfo.style.width = '1000px'
        addinfo.style.height = '600px'
        addinfo_body.style.height = '550px'
        addinfo_body.style.backgroundColor = '#dbdbdb'
        numturn.removeAttribute('disabled')
    }
});

// =================================================================================
//实现任务卡切换时的内容变化
tab1.onclick = function () {
    container.style.display = 'none'
    textarea.style.display = 'block'
    main_content.style.backgroundColor = '#dee1e6'
    contentbt1.style.display = 'block'
    contentbt2.style.display = 'none'
    contentbt3.style.display = 'none'
}
tab2.onclick = function () {
    container.style.display = 'block'
    textarea.style.display = 'none'
    main_content.style.backgroundColor = '#dee1e6'
    contentbt1.style.display = 'none'
    contentbt2.style.display = 'block'
    contentbt3.style.display = 'block'
}
// =================================================================================
//按钮的鼠标经过和移开的动画
contentbt1.onmouseover = function () {
    this.style.transition = 'all 0.25s'
    this.style.color = 'white'
    this.style.backgroundColor = '#c7cacf'
}
contentbt1.onmouseout = function () {
    this.style.color = 'black'
    this.style.backgroundColor = '#dee1e6'
}
contentbt2.onmouseover = function () {
    this.style.transition = 'all 0.25s'
    this.style.color = 'white'
    this.style.backgroundColor = '#c7cacf'
}
contentbt2.onmouseout = function () {
    this.style.color = 'black'
    this.style.backgroundColor = '#dee1e6'
}
contentbt3.onmouseover = function () {
    this.style.transition = 'all 0.25s'
    this.style.color = 'white'
    this.style.backgroundColor = '#c7cacf'
}
contentbt3.onmouseout = function () {
    this.style.color = 'black'
    this.style.backgroundColor = '#dee1e6'
}
contentbt2.onclick = function () {
    if (this.getAttribute('flag') === '0') {
        this.setAttribute('flag', '1')
        // main_content.style.postion='absolute'
        main_content.style.top = '-340%'
        main_content.style.left = '-13%'
        main_content.style.width = '200%'
        main_content.style.height = '597px'
        container.style.height = '555px'
    } else if (this.getAttribute('flag') === '1') {
        this.setAttribute('flag', '0')
        // main_content.style.postion='none'
        main_content.style.top = '100%'
        main_content.style.left = '0%'
        main_content.style.width = '170%'
        main_content.style.height = '264px'
        textarea.style.height = '220px'
        container.style.height = '220px'
    }
}
// =================================================================================
//实现添加公告的拖拽并且优化放大后再次拖拽的卡顿
var drag = document.getElementById("addinfo");
var offsetX, offsetY;
var isDragging = false;
var transform = {x: 0, y: 0};
drag.addEventListener("mousedown", function (event) {
    offsetX = event.clientX - transform.x;
    offsetY = event.clientY - transform.y;
    isDragging = true;
});
document.addEventListener("mousemove", function (event) {
    if (isDragging) {
        transform.x = event.clientX - offsetX;
        transform.y = event.clientY - offsetY;
        drag.style.transform = "translate(" + transform.x + "px, " + transform.y + "px)";
    }
});
document.addEventListener("mouseup", function (event) {
    isDragging = false;
});

textarea.addEventListener("mousedown", function(e) {
    e.stopPropagation();
});

var isDraggable = true;
textarea.addEventListener("focus", function() {
    isDraggable = false;
});
textarea.addEventListener("blur", function() {
    isDraggable = true;
});

