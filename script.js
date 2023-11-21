$('.btn_agendar').click(function(){
    $('.agenda_rap').toggleClass('mostrar');
    $('.overlay').toggleClass('mostrar')
});

$('.btn_agendar_fechar').click(function(){
    $('.agenda_rap').toggleClass('mostrar')
    $('.overlay').toggleClass('mostrar')
})

$('.btn1-colorirvermelho').click(function(){
    $('.agenda_list ul .primeiroitem').toggleClass('colorirlistavermelho')
})
$('.btn2-colorirvermelho').click(function(){
    $('.agenda_list ul .segundoitem').toggleClass('colorirlistavermelho')
})
$('.btn3-colorirvermelho').click(function(){
    $('.agenda_list ul .terceiroitem').toggleClass('colorirlistavermelho')
})
$('.btn4-colorirvermelho').click(function(){
    $('.agenda_list ul .quartoitem').toggleClass('colorirlistavermelho')
})

