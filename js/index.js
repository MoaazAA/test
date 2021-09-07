

$('#pics').click(function(){
    $('.pic1').slideDown(500)
    $('.pic2').slideDown(500)
    $('.pic3').slideDown(500)

})
$('#pic1').click(function(){
    $('.pic1').slideDown(500)
    $('.pic2').slideUp(500)
    $('.pic3').slideUp(500)
})
$('#pic2').click(function(){
    $('.pic2').slideDown(500)
    $('.pic1').slideUp(500)
    $('.pic3').slideUp(500)
})
$('#pic3').click(function(){
    $('.pic3').slideDown(500)
    $('.pic1').slideUp(500)
    $('.pic2').slideUp(500)
})

let per1 = document.querySelector('per1')
let per2 = document.querySelector('per2')
let per3 = document.querySelector('per3')
let per4 = document.querySelector('per4')

per1.onmouseemter = function(){
    i.style.display =  ''
}
per2.onmouseemter = function(){
    i.style.display =  ''
}
per3.onmouseemter = function(){
    i.style.display =  ''
}
per4.onmouseemter = function(){
    i.style.display =  ''
}
