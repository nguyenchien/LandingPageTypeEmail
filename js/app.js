document.cookie = "username=Chien Nguyen";

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
var cdata = getCookie("username");
console.log(cdata);

$(document).ready(function () {
  // Slider
  $("#owl-demo").owlCarousel({
    navigation: true,
    pagination: false,
    navigationText: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    items: 1,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: true,
        loop: false,
      },
    },
    // itemsDesktop: false,
    // itemsDesktopSmall: false,
    // itemsTablet: true,
    // itemsMobile: false,
  });

  //Tab
  $(".content-list:not(.active)").hide();
  $(".tab-item a").on("click", function (e) {
    e.preventDefault();
    let targetList = $(this).attr("href");
    $(this).parent(".tab-item").find("a").addClass("active");
    $(this)
      .parent(".tab-item")
      .siblings(".tab-item")
      .find("a")
      .removeClass("active");
    $(targetList).addClass("active").siblings().removeClass("active");
    $(targetList).show().siblings().hide();
  });
  // Menu SP
  $(".header__icon-menu").on("click", function (e) {
    $(this).siblings(".header__wrap-menu").addClass("active");
    $("body").addClass("overlay");
  });
  $(".icon-close").on("click", function () {
    $(this).parent(".header__wrap-menu").removeClass("active");
    $("body").removeClass("overlay");
  });
  $(document).mouseup(function (e) {
    var targetClass = $(e.target)[0].className;
    if (targetClass == "overlay") {
      $("body").removeClass("overlay");
      $(".header__wrap-menu").removeClass("active");
    }
  });
});
