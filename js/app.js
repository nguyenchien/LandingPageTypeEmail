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
    // itemsDesktop: false,
    // itemsDesktopSmall: false,
    // itemsTablet: false,
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
});
