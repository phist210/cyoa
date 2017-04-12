// we should have level keep track of when we can do things

var level = 0;
var i = 0;
var currentPage = 0;

// $('.prev').on('click', function() {
//   $.ajax({
//     type:'GET',
//     url: '/api/StoryBoard',
//     success: function(result) {
//         console.log(result[i-1].id);
//         imgLink = result[i-1].background_image;
//         $('.story-main').css('background-image', 'url('+ imgLink +')');
//         $('.story-main').html('' + result[i-1].storyline + '');
//         $('.story-main').html('' + result[i-1].dj_setup + '');
//         i--;
//       }
//     });
// });


$('.next').on('click', function() {
  $.ajax({
    type:'GET',
    url: '/api/StoryBoard',
    success: function(result) {
      // Garage
      if (level === 0) {
        imgLink = result[0].background_image;
        $('.story-main').css('background-image', 'url('+ imgLink +')');
        $('.text-block').html('' + result[0].storyline + '');
        // $('.story-main').html('' + result[i].dj_setup + '');
        i++;
        console.log(i);
      }
      // Lame house party
      if (level === 1) {
        imgLink = result[1].background_image;
        $('.story-main').css('background-image', 'url('+ imgLink +')');
        $('.text-block').html('' + result[1].storyline + '');
        // $('.story-main').html('' + result[i].dj_setup + '');
        i++;
        console.log(i);
      }
      // Decent house party
      if (level === 2) {
        imgLink = result[2].background_image;
        $('.story-main').css('background-image', 'url('+ imgLink +')');
        $('.text-block').html('' + result[2].storyline + '');
        // $('.story-main').html('' + result[i].dj_setup + '');
        i++;
        console.log(i);
      }
      // Lame club
      if (level === 3) {
        imgLink = result[3].background_image;
        $('.story-main').css('background-image', 'url('+ imgLink +')');
        $('.text-block').html('' + result[3].storyline + '');
        // $('.story-main').html('' + result[i].dj_setup + '');
        i++;
        console.log(i);
      }
      // Better club
      if (level === 4) {
        imgLink = result[4].background_image;
        $('.story-main').css('background-image', 'url('+ imgLink +')');
        $('.text-block').html('' + result[4].storyline + '');
        // $('.story-main').html('' + result[i].dj_setup + '');
        i++;
        console.log(i);
      }
      // Cream
      if (level === 5) {
        imgLink = result[5].background_image;
        $('.story-main').css('background-image', 'url('+ imgLink +')');
        $('.text-block').html('' + result[5].storyline + '');
        // $('.story-main').html('' + result[i].dj_setup + '');
        i++;
        console.log(i);
      }
      //
      if (level === 6) {
        imgLink = result[6].background_image;
        $('.story-main').css('background-image', 'url('+ imgLink +')');
        $('.text-block').html('' + result[6].storyline + '');
        // $('.story-main').html('' + result[i].dj_setup + '');
        i++;
        console.log(i);
      }
      //
      if (level === 7) {
        imgLink = result[7].background_image;
        $('.story-main').css('background-image', 'url('+ imgLink +')');
        $('.text-block').html('' + result[7].storyline + '');
        // $('.story-main').html('' + result[i].dj_setup + '');
        i++;
        console.log(i);
      }
      //
      if (level === 8) {
        imgLink = result[8].background_image;
        $('.story-main').css('background-image', 'url('+ imgLink +')');
        $('.text-block').html('' + result[8].storyline + '');
        // $('.story-main').html('' + result[i].dj_setup + '');
        i++;
        console.log(i);
      }
    }
  })
});


$('.prac').on('click', function() {
  ++level
  alert("Great job, you have achieved level " + level + "!");
});


$('.restart').on('click', function() {
  window.location.href='/index'
});
