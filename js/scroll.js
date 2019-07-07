/*Плавный скрол*/ 
$(document).ready(function(){
  $("#navbar").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 1500);
  });
});
/*появления border-bottom*/ 
$(window).scroll(function(){
  $('.header__fixed').toggleClass('header__bottom', $(this).scrollTop() > 0);
});
$(window).scroll(function(){
  $('.header__btn').toggleClass('header__bottom', $(this).scrollTop() > 0);
});