$( document ).ready(function() {
  $('.col-8.col-offset-2').each(function() {
  if ($(this).text().indexOf("osamon") >= 0) {
      $(this).children("#avatar").css('border', '0');
      $(this).children("#avatar").attr('src','images/kevin3.png');
        }
        else{
        $(this).children("#avatar").css('border', '0');
        $(this).children("#avatar").attr('src','images/bruno2.png');}
});
});
