
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
  
  $('.wraper2').on('mouseenter', function() {
    var zoomUrl2 = $('.preview2 img').attr('src');
    $('.zoom_area2').append('<div class="magnifier2"><img src="' + zoomUrl2 + '"/></div>');
    $(this).find('.magnifier2').fadeIn(250);
	$(this).find('.preview2').fadeTo("slow" , 0,);
  });  
  $('.wraper2').on('mouseleave', function() {
	  $(this).find('.preview2').fadeTo(700 , 1,);
    $(this).find('.magnifier2').fadeOut(500, function() {
      $(this).remove();
    });
  });  

  $('.wraper3').on('mouseenter', function() {
    var zoomUrl3 = $('.preview3 img').attr('src');
    $('.zoom_area3').append('<div class="magnifier3"><img src="' + zoomUrl3 + '"/></div>');
    $(this).find('.magnifier3').fadeIn(250);
	$(this).find('.preview3').fadeTo("slow" , 0,);
  });  
  $('.wraper3').on('mouseleave', function() {
	  $(this).find('.preview3').fadeTo(700 , 1,);
    $(this).find('.magnifier3').fadeOut(500, function() {
      $(this).remove();
    });
  });  

  $('.wraper4').on('mouseenter', function() {
    var zoomUrl4 = $('.preview4 img').attr('src');
    $('.zoom_area4').append('<div class="magnifier4"><img src="' + zoomUrl4 + '"/></div>');
    $(this).find('.magnifier4').fadeIn(250);
	$(this).find('.preview4').fadeTo("slow" , 0,);
  });  
  $('.wraper4').on('mouseleave', function() {
	  $(this).find('.preview4').fadeTo(700 , 1,);
    $(this).find('.magnifier4').fadeOut(500, function() {
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
  
  $('.zoom_area2').mousemove(function(pointer) {
    var viewWidth = $(this).width(),
        viewHeight = $(this).height(),
        largeWidth = $(this).find('.magnifier2').width(),
        largeHeight = $(this).find('.magnifier2').height(),
        parentOffset = $(this).parent().offset(),
        relativeXPosition = (pointer.pageX - parentOffset.left),
        relativeYPosition = (pointer.pageY - parentOffset.top),
        moveX = Math.floor((relativeXPosition * (viewWidth - largeWidth) / viewWidth)),
        moveY = Math.floor((relativeYPosition * (viewHeight - largeHeight) / viewHeight));
  /*positioning original size image in zoom area*/
    $(this).find('.magnifier2').css({
      left: moveX,
      top: moveY
    });
  });  
  
  $('.zoom_area3').mousemove(function(pointer) {
    var viewWidth = $(this).width(),
        viewHeight = $(this).height(),
        largeWidth = $(this).find('.magnifier3').width(),
        largeHeight = $(this).find('.magnifier3').height(),
        parentOffset = $(this).parent().offset(),
        relativeXPosition = (pointer.pageX - parentOffset.left),
        relativeYPosition = (pointer.pageY - parentOffset.top),
        moveX = Math.floor((relativeXPosition * (viewWidth - largeWidth) / viewWidth)),
        moveY = Math.floor((relativeYPosition * (viewHeight - largeHeight) / viewHeight));
  /*positioning original size image in zoom area*/
    $(this).find('.magnifier3').css({
      left: moveX,
      top: moveY
    });
  }); 

  $('.zoom_area4').mousemove(function(pointer) {
    var viewWidth = $(this).width(),
        viewHeight = $(this).height(),
        largeWidth = $(this).find('.magnifier4').width(),
        largeHeight = $(this).find('.magnifier4').height(),
        parentOffset = $(this).parent().offset(),
        relativeXPosition = (pointer.pageX - parentOffset.left),
        relativeYPosition = (pointer.pageY - parentOffset.top),
        moveX = Math.floor((relativeXPosition * (viewWidth - largeWidth) / viewWidth)),
        moveY = Math.floor((relativeYPosition * (viewHeight - largeHeight) / viewHeight));
  /*positioning original size image in zoom area*/
    $(this).find('.magnifier4').css({
      left: moveX,
      top: moveY
    });
  });   
})(jQuery);