// const itemnav = document.querySelector('.item-nav');

// var itemnav2 = document.getElementsByClassName('item-nav2');
// var itemnav3 = document.getElementsByClassName('item-nav3');




const element1=document.querySelector('.item-nav1')
const element2=document.querySelector('.item-nav2')
const element3=document.querySelector('.item-nav3')
const element4=document.querySelector('.item-nav4')


element1.addEventListener('click', function(){
    element1.classList.add('active')
    element2.classList.remove('active')
    element3.classList.remove('active')
    element4.classList.remove('active')
}
)
element2.addEventListener('click', function(){
    element1.classList.remove('active')
    element2.classList.add('active')
    element3.classList.remove('active')
    element4.classList.remove('active')
}
)
element3.addEventListener('click', function(){
    element1.classList.remove('active')
    element2.classList.remove('active')
    element3.classList.add('active')
    element4.classList.remove('active')
}
)
element4.addEventListener('click', function(){
    element1.classList.remove('active')
    element2.classList.remove('active')
    element3.classList.remove('active')
    element4.classList.add('active')
}
)















