$(document).ready(function() {
    $('.image-container').click(function() {
      $(this).toggleClass('clicked');
    });

    $('.close-button').click(function(event) {
      event.stopPropagation();
      $(this).closest('.image-container').removeClass('clicked');
    });
  });