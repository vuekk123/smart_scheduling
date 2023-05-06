var divs = document.querySelector('.store_management').querySelector('.subnav').querySelector('.data').querySelectorAll('div')
var timenow = document.querySelector('.store_management').querySelector('.lefthead').querySelector('.time')
// console.log(divs);
var btn = document.getElementById('btn1')
var btn1 = document.getElementById('btn2')
var tbody = document.querySelector('.store_management').querySelector('table').querySelector('tbody')
shopname = '门店1'
for (let i = 0; i < divs.length; i++) {
    divs[i].setAttribute('index', i)
}
btn.addEventListener('mouseover',function (event){
    this.style.fontSize='25px'
    this.style.transform='translateX(20px)'
    this.style.transition='all 0.5s ease'
    setTimeout(() => {
        this.style.transform = 'translateX(-10px)';
        this.style.fontSize='10px'
        setTimeout(() => {
            this.style.fontSize='20px'
            this.style.transform='translateX(0px)'
        }, 500);
    }, 500);
})
btn1.addEventListener('mouseover',function (event){
    this.style.fontSize='25px'
    this.style.transform='translateX(-20px)'
    this.style.transition='all 0.5s ease'
    setTimeout(() => {
        this.style.transform = 'translateX(10px)';
        this.style.fontSize='10px'
        setTimeout(() => {
            this.style.fontSize='20px'
            this.style.transform='translateX(0px)'
        }, 500);
    }, 500);
})
var time = new Date();
var year = time.getFullYear();
var month = time.getMonth() + 1;
var day = time.getDate();
// var tmonth
// var tday
// if(month<10){
//     tmonth='0'+month
// }else {
//     tmonth=month
// }
// if(day<10){
//     tday='0'+day
// }else {
//     tday=day
// }
// timenow.innerHTML = year + '-' + tmonth + '-' + tday
var week = time.getDay();
var start = 0
if (week == 0) {
    start = getNextDate(time, -6)
} else {
    start = getNextDate(time, 1 - week)
}
// console.log(start);

//获取subnavtime的时间
function getNextDate(date, day) {
    var dd = new Date(date);
    dd.setDate(dd.getDate() + day);
    y = dd.getFullYear();
    var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
    var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
    return y + '-' + m + "-" + d;
};
var btnnum = 0
starts = new Array();
//====================================================
//获取三个div的开始时间
function beginday(btnnum) {
    starts[0] = getNextDate(start, (btnnum * 21))
    starts[1] = getNextDate(starts[0], 7);
    starts[2] = getNextDate(starts[1], 7)
    return starts
}

// console.log(starts);
startend = new Array();

//获取三个div结束的时间
function endday(btnnum) {
    startend[0] = getNextDate(starts[0], 6)
    startend[1] = getNextDate(starts[1], 6)
    startend[2] = getNextDate(starts[2], 6)
}

//遍历填充三个div的内容
for (let i = 0; i < divs.length; i++) {
    beginday(btnnum);
    endday(btnnum)
    divs[i].innerHTML = '周一 -- 周日<br>' + starts[i] + '--' + startend[i]
}
info = ''
num = 0

timenow.innerHTML = starts[0] + '--' + startend[0]

//左边按钮绑定点击事件
btnclick(divs)
btn.onclick = function () {
    btnnum--
    beginday(btnnum);
    endday(btnnum)
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.transition='all 0.3s ease-out'
        divs[i].style.transform='translateX(-333px)'
        divs[i].style.opacity='0'
        setTimeout(()=>{
            divs[i].innerHTML = '周一 -- 周日<br>' + starts[i] + '--' + startend[i]
            divs[i].style.transition='all 0s'
            divs[i].style.transform='translateX(333px)'
            divs[i].style.opacity='0'
        },300)
        setTimeout(()=>{
            divs[i].style.transition='all 0.3s ease-out'
            divs[i].style.transform='translateX(0px)'
            divs[i].style.opacity='1'
        },350)
    }
    btnclick(divs)
}
//右边按钮绑定点击事件
btn1.onclick = function () {
    btnnum++
    beginday(btnnum);
    endday(btnnum)
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.transition='all 0.3s ease-out'
        divs[i].style.transform='translateX(333px)'
        divs[i].style.opacity='0'
        setTimeout(()=>{
            divs[i].innerHTML = '周一 -- 周日<br>' + starts[i] + '--' + startend[i]
            divs[i].style.transition='all 0s'
            divs[i].style.transform='translateX(-333px)'
            divs[i].style.opacity='0'
        },300)
        setTimeout(()=>{
            divs[i].style.transition='all 0.3s ease-out'
            divs[i].style.transform='translateX(0px)'
            divs[i].style.opacity='1'
        },350)
    }
    btnclick(divs)
}
//三个div的鼠标移动事件
// for (let i = 0; i < divs.length; i++) {
//     divs[i].onmousemove = function () {
//         for (let j = 0; j < divs.length; j++) {
//             if (divs[j].style.borderBottom != '2px solid black') {
//                 divs[j].style.borderBottom = '1px solid white'
//             }
//         }
//         if (divs[i].style.borderBottom != '2px solid black') {
//             divs[i].style.borderBottom = '2px solid blue'
//         }
//
//     }
// }
var ths = document.querySelector('#selectByDay').querySelector('thead').querySelector('tr').querySelectorAll('th')
for (var i = 0; i < ths.length; i++) {
    ths[i].innerHTML = ths[i].innerHTML + '<br>' + '<br>' + getNextDate(starts[0], i)
}

