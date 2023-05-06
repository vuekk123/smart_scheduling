//2023.3.29
//kang

//获取页面元素
var user = document.querySelector('.page').querySelector('.container').querySelector('.column').querySelector('.user')
var peopleManage = document.querySelector('.people_manage')
var peopleManage_body = peopleManage.querySelector('.peopleManage_body')
var peoplelist = peopleManage_body.querySelector('.peoplelist')
var peopleManage_addpPeoplebtn = peopleManage_body.querySelector('.peopleManage_addpPeoplebtn')
var addpeople_info = peopleManage.querySelector('.addpeople_info')
var addpeople_close = addpeople_info.querySelector('.addpeople_close')
var peoplearticle = addpeople_info.querySelector('form')
var addpeopleFrom_body = peoplearticle.querySelector('.addpeopleFrom_body')
var articleinput = addpeopleFrom_body.querySelectorAll('input')
var people_reset = peoplearticle.querySelector('#people_reset')
var people_sub = peoplearticle.querySelector('#people_sub')
var addpeopleForm_sele = peoplearticle.querySelectorAll('select')
var addpeople_name = addpeopleFrom_body.querySelector('#addpeople_name')
var addpeople_sex = addpeopleFrom_body.querySelector('#addpeople_sex')
var addpeople_age = addpeopleFrom_body.querySelector('#addpeople_age')
var addpeople_telephone = addpeopleFrom_body.querySelector('#addpeople_telephone')
var addpeople_email = addpeopleFrom_body.querySelector('#addpeople_email')
var addpeople_postion = addpeopleFrom_body.querySelector('#addpeople_postion')
var peopleManage_moveworker = document.querySelectorAll('#peopleManage_moveworker')
var peopleManage_numTurn = peopleManage_body.querySelector('.peopleManage_numTurn')
var peopleManage_numTurnfir = peopleManage_numTurn.querySelector('.peopleManage_numTurnfir')
var peopleManage_left = peopleManage_numTurnfir.querySelector('.peopleManage_left')
var peopleManage_pagenow = peopleManage_numTurnfir.querySelector('.peopleManage_pagenow')
var peopleManage_right = peopleManage_numTurnfir.querySelector('.peopleManage_right')
var peopleManage_numTurntir = peopleManage_numTurn.querySelector('.peopleManage_numTurntir')
var peopleManage_num = peopleManage_numTurntir.querySelector('.peopleManage_num')
var peopleManage_numTurnsec=peopleManage_numTurn.querySelector('.peopleManage_numTurnsec')
var peopleManage_turn=peopleManage_numTurnsec.querySelector('.peopleManage_turn')
var peopleManage_numgo = peopleManage_numTurnsec.querySelector('.peopleManage_numgo')
// =================================================================================
peopleManage_numgo.addEventListener('click',function (event){
    if(parseInt(peopleManage_turn.value) <= peopleManage_workerdata.length){
        peopleManage_index = parseInt(peopleManage_turn.value)-1
        peopleManage_pagenow = peopleManage_turn.value
        showpeopleManage_worker(peopleManage_workerdata, peopleManage_index)
    }else {
        swal("该页码不存在", "error")
    }
})
//正则表达式
const regexArr = [/^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/, /^(?=.*\d)[^\s]+$/, /^1[3456789]\d{9}$/, /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/];
// =================================================================================
//定义全局变量
var addpeopleInfo_width = 0.6 * window_width
var addpeopleInfo_height = 0.65 * window_height
//判满（form）
let isAllFilled = true;
let addpeoplemov = false
//将select值传入
const selectValues = [];
//设置全局变量peopleManage_workerdata的变量，方便分页操作,同时进行同步传输
let peopleManage_workerdata
var shopname = user.getAttribute('nameShop')
$.ajax({
    data: {shop: shopname},
    type: "get",
    dataType: "json",
    url: "getworker",
    async: false,
    success: function (data) {
        peopleManage_workerdata = data
    }
})
peopleManage_num.innerHTML = peopleManage_workerdata.length
// =================================================================================
//定义页数，和展示页数
var peopleManage_index = 0
peopleManage_pagenow.innerHTML = peopleManage_index + 1
// =================================================================================
//自适应布局以及添加员工框的出现与消失
peopleManage_addpPeoplebtn.setAttribute('flag', 'ture')
peopleManage_addpPeoplebtn.addEventListener('click', function (event) {
    this.style.cursor = 'auto'
    if (peopleManage_addpPeoplebtn.getAttribute('flag')) {
        addpeople_info.style.display = 'block'
        peopleManage_body.style.filter = 'blur(4px)'
        addpeople_info.style.width = addpeopleInfo_width + 'px'
        addpeople_info.style.height = addpeopleInfo_height + 'px'
        addpeople_info.style.left = 'calc(50% - ' + (addpeopleInfo_width / 2) + 'px )'
        addpeople_info.style.top = 'calc(50% - ' + (addpeopleInfo_height / 2) + 'px )'
        peopleManage_addpPeoplebtn.setAttribute('flag', 'false')
    }
})
addpeople_close.addEventListener('click', function (event) {
    peopleManage_addpPeoplebtn.setAttribute('flag', 'ture')
    peopleManage_body.style.filter = 'none'
    addpeople_info.style.display = 'none'
})
// =================================================================================
//框的移动
var addpeopleoffsetX, addpeopleoffsetY;
var addpeopleisDragging = false;
var transform = {x: 0, y: 0};
addpeople_info.addEventListener("mousedown", function (event) {
    addpeopleoffsetX = event.clientX - transform.x;
    addpeopleoffsetY = event.clientY - transform.y;
    addpeopleisDragging = true;
});
document.addEventListener("mousemove", function (event) {
    if (addpeopleisDragging) {
        transform.x = event.clientX - addpeopleoffsetX;
        transform.y = event.clientY - addpeopleoffsetY;
        addpeople_info.style.transform = "translate(" + transform.x + "px, " + transform.y + "px)";
    }
});
document.addEventListener("mouseup", function (event) {
    addpeopleisDragging = false;
});
for (var i = 0; i < articleinput.length; i++) {
    articleinput[i].addEventListener("mousedown", function (e) {
        e.stopPropagation();
    });
}
// =================================================================================
//按钮的鼠标经过样式
addpeople_close.addEventListener("mousemove", function (event) {
    this.style.backgroundColor = '#e81123'
    this.style.color = '#fff'
})
addpeople_close.addEventListener("mouseleave", function (event) {
    this.style.backgroundColor = '#dbdbdb'
    this.style.color = '#050708'
})
people_reset.style.transition = 'all 0.3s'
people_sub.style.transition = 'all 0.3s'

