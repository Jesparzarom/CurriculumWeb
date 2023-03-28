$(document).ready(function() {
    $(".sidenav").sidenav();
    $('.parallax').parallax();
    $('.fixed-action-btn').floatingActionButton();
    $('.pushpin').pushpin();
}); // end of document ready


$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 600) {
      $('#floatbtn').removeClass('oculto');
    } else {
      $('#floatbtn').addClass('oculto');
    }
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'top',
      hoverEnabled: false
    });
  });