//我他妈直接请求改写ajaxweek
// setday(ths)
thmouseover()
turnajaxday(ths)
var findday = ''
for (var i = 0; i < ths.length; i++) {
    var finday = ''
    for (var j = 2; j < ths[i].innerText.length; j++) {
        finday += ths[i].innerText[j]
    }
    ths[i].setAttribute('findday', finday)
}


//测试，后面要改成第一个
// var findweek = shopname+'--'+ths[0].getAttribute('findday')+'--'+ths[6].getAttribute('findday')
// alert(findweek)
var findweek = '门店1' + '--' + '2023-01-02' + '--' + '2023-01-08'
// swal("findweek", findweek)
//=================================================================================================

var date3 = '周一 -- 周日2023-01-02--2023-01-08'
$.ajax({
    data: {date: findweek},
    type: "get",
    dataType: "json",
    url: "ViewByWeek",
    success: function (data) {
        max = 0
        for (var j = 0; j < data.length; j++) {
            if (data[j].length > max) {
                max = data[j].length
            }
        }
        for (var j = 0; j < max; j++) {
            var formday = document.createElement('tr')
            for (var k = 0; k < 7; k++) {
                var formtd = document.createElement('td')
                formday.append(formtd)
            }
            tbody.append(formday)
        }

        var newtr = tbody.querySelectorAll('tr')
        for (var j = 0; j < data.length; j++) {
            for (var k = 0; k < data[j].length; k++) {
                newtr[k].querySelectorAll('td')[j].setAttribute('open_time', data[j][k].open_time)
                newtr[k].querySelectorAll('td')[j].setAttribute('end_time', data[j][k].end_time)
                newtr[k].querySelectorAll('td')[j].setAttribute('name', data[j][k].name)
                newtr[k].querySelectorAll('td')[j].setAttribute('position', data[j][k].position)
                newtr[k].querySelectorAll('td')[j].innerHTML = '店员名字：' + data[j][k].name + '<br>' + '时间：' + data[j][k].open_time + '-' + data[j][k].end_time + '<br>' + '职位：' + data[j][k].position
            }
        }
        row=[]
        beginnum = []
        numcount = []
        for (var j = 0; j < 7; j++) {
            var k = 0
            var begin = 0
            var num = 0
            while (k < newtr.length - 1) {
                if (newtr[k].querySelectorAll('td')[j].getAttribute('name') === newtr[k + 1].querySelectorAll('td')[j].getAttribute('name')) {
                    begin = k
                    row.push(j)
                    beginnum.push(k)
                    for (var l = begin + 1; l < newtr.length; l++) {
                        if (newtr[l].querySelectorAll('td')[j].getAttribute('name') === newtr[begin].querySelectorAll('td')[j].getAttribute('name')) {
                            num++
                        } else if (newtr[l].querySelectorAll('td')[j].getAttribute('name') !== newtr[begin].querySelectorAll('td')[j].getAttribute('name')) {
                            break
                        }
                    }
                }
                k = k + num + 1
                if (num !== 0) {
                    numcount.push(num)
                }
                num = 0
            }
        }
        // console.log(numcount)
        for (var j = 0; j < beginnum.length; j++) {

            newtr[beginnum[j]].querySelectorAll('td')[row[j]].innerHTML = '店员名字：' + newtr[beginnum[j]].querySelectorAll('td')[row[j]].getAttribute('name') +
                '<br>' + '时间' + newtr[beginnum[j]].querySelectorAll('td')[row[j]].getAttribute('open_time') + '-' + newtr[beginnum[j] + numcount[j]].querySelectorAll('td')[row[j]].getAttribute('end_time')
                + '<br>' + '职位：' + newtr[beginnum[j]].querySelectorAll('td')[row[j]].getAttribute('position')
            newtr[beginnum[j]].querySelectorAll('td')[row[j]].setAttribute('rowspan',numcount[j]+1)
            for (var k = 1; k <= numcount[j]; k++) {
                newtr[beginnum[j]+k].querySelectorAll('td')[row[j]].style.display='none'
            }
        }
    },
    // error: function () {
    //     alert('失败')
    //
    // }
})

function thmouseover() {
    var x = 10;
    var y = 20;
    $('thead>tr>th').mouseover(function (e) {
        $('body').append('<div id="mytitle" >' + '<span class="dayinfo"></span>' + "<br/>" + '<span class="finddayform"></span>' + '</div>');
        // alert(this.innerHTML)
        var infoday = this.innerText
        $('.dayinfo').text('')
        $('.finddayform').text('')
        $('.dayinfo').text(infoday)
        $('.finddayform').text('点击查看')

        $('#mytitle').css({
            'left': (e.pageX + x + 'px'),
            'top': (e.pageY + y - 80 + 'px')
        }).show();
    }).mouseout(function () {
        $('#mytitle').remove();
    }).mousemove(function (e) {
        $('#mytitle').css({
            'left': (e.pageX + x + 10 + 'px'),
            'top': (e.pageY + y - 20 + 'px')
        }).show();
    })
}