people_reset.addEventListener('click', function (e) {
    isAllFilled = true
    addpeoplemov = false
})
people_reset.addEventListener("mousemove", function (event) {
    this.style.width = '80%'
    people_sub.style.width = '20%'
})
people_reset.addEventListener('mouseleave', function (e) {
    if (!isAllFilled && !addpeoplemov) {
        people_reset.style.width = '80%'
        people_sub.style.width = '20%'
    }
    if (isAllFilled) {
        people_reset.style.width = '80%'
        people_sub.style.width = '20%'
        if (isAllFilled && addpeoplemov) {
            people_reset.style.width = '20%'
            people_sub.style.width = '80%'
        }
    }
})
people_sub.addEventListener("mousemove", function (event) {
    this.style.width = '80%'
    people_reset.style.width = '20%'
})
people_sub.addEventListener('mouseleave', function (e) {
    if (!isAllFilled && !addpeoplemov) {
        people_reset.style.width = '80%'
        people_sub.style.width = '20%'
    }
    if (isAllFilled) {
        people_reset.style.width = '80%'
        people_sub.style.width = '20%'
        if (isAllFilled && addpeoplemov) {
            people_reset.style.width = '20%'
            people_sub.style.width = '80%'
        }
    }
})

// =================================================================================
//表格全满后自动转换提交按钮
function checkAndTrigger() {
    for (var i = addpeopleForm_sele.length - 1; i >= 0; i--) {
        selectValues.pop(addpeopleForm_sele[i])
    }
    for (var i = 0; i < addpeopleForm_sele.length; i++) {
        selectValues.push(addpeopleForm_sele[i].value)
    }
    const isAllInputFilled = [...articleinput].every(input => input.value.trim() !== '');
    const isAllSelectFilled = selectValues.every(value => value !== 'notdefine');
    if (isAllInputFilled && isAllSelectFilled) {
        people_reset.style.width = '20%'
        people_sub.style.width = '80%'
        isAllFilled = true
        addpeoplemov = true
    } else {
        people_reset.style.width = '80%'
        people_sub.style.width = '20%'
        isAllFilled = false
        addpeoplemov = false
    }
}

