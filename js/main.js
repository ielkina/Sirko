document.addEventListener("DOMContentLoaded", () => {
  //Mobile Menu
  const burger = document.querySelector(".burger"); //наша кнопка
  const mobileMenu = document.querySelector(".menu"); //мобильное меню
  const bodyLock = document.querySelector("body"); //ищем как селектор ТЕГА

  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("menu--active"); //когда меню открыто
    if (mobileMenu.classList.contains("menu--active")) {
      //Проверяем, есть ли у меню активный класс
      burger.classList.add("burger--active"); //Когда открыто, иконка становится крестиком
      bodyLock.classList.add("lock"); //Блокируем скролл при открытом меню
    } else {
      //Когда нету активного класса у меню
      burger.classList.remove("burger--active"); //Возвращает в исходное состояние
      bodyLock.classList.remove("lock"); //Разрешаем скроллить
    }
  });
  document.addEventListener("click", function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      burger.classList.remove("burger--active");
      mobileMenu.classList.remove("menu--active");
      bodyLock.classList.remove("lock");
    }
  });
});

$(function () {
  //  let header = $('.menu');
  //  let hederHeight = header.height(); // вычисляем высоту шапки

  //  $(window).scroll(function () {
  //    if ($(this).scrollTop() > 1) {
  //      header.addClass('menu_fixed');
  //      $('body').css({
  //        'paddingTop': hederHeight + 'px' // делаем отступ у body, равный высоте шапки
  //      });
  //    } else {
  //      header.removeClass('menu_fixed');
  //      $('body').css({
  //        'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
  //      })
  //    }
  //  });
  $(".menu a, .footer__logo").on("click", function (e) {
    //отменяем стандартную обработку нажатия по ссылке
    e.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
  var mixer = mixitup(".portfolio__gallery");
});