// function setday(newtheadth) {
//     for (var j = 0; j < newtheadth.length; j++) {
//         // alert(newtheadth[j].innerText)
//         var day = ''
//         for (var w = 2; w < newtheadth[j].innerText.length; w++) {
//             day=day+newtheadth[j].innerText[w]
//         }
//         newtheadth[j].setAttribute('day', day)
//     }
//     // ajaxweek('周一 -- 周日2023-01-02--2023-01-08')
// }

function turnajaxday(newtheadth) {
    for (var y = 0; y < newtheadth.length; y++) {
        newtheadth[y].onclick = function () {
            // var year = ''
            // for (var j = 10; j < 14; j++) {
            //     // alert(this.innerHTML[j])
            //     year = year + this.innerHTML[j]
            //     // console.log(year)
            // }
            // var year = this.innerHTML[18]
            timenow.innerHTML = this.getAttribute('findday')
            var find = shopname+'--'+timenow.innerHTML
            // alert(find)
            ajaxday(find)
            $('#mytitle').remove();
            for (var i = 0; i < divs.length; i++) {
                divs[i].style.borderBottom = 'none'
            }
        }
    }
}

getshopname()
// swal({
//         title: "确定删除吗？",
//         text: "你将无法恢复恢复该人员排此次版班次！",
//         type: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#DD6B55",
//         confirmButtonText: "确定删除！",
//         cancelButtonText: "取消删除！",
//         closeOnConfirm: false,
//         closeOnCancel: false
//     },
//     function(isConfirm){
//         if (isConfirm) {
//             swal("删除！", "该人员班次已删除",
//                 "success");
//         } else {
//             swal("取消！", "删除操作未执行:)",
//                 "error");
//         }
//     });

