$(document).ready(function(){
  $('.toggle').on('click', function(){
    $('.collapser').toggleClass('block');
  }); //end toggle
  $('.parent').on('click', function(){
    $('.dropdown').toggleClass('block');
  }); //end parent
  $('.parent').on('click', handleClicks);
  $('.toggle').on('click', handleClicks);
});//end ready