$(document).ready(function() {
  $('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
    

  });
   var $window = $(window);
    var $pane = $('#pane1');

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 550) {
            $("#button1").html("<i class='fa fa-envelope' aria-hidden='true'></i>");
            $("#button2").html('<i class="fa fa-book" aria-hidden="true"></i>');
            $("#button3").html('<i class="fa fa-info" aria-hidden="true"></i>');
        } else {
          $("#button1").html('Contact');
            $("#button2").html('Portfolio');
            $("#button3").html('About');
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});