function btnclick(divs) {
    // alert(shopname)
    if (divs[num] != info) {
        divs[num].style.border = 'none'
    }
    for (let i = 0; i < divs.length; i++) {
        divs[i].onclick = function () {
            for (let j = 0; j < divs.length; j++) {
                divs[j].style.borderBottom = '1px solid white'
            }
            divs[i].style.borderBottom = '2px solid black'
            info = divs[i].innerText
            num = i

            timenow.innerHTML = starts[i] + '--' + startend[i]
            //按周查看
            var findday = ''
            for (var j = 12; j < divs[i].innerHTML.length; j++) {
                findday += divs[i].innerHTML[j]
            }
            var trs = document.querySelector('.store_management').querySelector('tbody').querySelectorAll('tr')
            var tbody = document.querySelector('#selectByDay').querySelector('tbody')
            var theadtr = document.querySelector('#selectByDay').querySelector('thead').querySelector('tr')
            var theadth = theadtr.querySelectorAll('th')
            // console.log(theadth)
            for (var j = trs.length - 1; j >= 0; j--) {
                tbody.removeChild(trs[j]);
            }
            for (var j = theadth.length - 1; j >= 0; j--) {
                theadtr.removeChild(theadth[j])
            }
            for (var j = 0; j < 7; j++) {
                var weekday = document.createElement('th')
                if (j === 0) {
                    weekday.innerHTML = '周一'
                }
                if (j === 1) {
                    weekday.innerHTML = '周二'
                }
                if (j === 2) {
                    weekday.innerHTML = '周三'
                }
                if (j === 3) {
                    weekday.innerHTML = '周四'
                }
                if (j === 4) {
                    weekday.innerHTML = '周五'
                }
                if (j === 5) {
                    weekday.innerHTML = '周六'
                }
                if (j === 6) {
                    weekday.innerHTML = '周日'
                }
                theadtr.append(weekday)
            }
            var newtheadth = theadtr.querySelectorAll('th')
            for (var j = 0; j < newtheadth.length; j++) {
                newtheadth[j].innerHTML = newtheadth[j].innerHTML + '<br>' + '<br>' + getNextDate(starts[i], j)
            }
            // for (var j = 0; j < newtheadth.length; j++) {
            //     // alert(newtheadth[j].innerText)
            //     var day = ''
            //     for (var w = 4; w < newtheadth[j].innerText.length; w++) {
            //         day=day+newtheadth[j].innerText[w]
            //     }
            //     newtheadth[j].setAttribute('day', day)
            // }
            turnajaxday(newtheadth)
            thmouseover()
            // var date2 = shopname+'--'+findday;
            var date2 = divs[i].innerText
            for (var j = 0; j < newtheadth.length; j++) {
                var finday = ''
                for (var k = 4; k < newtheadth[j].innerText.length; k++) {
                    finday += newtheadth[j].innerText[k]
                }
                newtheadth[j].setAttribute('findday', finday)
            }

            var findweek = shopname + '--' + newtheadth[0].getAttribute('findday') + '--' + newtheadth[6].getAttribute('findday')
            swal('查询周信息', findweek)
            $.ajax({
                data: {date: findweek},
                type: "get",
                dataType: "json",
                url: "ViewByWeek",
                success: function (data) {
                    var tbody  = document.querySelector(".store_management").querySelector('#selectByDay').querySelector('tbody')
                    var tr = document.querySelector(".store_management").querySelector('#selectByDay').querySelector('tbody').querySelectorAll('tr')
                    // console.log(tr)
                    for (var j = tr.length-1; j >=0 ; j--) {
                        tbody.removeChild(tr[j])
                    }
                    max = 0
                    for (var j = 0; j < data.length; j++) {
                        if (data[j].length > max) {
                            max = data[j].length
                        }
                    }
                    for (var j = 0; j < max; j++) {
                        var formday = document.createElement('tr')
                        for (var k = 0; k < 7; k++) {
                            var formtd = document.createElement('td')
                            formday.append(formtd)
                        }
                        tbody.append(formday)
                    }

                    var newtr = tbody.querySelectorAll('tr')
                    for (var j = 0; j < data.length; j++) {
                        for (var k = 0; k < data[j].length; k++) {
                            newtr[k].querySelectorAll('td')[j].setAttribute('open_time', data[j][k].open_time)
                            newtr[k].querySelectorAll('td')[j].setAttribute('end_time', data[j][k].end_time)
                            newtr[k].querySelectorAll('td')[j].setAttribute('name', data[j][k].name)
                            newtr[k].querySelectorAll('td')[j].setAttribute('position', data[j][k].position)
                            newtr[k].querySelectorAll('td')[j].innerHTML = '店员名字：' + data[j][k].name + '<br>' + '时间：' + data[j][k].open_time + '-' + data[j][k].end_time + '<br>' + '职位：' + data[j][k].position
                        }
                    }
                    row=[]
                    beginnum = []
                    numcount = []
                    for (var j = 0; j < 7; j++) {
                        var k = 0
                        var begin = 0
                        var num = 0
                        while (k < newtr.length - 1) {
                            if (newtr[k].querySelectorAll('td')[j].getAttribute('name') === newtr[k + 1].querySelectorAll('td')[j].getAttribute('name')) {
                                begin = k
                                row.push(j)
                                beginnum.push(k)
                                for (var l = begin + 1; l < newtr.length; l++) {
                                    if (newtr[l].querySelectorAll('td')[j].getAttribute('name') === newtr[begin].querySelectorAll('td')[j].getAttribute('name')) {
                                        num++
                                    } else if (newtr[l].querySelectorAll('td')[j].getAttribute('name') !== newtr[begin].querySelectorAll('td')[j].getAttribute('name')) {
                                        break
                                    }
                                }
                            }
                            k = k + num + 1
                            if (num !== 0) {
                                numcount.push(num)
                            }
                            num = 0
                        }
                    }
                    // console.log(numcount)
                    var index = 0
                    for (var j = 0; j < beginnum.length; j++) {

                        newtr[beginnum[j]].querySelectorAll('td')[row[j]].innerHTML = '店员名字：' + newtr[beginnum[j]].querySelectorAll('td')[row[j]].getAttribute('name') +
                            '<br>' + '时间' + newtr[beginnum[j]].querySelectorAll('td')[row[j]].getAttribute('open_time') + '-' + newtr[beginnum[j] + numcount[j]].querySelectorAll('td')[row[j]].getAttribute('end_time')
                            + '<br>' + '职位：' + newtr[beginnum[j]].querySelectorAll('td')[row[j]].getAttribute('position')
                        newtr[beginnum[j]].querySelectorAll('td')[row[j]].setAttribute('rowspan',numcount[j]+1)
                        newtr[beginnum[j]].querySelectorAll('td')[row[j]].style.lineHeight=(numcount[j]*100)+'px'
                        for (var k = 1; k <= numcount[j]; k++) {
                            newtr[beginnum[j]+k].querySelectorAll('td')[row[j]].style.display='none'
                        }
                    }


                },
                error: function (){
                    alert("失败")
                }
            })
        }
    }
}


function getshopname() {
    var select =document.querySelector('.store_management').querySelector('.head').querySelector('#formname')
    // var select = document.querySelector('select')
    // console.log(timenow.innerHTML)
    select.onchange = function () {
        if(timenow.innerHTML.length>16) {
            var indexs = select.selectedIndex;
            shopname = select.options[indexs].value
            // swal('门店名', shopname)
            var thnext = document.querySelector('#selectByDay').querySelector('thead').querySelector('tr').querySelectorAll('th')
            for (var i = 0; i < thnext.length; i++) {
                var finday = ''
                for (var j = 4; j < thnext[i].innerText.length; j++) {
                    finday += thnext[i].innerText[j]
                }
                thnext[i].setAttribute('findday', finday)
            }
            var findweek = shopname + '--' + thnext[0].getAttribute('findday') + '--' + thnext[6].getAttribute('findday')

            swal("查询信息", findweek)
            ajaxweek(findweek)
        }else if(timenow.innerHTML.length<16){

            var indexs = select.selectedIndex;
            shopname = select.options[indexs].value
            var find = shopname+'--'+timenow.innerHTML
            ajaxday(find)
        }
    }
}

