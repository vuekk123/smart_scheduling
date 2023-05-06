window.onload = function () {
    var nav = document.querySelector('.nav')
    var navs = document.querySelector('.nav').querySelector('dl').querySelectorAll('div')
    var firs = document.querySelectorAll('.fir_nav')
    var navmov = document.querySelector('.movenav')
    var word = document.querySelector('.word')
    var subnav = document.querySelectorAll('.second_nav')
    var lables = nav.querySelectorAll('label')
    var contain = document.querySelector('.container')
    var divs = document.querySelector('.main').children
    var navmoveflag=true
    function navop() {
        nav.onmouseout = function () {
            for (let j = 0; j < firs.length; j++) {
                if (firs[j].style.color != 'white') {
                    firs[j].style.color = '#d7d7d7'
                    firs[j].style.backgroundColor = 'transparent'
                }
            }

        }
    }
    for (let i = 0; i < firs.length; i++) {
        navop()
    }
    navmov.onclick = function () {
        navmoveflag=!navmoveflag
        console.log(navmoveflag)
        if(navmoveflag === false) {
            if (nav.style.width == '' || nav.style.width == '257px') {
                nav.style.transition = 'all 0.4s'
                // navmov.style.transition = 'all 0.4s'
                nav.style.width = '78px'
                // navmov.style.left = '0%'
                // navmov.innerHTML = '&gt;'
                // window.setTimeout('containmov()',200)
                contain.style.transition = 'all 0.4s'
                contain.style.left = '78px'
                contain.style.width = 'calc(100% - 78px)'

            } else {
                nav.style.transition = 'all 0.4s'
                // navmov.style.transition = 'all 0.4s'
                nav.style.width = '257px'
                // navmov.style.left = 'calc(257px - 20px)'
                // navmov.innerHTML = '&lt;'
                contain.style.transition = 'all 0.4s'
                contain.style.left = '257px'
                contain.style.width = 'calc(100% - 257px)'
            }
        }else {
            contain.style.transition = 'all 0.4s'
            contain.style.left = '257px'
            contain.style.width = 'calc(100% - 257px)'
        }
    }
    nav.onmouseover=function (){
        if(navmoveflag === false){
            nav.style.transition = 'all 0.4s'
            nav.style.width = '257px'
            // contain.style.transition = 'all 0.4s'
            // contain.style.left = '257px'
            // contain.style.width = 'calc(100% - 257px)'
        }
    }
    nav.onmouseout=function (){
        if(navmoveflag === false){
            nav.style.transition = 'all 0.4s'
            contain.style.transition = 'all 0.4s'
            nav.style.width = '78px'
            // contain.style.transition = 'all 0.4s'
            // contain.style.left = '78px'
            // contain.style.width = 'calc(100% - 78px)'

        }
        for (var i = 0; i < navs.length; i++) {
            if (navs[i].style.color != 'white') {
                navs[i].style.color = '#d7d7d7'
                navs[i].style.backgroundColor = 'transparent'
            }
        }
    }
    for (let i = 0; i < lables.length; i++) {
        lables[i].setAttribute('index', i)
    }

    for (let i = 0; i < navs.length; i++) {
        for (let q = 0; q < 3; q++) {
            navs[q].setAttribute('index', q)
        }
        for (let y = 3; y < navs.length; y++) {
            navs[y].setAttribute('index', y - 1)
        }
        navs[3].setAttribute('index', '')
        navs[i].onclick = function () {
            if (i != 3) {
                for (let j = 0; j < divs.length; j++) {
                    divs[j].style.display = 'none'
                }
                divs[navs[i].getAttribute('index')].style.display = 'block'
                if(i===7){
                    contain.style.backgroundColor='rgb(244, 244, 244)'
                }
                else if(i!==7){
                    contain.style.backgroundColor='white'
                }
                for (let p = 0; p < navs.length; p++) {
                    navs[p].style.color = '#d7d7d7'
                    navs[p].style.backgroundColor = 'transparent'
                }
                navs[i].style.transition = 'all 0.1s'
                navs[i].style.color = 'white'
                navs[i].style.backgroundColor = '#4caf50'
            }
            if (i == 3) {
                if (this.parentNode.style.height == '') {
                    word.innerHTML = '︿'
                    this.parentNode.style.transition = 'all 0.1s'
                    this.parentNode.style.height = '220px'
                }
                else if (this.parentNode.style.height == '220px') {
                    word.innerHTML = '﹀'
                    this.parentNode.style.transition = 'all 0.1s'
                    this.parentNode.style.height = ''
                    for (let j = 0; j < subnav.length; j++) {
                        subnav[j].style.transition = 'all 1s'
                        subnav[j].style.color = '#d7d7d7'
                    }
                }
            }
        }
        navs[i].onmouseover = function () {
            for (let b = 0; b < navs.length; b++) {
                if(navs[b].style.color!='white'){
                    navs[b].style.color='#d7d7d7'
                    navs[b].style.backgroundColor = 'transparent'
                }
            }
            if(navs[i].style.color!='white'){
                navs[i].style.transition='all 0.2s'
                navs[i].style.color='pink'
                navs[i].style.backgroundColor = '#535353'
            }
        }
    }
    navs[navs.length-1].onclick=function(){
       location.href='#'
    }
}

