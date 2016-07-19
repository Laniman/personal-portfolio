(function($) {

  'use strict';

  // Активный пункт навигации
  $('.navigation').singlePageNav({
    currentClass : 'active'
  });

  // Скрывающий слайдер меню
  $('.toggle-menu').click(function(){
    $('.responsive-menu').stop(true,true).slideToggle();
    return false;
  });

  // Инициализация magnificPopup
  $('.popup-content').magnificPopup({
    type:'inline'
  });

  // Остановка анимации загрузки ajax
  var stopLoadingAnimation = function () {
    $('#ajaxLoader').hide();
  };

  //Запуск анимации загрузки ajax
  var startLoadingAnimation = function () {
    var imgObj = $('#ajaxLoader');
    imgObj.show();
  };

  // TODO
  // При нажатии на кнопку отправки сообщения
  // Если есть невалидные поля, то
  // выводится сообщение об этом и
  // тригерится событие показать ошибку в кнопке отправки

  // Отправка формы
  $('#contact-form').submit(function() {
    var form = $(this);

    $.ajax({
      url: 'https://formspree.io/georgij-net@yandex.ru',
      // url: '',
      method: 'POST',
      data: form.serialize(),
      dataType: 'json',
      beforeSend: function () {
        console.log('loading');
        startLoadingAnimation();
      },
      success: function(respond){
        // console.log(respond);
        form.find('button').addClass('button-success3d');
        setTimeout( function() { form.find('button').removeClass( 'button-success3d' ) }, 2000 );
        form.trigger('reset');
      },
      error: function(){
        // console.log('Произошла ошибка. Повторите попытку позже.');
        form.find('button').addClass('button-error3d');
        setTimeout( function() { form.find('button').removeClass( 'button-error3d' ) }, 2000 );
      },
      complete: function () {
        stopLoadingAnimation();
      }
    });

    return false;
  });


})(jQuery);