// alert(shopname)
var data = document.querySelector('.store_management').querySelector('.subnav').querySelector('.data')
data.onmouseout = function () {
    for (let i = 0; i < divs.length; i++) {
        if (divs[i].style.borderBottom != '2px solid black') {
            divs[i].style.borderBottom = 'none'
        }
    }
}
var subnav = document.querySelector('.store_management').querySelector('.subnav')
subnav.onmouseout = function () {
    for (let j = 0; j < divs.length; j++) {
        if (divs[j].style.borderBottom != '2px solid black') {
            divs[j].style.borderBottom = 'none'
        }
    }
}
var finds = document.querySelector('.store_management').querySelector('.lefthead').querySelector('.find').querySelectorAll('div')
// console.log(finds);

for (let i = 0; i < finds.length; i++) {
    finds[i].onclick = function () {

        for (let j = 0; j < finds.length; j++) {
            finds[j].style.color = 'black'
        }
        if (i == 0 || i == 2) {
            finds[i].style.color = 'blue'
        }
    }
}
var subnav = document.querySelector('.store_management').querySelector('.subnav')
var data = document.querySelector('.store_management').querySelector('.subnav').querySelector('.data')
var dayfind = subnav.querySelector('.dayfind')
var everyday = dayfind.querySelector('.dayfindhead').querySelector('.everyday')
var monthnow = dayfind.querySelector('.dayfindhead').querySelector('.monthnow')
var left = dayfind.querySelector('.dayfindhead').querySelector('.left')
var right = dayfind.querySelector('.dayfindhead').querySelector('.right')
kmonth = month
kyear = year
var daylength = 0

function getdays(kmonth, kyear) {
    if (kmonth == 1 || kmonth == 3 || kmonth == 5 || kmonth == 7 || kmonth == 8 || kmonth == 10 || kmonth == 12) {
        daylength = 31
    } else if (kmonth == 4 || kmonth == 6 || kmonth == 9 || kmonth == 11) {
        daylength = 30
    } else if (kmonth == 2 && ((kyear % 4 == 0 && kyear % 100 != 0) || (kyear % 400 == 0))) {
        daylength = 29
    } else {
        daylength = 28
    }
    return daylength
}

function geteveryday(kmonth, kyear) {
    var divnum = everyday.getElementsByTagName('div')
    for (var i = divnum.length - 1; i >= 0; i--) {
        everyday.removeChild(divnum[i]);
    }
    for (let j = 0; j < getdays(kmonth, kyear); j++) {
        var edays = document.createElement('div')
        everyday.appendChild(edays)
    }
    var amonth = 0
    if(kmonth<10){
        amonth='0'+kmonth
    }else {
        amonth=kmonth
    }
    monthnow.innerHTML = kyear + '-' + amonth
    var daydivs = everyday.querySelectorAll('div')
    for (let q = 0; q < getdays(kmonth, kyear); q++) {
        daydivs[q].innerHTML = ''
    }
    for (let k = 0; k < getdays(kmonth, kyear); k++) {
        kday = k + 1
        daydivs[k].innerHTML = kday
    }
}
var head = document.querySelector('.store_management').querySelector('.head')
var find = document.querySelector('.store_management').querySelector('.lefthead').querySelector('.find')
var select = document.querySelector('select')
head.addEventListener('click',function(){
    for (let j = 0; j < finds.length; j++) {
        finds[j].style.color = 'black'
    }
    finds[2].style.color = 'blue'
    subnav.style.transition = 'all 0.5s'
    subnav.style.width = '60%'
    subnav.style.height = '70px'
    subnav.style.top = '30%'
    subnav.style.marginLeft = '4%'
    subnav.style.fontSize = '12px'
    data.style.display = 'block'
    dayfind.style.display = 'none'
    btn.style.display = 'block'
    btn1.style.display = 'block'
})
find.addEventListener('click',function (find){
    var e=find||window.find;
    if(e.cancelBubble){
        e.cancelBubble=true;
    }else{
        e.stopPropagation();
    }
})
subnav.addEventListener('click',function (subnav){
    var e=subnav||window.subnav;
    if(e.cancelBubble){
        e.cancelBubble=true;
    }else{
        e.stopPropagation();
    }
})
select.addEventListener('click',function (select){
    var e=select||window.select;
    if(e.cancelBubble){
        e.cancelBubble=true;
    }else{
        e.stopPropagation();
    }
})

