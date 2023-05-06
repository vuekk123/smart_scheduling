var main_numform_manage=document.querySelector('.page').querySelector('.container').querySelector('.main').querySelector('.main_numform_manage')
var formcontainer=main_numform_manage.querySelector('.formcontainer')
var mcd_menu=formcontainer.querySelector('nav').querySelector('.mcd-menu')
var menu_lis=Array.from(mcd_menu.children)
var main_formbody_divs=formcontainer.querySelector('.main_formbody').children
for (var i = 0; i < menu_lis.length; i++) {
    if(i === 4){continue}
    menu_lis[i].setAttribute('index',i)
}
for (var i = 1; i < main_formbody_divs.length; i++) {
    main_formbody_divs[i].style.display='none'
}
menu_lis.forEach(element =>{
element.addEventListener('click',function (element){
    for (var i = 0; i < menu_lis.length; i++) {
        if(menu_lis[i].querySelector('a').classList.contains('active')){
            menu_lis[i].querySelector('a').classList.remove('active')
            break
        }
    }
    var indexdisplay=parseInt(this.getAttribute('index'))
    this.querySelector('a').className+='active'
    console.log(this.querySelector('a'))
    for (var i = 0; i < main_formbody_divs.length; i++) {
        main_formbody_divs[i].style.display='none'
    }
    main_formbody_divs[indexdisplay].style.display='block'
})
})
