

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

