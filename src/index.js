$(function() {
  //...
  $('.action').on('click', function() {
    $.ajax({
      url: 'https://random-movie.herokuapp.com/random',
      dataType:'jsonp'
    }).then(function(data){
      console.log(data);
      var netflixGroup = $('<div class="netflixGroup"></div>');
      var netflixSubGroup = $('<div class="netflixSubGroup"></div>');
        netflixSubGroup.append($('<h2 class="movieName"></h2>' + '<br>').text(data.Title));
        netflixSubGroup.append($('<img class="moviePoster">').attr('src', data.Poster));
        netflixSubGroup.append($('<p class="movieYear"></p>').text(data.Year));
        netflixSubGroup.append($('<p class="movieRating"></p>').text('Rated: ' + data.Rated));
        netflixSubGroup.append($('<p class="movieActors"></p>').text(data.Actors));
        netflixSubGroup.append($('<p class="movieRating"></p>').text(data.Genre));
        netflixSubGroup.append($('<p class="moviePlot"></p>').text(data.Plot));
        netflixSubGroup.append($('<p class="movieScore"></p>').text(data.imdbRating + '/10'));




        netflixGroup.append(netflixSubGroup);
      $('.netflixContent').empty().append(netflixGroup).show('slow');
    })

  })
})
