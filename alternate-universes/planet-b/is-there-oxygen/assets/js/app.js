// $('.nav-item').click(function() {
//   var target = $(this).html();

//   console.log(target);

//   if (target == 'Apple') {
//     $('.apple').removeClass('hide');
// });

$('.nav-item').click(function() {
    var img         = $(this).data('img');
    var classname   = $(this).data('classname');
    var img_to_show = '<div class="logo ' + classname + '"><img src="assets/img/' + img + '" /></div>';
  
    $('.content').prepend(img_to_show);
  });
  