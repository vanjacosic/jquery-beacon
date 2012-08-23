/*
  jQuery Beacon plugin
  Made by Supertusch.dk

*/
(function( $ ){

  $.fn.beacon = function(options) {
    var opt = options||{};
    var msg;
    
    if(!opt.msg){
      msg = $('.message', this).html();
    }
    else {
      msg = opt.msg;
    }
    var settings = $.extend( {}, opt);

    return this.each(function() {
      console.log(msg);
      $(this).append(
        '<div class="wrapper">'+
          '<div class="infobox">'+
          msg+
          '</div>'+
          '<div class="marker-container beacon">'+
            '<div class="marker-ripple"></div>'+
            '<div class="marker"></div>'+
          '</div>'+
        '</div>'
      );
      $('.wrapper', this).css({top: opt.top||0, left: opt.left||0});
      $('.marker', this).hover(function (){
        var _parent = $(this).closest('.wrapper');
        $('.infobox', _parent).fadeIn(200);
        $('.marker-container', _parent).removeClass('beacon');
      },
      function (){
        var _parent = $(this).closest('.wrapper');
        $('.infobox', _parent).fadeOut(200);
      });
    });

  };
})(jQuery);