[...articleinput, ...addpeopleForm_sele].forEach(element => {
    element.addEventListener('change', checkAndTrigger);
});

addpeople_info.addEventListener('mouseleave', function (e) {
    if (!isAllFilled && !addpeoplemov) {
        people_reset.style.width = '80%'
        people_sub.style.width = '20%'
    }
    if (isAllFilled) {
        people_reset.style.width = '80%'
        people_sub.style.width = '20%'
        if (isAllFilled && addpeoplemov) {
            people_reset.style.width = '20%'
            people_sub.style.width = '80%'
        }
    }

})
// =================================================================================
//点击按钮提交并且刷新页面
people_sub.addEventListener('click', checkAndTriggersec);

function checkAndTriggersec() {
    const isAllInputMatched = [...articleinput].every((input, index) => regexArr[index].test(input.value));
    const isAllSelectFilled = [...addpeopleForm_sele].every(select => select.value !== 'notdefine');
    if (isAllInputMatched && isAllSelectFilled && parseInt(addpeople_age.value) >= 18) {
        // var shopname = user.getAttribute('nameShop')
        var data = {
            name: addpeople_name.value,
            sex: addpeople_sex.value,
            age: addpeople_age.value,
            phone: addpeople_telephone.value,
            mail: addpeople_email.value,
            position: addpeople_postion.value,
            shop: shopname,
            flag: 1,
            pwd: addpeople_telephone.value.slice(-6)
        }
        fetch('/people_manage/addworker', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                    if (data === true) {
                        swal("添加人员", "成功", "success")
                        peopleManage_body.style.filter = 'none'
                        addpeople_info.style.display = 'none'
                        for (var i = 0; i < articleinput.length; i++) {
                            articleinput[i].value = ''
                        }
                        for (var i = 0; i < addpeopleForm_sele.length; i++) {
                            addpeopleForm_sele[i].value = 'notdefine'
                        }
                        people_reset.style.width = '80%'
                        people_sub.style.width = '20%'
                        isAllFilled = true;
                        addpeoplemov = false
                        //ajax请求刷新
                        $.ajax({
                            data: {shop: shopname},
                            url: "showworker",
                            method: "GET",
                            success: function (data) {
                                peopleManage_workerdata = data
                                peopleManage_num.innerHTML = peopleManage_workerdata.length
                                showpeopleManage_worker(peopleManage_workerdata, peopleManage_index)
                            }
                        })
                    } else if (data === false) {
                        swal("添加人员", "失败", "error")
                    }
                }
            )

            .catch(error => {
                swal("添加人员", "失败", "error")
            });

    } else {
        if (/^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/.test(addpeople_name.value)) {
            if (addpeople_sex.value !== 'notdefine') {
                if (/^(?=.*\d)[^\s]+$/.test(addpeople_age.value)) {
                    if (parseInt(addpeople_age.value) >= 18) {
                        if (/^1[3456789]\d{9}$/.test(addpeople_telephone.value)) {
                            if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(addpeople_email.value)) {
                                if (addpeople_postion.value !== 'notdefine') {
                                } else {
                                    swal("添加人员", "该添加人员职位未选择，请检查后提交", "error")
                                }
                            } else {
                                swal("添加人员", "该添加人员邮箱有误，请检查后提交", "error")
                            }
                        } else {
                            swal("添加人员", "该添加人员电话号码有误，请检查后提交", "error")
                        }
                    } else {
                        swal("添加人员", "该添加人员未成年，请检查后提交或联系相关人员", "error")
                    }
                } else {
                    swal("添加人员", "该添加人员年龄有误，请检查后提交", "error")
                }
            } else {
                swal("添加人员", "该添加人员性别未选择，请检查后提交", "error")
            }
        } else {
            swal("添加人员", "该添加人员姓名有误，请检查后提交", "error")
        }
    }
}
// =================================================================================
//父类下的点击按钮删除员工事件
peoplelist.onclick = function (event) {
    if (event.target.classList.contains('peopleManage_moveworker')) {
        var id = event.target.getAttribute('value')
        var shop = event.target.getAttribute('flag')
        console.log(id)
        console.log(shop)
        $.ajax({
            data: {id: id, shop: shop},
            type: "get",
            dataType: "json",
            url: "deleteStaff",
            success: function (data) {
                peopleManage_workerdata = data
                peopleManage_num.innerHTML = peopleManage_workerdata.length
                showpeopleManage_worker(peopleManage_workerdata, peopleManage_index)
            }
        })
    }
}
// =================================================================================

