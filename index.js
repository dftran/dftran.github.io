
// window.addEventListener("scroll", function() {
//     let intro = document.getElementsByClassName("intro");
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     intro.style.opacity = (intro.height() - scrollTop) / intro.height();
// });

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    $('intro').css({
      opacity: function() {
        var elementHeight = $(this).height(),
            opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.8) + 0.2;
            
        return opacity;
      }
    });
  });