
(function($) {

/*mouse enter-leave behavior*/
  $('.wraper').on('mouseenter', function() {
    var zoomUrl = $('.preview img').attr('src');
    $('.zoom_area').append('<div class="magnifier"><img src="' + zoomUrl + '"/></div>');
    $(this).find('.magnifier').fadeIn(250);
	$(this).find('.preview').fadeTo("slow" , 0,);
  });  
  $('.wraper').on('mouseleave', function() {
	  $(this).find('.preview').fadeTo(700 , 1,);
    $(this).find('.magnifier').fadeOut(500, function() {
      $(this).remove();
    });
  });

/*computing coursor position on zoom area relating to original size of image*/
  $('.zoom_area').mousemove(function(pointer) {
    var viewWidth = $(this).width(),
        viewHeight = $(this).height(),
        largeWidth = $(this).find('.magnifier').width(),
        largeHeight = $(this).find('.magnifier').height(),
        parentOffset = $(this).parent().offset(),
        relativeXPosition = (pointer.pageX - parentOffset.left),
        relativeYPosition = (pointer.pageY - parentOffset.top),
        moveX = Math.floor((relativeXPosition * (viewWidth - largeWidth) / viewWidth)),
        moveY = Math.floor((relativeYPosition * (viewHeight - largeHeight) / viewHeight));
  /*positioning original size image in zoom area*/
    $(this).find('.magnifier').css({
      left: moveX,
      top: moveY
    });
  });
  
})(jQuery);