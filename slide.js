$('.slide a').click(function (event) {
  event.preventDefault(); // Prevents the default action of following the link
  
  $('.slide.active').removeClass('active');
  $(this).closest('.slide').addClass('active');
});