//人员页面刷新
function showpeopleManage_workernext(peopleManage_workerdata, peopleManage_index) {
    for (var j = 0; j < peopleManage_workerdata[peopleManage_index].length; j++) {
        var peopleManageList_woker = document.createElement('div')
        var peopleManageList_wokername = document.createElement('span')
        peopleManageList_wokername.textContent = peopleManage_workerdata[peopleManage_index][j].name
        var peopleManageList_wokerbtn1 = document.createElement('button')
        peopleManageList_wokerbtn1.textContent = '管理'
        var peopleManageList_wokerbtn2 = document.createElement('button')
        peopleManageList_wokerbtn2.textContent = '业绩'
        var peopleManageList_wokerbtn3 = document.createElement('button')
        peopleManageList_wokerbtn3.textContent = '删除'
        peopleManageList_wokerbtn3.setAttribute('value', peopleManage_workerdata[peopleManage_index][j].id)
        peopleManageList_wokerbtn3.setAttribute('flag', peopleManage_workerdata[peopleManage_index][j].shop)
        peopleManageList_wokerbtn3.setAttribute('class', 'peopleManage_moveworker')
        peopleManageList_woker.append(peopleManageList_wokername)
        peopleManageList_woker.append(peopleManageList_wokerbtn1)
        peopleManageList_woker.append(peopleManageList_wokerbtn2)
        peopleManageList_woker.append(peopleManageList_wokerbtn3)
        peoplelist.append(peopleManageList_woker)
    }
}
// =================================================================================
//页面上下页跳转防止出现删光一页没有跳转到上一页
function showpeopleManage_worker(peopleManage_workerdata, peopleManage_index) {
    while (peoplelist.firstChild) {
        peoplelist.removeChild(peoplelist.firstChild)
    }
    if (peopleManage_workerdata.length > peopleManage_index) {
        showpeopleManage_workernext(peopleManage_workerdata, peopleManage_index)
    }
    if (peopleManage_workerdata.length === peopleManage_index) {
        peopleManage_index--
        showpeopleManage_workernext(peopleManage_workerdata, peopleManage_index)
        peopleManage_pagenow.innerHTML = peopleManage_workerdata.length
    }
}

// =================================================================================
//页面左右按钮实现页面刷新
peopleManage_left.addEventListener('click', function (event) {
    if (peopleManage_index > 0) {
        peopleManage_index--
        // console.log(peopleManage_index)
        peopleManage_pagenow.innerHTML = peopleManage_index + 1
        console.log(peopleManage_workerdata[peopleManage_index])
        showpeopleManage_worker(peopleManage_workerdata, peopleManage_index)
    }
})
peopleManage_right.addEventListener('click', function (event) {
    if (peopleManage_index + 1 < peopleManage_workerdata.length) {
        peopleManage_index++
        peopleManage_pagenow.innerHTML = peopleManage_index + 1
        showpeopleManage_worker(peopleManage_workerdata, peopleManage_index)
    }
})
// =================================================================================





