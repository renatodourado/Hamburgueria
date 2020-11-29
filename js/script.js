$(document).ready(function() {

    //Botão Toggler

    $('.navbar-toggler').click(function() {
        $('.navbar-toggler').togglerClass('change')

    })





    //Botão voltar ao topo
    $(window).scroll(function(){
      let position = $(this).scrollTop();

      if(position >= 718){
        $('#voltar').addClass('scrollTop');
      }else{
        $('#voltar').removeClass('scrollTop');
      }
    
    });



    //Suavizando a Navegação

    $('.nav-item a, header-link, .btn-adiante, #voltar, .navbar-brand').click(function(link){
      link.preventDefault();
      let target = $(this).attr('href');

      $('html, body').stop().animate({
        scrollTop: $(target).offset().top -25
      }, 1000);
    });


    //FIXAR O MENU DE NAVEGAÇÃO NO TOPO
    
    $(window).scroll(function(){
      let position = $(this).scrollTop();

      if(position >= 718){
        $('.navbar').addClass('navbar-background');
        $('.navbar').addClass('fixed-top');
      }else{
        $('.navbar').removeClass('navbar-background');
        $('.navbar').removeClass('fixed-top');
      }
      
    });
    
     
})