for (let i = 0; i < finds.length; i++) {
    finds[2].style.color = 'blue'
    if (i == 0) {
        finds1(i)
        function finds1(i) {
            finds[i].onclick = function () {
                subnav.style.transition = 'all 0.5s'
                subnav.style.width = '450px'
                subnav.style.height = '150px'
                subnav.style.marginLeft = '10px'
                subnav.style.top = '-5%'
                subnav.style.overflow = 'hidden'
                subnav.style.fontSize = '14px'
                data.style.display = 'none'
                dayfind.style.display = 'block'
                btn.style.display = 'none'
                btn1.style.display = 'none'
                subnav.style.border='1px solid black'
                subnav.style.borderRadius='10px'
                for (let j = 0; j < finds.length; j++) {
                    finds[j].style.color = 'black'
                }
                finds[i].style.color = 'blue'
                geteveryday(kmonth, kyear)
                mousemove(kmonth, kyear)
                left.onclick = function () {
                    if (kmonth == 1) {
                        kmonth = 12
                        kyear--
                    } else {
                        kmonth--
                    }
                    geteveryday(kmonth, kyear)
                    mousemove(kmonth, kyear)
                }
                right.onclick = function () {
                    if (kmonth == 12) {
                        kmonth = 1
                        kyear++
                    } else {
                        kmonth++
                    }
                    geteveryday(kmonth, kyear)
                    mousemove(kmonth, kyear)
                }

                function mousemove(kmonth, kyear) {
                    subnav.onmouseout = function () {
                        for (let m = 0; m < everyday.getElementsByTagName('div').length; m++) {
                            everyday.getElementsByTagName('div')[m].style.backgroundColor = 'white'
                        }
                    }
                    for (let b = 0; b < everyday.getElementsByTagName('div').length; b++) {
                        everyday.getElementsByTagName('div')[b].onmousemove = function () {
                            for (let m = 0; m < everyday.getElementsByTagName('div').length; m++) {
                                // everyday.getElementsByTagName('div')[m].style.backgroundColor = 'antiquewhite'
                            }
                            everyday.getElementsByTagName('div')[b].style.backgroundColor = 'blue'
                        }
                    }
                    for (let b = 0; b < everyday.getElementsByTagName('div').length; b++) {
                        everyday.getElementsByTagName('div')[b].onclick = function () {

                            //按日查看
                            // alert(kmonth + '-' + (b + 1))
                            if(kmonth<10){
                                kmonth='0'+kmonth
                            }
                            dayday=(b+1)
                            if((b+1)<10){
                                dayday='0'+(b+1)
                            }
                            var date = shopname+'--'+kyear+'-'+kmonth + '-' + dayday
                            timenow.innerHTML = kyear + '-' + kmonth + '-' + dayday
                            swal('查询日信息',shopname+'--'+timenow.innerHTML)
                            // alert(date)
                            ajaxday(date)

                            // 发送ajax请求


                            // timenow.innerHTML = kyear + '-' + kmonth + '-' + (b + 1)
                            subnav.style.transition = 'all 0.5s'
                            subnav.style.transition = 'all 0.5s'
                            subnav.style.width = '60%'
                            subnav.style.height = '70px'
                            subnav.style.top = '30%'
                            subnav.style.marginLeft = '4%'
                            subnav.style.fontSize = '12px'
                            data.style.display = 'block'
                            for (let l = 0; l < divs.length; l++) {
                                divs[l].style.borderBottom = 'none'
                            }
                            dayfind.style.display = 'none'
                            btn.style.display = 'block'
                            btn1.style.display = 'block'
                            finds[0].style.color = 'black'
                            finds[2].style.color = 'blue'
                        }
                    }
                }
            }
        }


    }
    if (i == 2) {
        finds2(i)

        function finds2(i) {
            finds[i].onclick = function () {
                for (let j = 0; j < finds.length; j++) {
                    finds[j].style.color = 'black'
                }
                finds[i].style.color = 'blue'
                subnav.style.transition = 'all 0.5s'
                subnav.style.width = '60%'
                subnav.style.height = '70px'
                subnav.style.top = '30%'
                subnav.style.marginLeft = '5%'
                subnav.style.fontSize = '12px'
                data.style.display = 'block'
                dayfind.style.display = 'none'
                btn.style.display = 'block'
                btn1.style.display = 'block'
                subnav.style.border='none'
                subnav.style.borderRadius='none'
            }
        }
    }
    function ajaxday(date) {
        $.ajax({
            data: {date: date},
            type: "get",
            dataType: "json",
            url: "ViewByDay",
            success: function (data) {
                swal("查询日信息", date)
                // alert(date)
                // console.log('传来的数据：')
                // console.log(data)
                // console.log('截止')
                var trs = document.querySelector('.store_management').querySelector('#selectByDay').querySelector('tbody').querySelectorAll('tr')
                var tbody = document.querySelector('.store_management').querySelector('#selectByDay').querySelector('tbody')
                var theadtr = document.querySelector('.store_management').querySelector('#selectByDay').querySelector('thead').querySelector('tr')
                var theadth = theadtr.querySelectorAll('th')
                // console.log(theadth)
                for (var j = trs.length - 1; j >= 0; j--) {
                    tbody.removeChild(trs[j]);
                }
                for (var j = theadth.length - 1; j >= 0; j--) {
                    theadtr.removeChild(theadth[j])
                }
                var worktime = []
                for (var j = 0; j < data.length; j++) {
                    var work = data[j].open_time + '-' + data[j].end_time
                    if (worktime.length === 0) {
                        worktime.push(work)
                    }
                    if (worktime.length !== 0) {
                        for (var k = 0; k < worktime.length; k++) {
                            flag = 0
                            if (worktime[k] !== work) {
                                flag = 1
                            } else if (work === worktime[k]) {
                                break
                            }
                        }
                        if (flag === 1) {
                            worktime.push(work)
                        }
                    }
                }
                var worker = []
                for (var j = 0; j < data.length; j++) {
                    var people = data[j].name
                    console.log(people)
                    if (worker.length === 0) {
                        worker.push(people)
                    }
                    if (worker.length !== 0) {
                        for (var k = 0; k < worker.length; k++) {
                            workerflag = 0
                            if (people !== worker[k]) {
                                workerflag = 1
                            } else if (people === worker[k]) {
                                break
                            }
                        }
                        if (workerflag === 1) {
                            worker.push(people)
                        }
                    }
                }
                console.log(worktime)
                console.log(worker)

                for (var j = 0; j <= worker.length; j++) {
                    var th = document.createElement('th')
                    theadtr.append(th)
                }
                var newth = theadtr.querySelectorAll('th')
                for (var j = 1; j < newth.length; j++) {
                    newth[j].setAttribute('name', worker[j - 1])
                    newth[j].innerHTML = worker[j - 1]
                }
                for (var j = 0; j < worktime.length; j++) {
                    var time = '2002'+' '+'4'+' '+'2'+' '
                    var timehour = ''
                    for (var k = 0; k <5 ; k++) {
                        timehour+=worktime[j][k]
                    }
                    var time1= new Date(time+timehour)
                    var timehour1=''
                    for (var k = 6; k <11 ; k++) {
                        timehour1+=worktime[j][k]
                    }
                    var time2 = new Date(time+timehour1)
                    var trnum = (time2-time1)/(30*60*1000)
                    for (var k = 0; k < trnum; k++) {
                        var tr = document.createElement('tr')
                        tr.setAttribute('time', worktime[j])
                        var timenew = new Date(time1.getTime()+k*(30*60*1000))
                        var timemin = timenew.getMinutes()
                        if(timemin===0){
                            timemin+='0'
                        }
                        tr.setAttribute('info',timenew.getHours()+':'+timemin)
                        tbody.append(tr)
                    }
                }
                var newtr = tbody.querySelectorAll('tr')

                for (var j = 0; j < newtr.length; j++) {
                    // var setname = worker[j]
                    for (var k = 0; k <= worker.length; k++) {
                        var td = document.createElement('td')
                        newtr[j].append(td)
                    }
                }
                for (var j = 0; j < newtr.length; j++) {
                    // var setname = worker[j]
                    for (var k = 1; k <= worker.length; k++) {
                        newtr[j].querySelectorAll('td')[k].setAttribute('name', worker[k - 1])
                    }
                }
                // var newtr = tbody.querySelectorAll('tr')
                for (var j = 0; j < newtr.length; j++) {
                    if(j<newtr.length-1){
                        newtr[j].querySelector('td').innerHTML = newtr[j].getAttribute('info')+'-'+newtr[j+1].getAttribute('info')
                    }
                    else if(j===newtr.length-1){
                        var time3 = '2002'+' '+'4'+' '+'2'+' '
                        var timehour3 = ''
                        for (var k = 6; k <11 ; k++) {
                            timehour3+=newtr[j].getAttribute('time')[k]
                        }
                        var time4 = new Date(time3+timehour3)
                        var lastminute = time4.getMinutes()
                        if(lastminute===0){
                            lastminute+='0'
                        }
                        newtr[j].querySelector('td').innerHTML = newtr[j].getAttribute('info')+'-'+time4.getHours()+':'+lastminute
                    }
                }
                for (var j = 0; j < data.length; j++) {
                    var workername = data[j].name
                    var workertime = data[j].open_time + '-' + data[j].end_time
                    var workerposition = data[j].position
                    for (var k = 0; k < newtr.length; k++) {
                        if (newtr[k].getAttribute('time') === workertime) {
                            // console.log(newtr[k].getAttribute('time') === workertime)
                            for (var l = 0; l < newtr[k].querySelectorAll('td').length; l++) {
                                if (newtr[k].querySelectorAll('td')[l].getAttribute('name') === workername) {
                                    newtr[k].querySelectorAll('td')[l].innerHTML = workername + '<br>' + workerposition
                                }
                            }
                        }
                    }
                }
                console.log(newth)
                console.log(newtr)
                for (var j = 1; j < newth.length; j++) {
                    for (var k = 1; k < newtr.length; k++) {
                        if(newtr[k].querySelectorAll('td')[j].innerHTML!=='') {
                            if (newtr[k - 1].querySelectorAll('td')[j].innerHTML === newtr[k].querySelectorAll('td')[j].innerHTML) {
                                newtr[k - 1].querySelectorAll('td')[j].style.borderBottom = 'none'
                            }
                        }
                    }
                }
                cro=[]
                beginnum1 = []
                numcount1 = []
                for (var j = 1; j < newth.length; j++) {
                    var k = 0
                    var begin = 0
                    var num = 0
                    while (k < newtr.length - 1) {
                        if(newtr[k].querySelectorAll('td')[j].innerHTML!=='') {
                            if (newtr[k].querySelectorAll('td')[j].innerHTML === newtr[k + 1].querySelectorAll('td')[j].innerHTML) {
                                begin = k
                                beginnum1.push(k)
                                cro.push(j)
                                for (var l = begin + 1; l < newtr.length; l++) {
                                    if (newtr[l].querySelectorAll('td')[j].innerHTML === newtr[begin].querySelectorAll('td')[j].innerHTML) {
                                        num++
                                    } else if (newtr[l].querySelectorAll('td')[j].innerHTML !== newtr[begin].querySelectorAll('td')[j].innerHTML) {
                                        break
                                    }
                                }
                            }
                        }
                        k = k + num + 1
                        if (num !== 0) {
                            numcount1.push(num)
                        }
                        num = 0
                    }
                }
                console.log(cro)
                console.log(beginnum1)
                console.log(numcount1)
                var index = 1
                for (var j = 0; j < beginnum1.length; j++) {

                    for (var k = 1; k <= numcount1[j]; k++) {
                        newtr[beginnum1[j] + k].querySelectorAll('td')[cro[j]].innerHTML = ''
                    }
                }

            },
            error: function (data) {
                alert("失败")
            }
        })
    }

    function ajaxweek(findweek)  {
        $.ajax({
            data: {date: findweek},
            type: "get",
            dataType: "json",
            url: "ViewByWeek",
            success: function (data) {
                var tbody  = document.querySelector(".store_management").querySelector('#selectByDay').querySelector('tbody')
                var tr = document.querySelector(".store_management").querySelector('#selectByDay').querySelector('tbody').querySelectorAll('tr')
                // console.log(tr)
                for (var j = tr.length-1; j >=0 ; j--) {
                    tbody.removeChild(tr[j])
                }
                max = 0
                for (var j = 0; j < data.length; j++) {
                    if (data[j].length > max) {
                        max = data[j].length
                    }
                }
                for (var j = 0; j < max; j++) {
                    var formday = document.createElement('tr')
                    for (var k = 0; k < 7; k++) {
                        var formtd = document.createElement('td')
                        formday.append(formtd)
                    }
                    tbody.append(formday)
                }

                var newtr = tbody.querySelectorAll('tr')
                for (var j = 0; j < data.length; j++) {
                    for (var k = 0; k < data[j].length; k++) {
                        newtr[k].querySelectorAll('td')[j].setAttribute('open_time', data[j][k].open_time)
                        newtr[k].querySelectorAll('td')[j].setAttribute('end_time', data[j][k].end_time)
                        newtr[k].querySelectorAll('td')[j].setAttribute('name', data[j][k].name)
                        newtr[k].querySelectorAll('td')[j].setAttribute('position', data[j][k].position)
                        newtr[k].querySelectorAll('td')[j].innerHTML = '店员名字：' + data[j][k].name + '<br>' + '时间：' + data[j][k].open_time + '-' + data[j][k].end_time + '<br>' + '职位：' + data[j][k].position
                    }
                }
                row=[]
                beginnum = []
                numcount = []
                for (var j = 0; j < 7; j++) {
                    var k = 0
                    var begin = 0
                    var num = 0
                    while (k < newtr.length - 1) {
                        if (newtr[k].querySelectorAll('td')[j].getAttribute('name') === newtr[k + 1].querySelectorAll('td')[j].getAttribute('name')) {
                            begin = k
                            row.push(j)
                            beginnum.push(k)
                            for (var l = begin + 1; l < newtr.length; l++) {
                                if (newtr[l].querySelectorAll('td')[j].getAttribute('name') === newtr[begin].querySelectorAll('td')[j].getAttribute('name')) {
                                    num++
                                } else if (newtr[l].querySelectorAll('td')[j].getAttribute('name') !== newtr[begin].querySelectorAll('td')[j].getAttribute('name')) {
                                    break
                                }
                            }
                        }
                        k = k + num + 1
                        if (num !== 0) {
                            numcount.push(num)
                        }
                        num = 0
                    }
                }
                // console.log(numcount)
                var index = 0
                for (var j = 0; j < beginnum.length; j++) {

                    newtr[beginnum[j]].querySelectorAll('td')[row[j]].innerHTML = '店员名字：' + newtr[beginnum[j]].querySelectorAll('td')[row[j]].getAttribute('name') +
                        '<br>' + '时间' + newtr[beginnum[j]].querySelectorAll('td')[row[j]].getAttribute('open_time') + '-' + newtr[beginnum[j] + numcount[j]].querySelectorAll('td')[row[j]].getAttribute('end_time')
                        + '<br>' + '职位：' + newtr[beginnum[j]].querySelectorAll('td')[row[j]].getAttribute('position')
                    newtr[beginnum[j]].querySelectorAll('td')[row[j]].setAttribute('rowspan',numcount[j]+1)
                    for (var k = 1; k <= numcount[j]; k++) {
                        newtr[beginnum[j]+k].querySelectorAll('td')[row[j]].style.display='none'
                    }
                }


            },
            error: function (){
                alert("失败")
            }
        })
    }
}

