// we should have count keep track of when we can do things

var count = 0

$('.prev').on('click', function() {
  count--
  console.log(count);
});

$('.prac').on('click', function() {
  count++
  console.log(count);
  console.log("Great Job");
});
var i = 0;
$('.next').on('click', function() {
  $.ajax({
    type:'GET',
    url: '/api/StoryBoard',
    success: function(result) {
      // for (var i = 0; i < result.length; i++){
        console.log(result[i]);

        imgLink = result[i].background_image;
        $('.story-main').css('background-image', 'url('+ imgLink +')');
        $('.story-main').html('' + result[i].storyline + '');
        $('.story-main').html('' + result[i].dj_setup + '');
        i++;

      // }
      //
    }
  })
});
