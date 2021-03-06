//
// function loadDrink(e) {
//    e.preventDefault();
  // var drinkReq = $('.drinkReq').val();
  // if (drinkReq === '' || typeof drinkReq == null || typeof drinkReq == undefined) {
  //   alert('Don\'t forget to enter your drink!')
  // } else {
$(function() {

  $('.searchshow').on('click', function() {

    $.ajax({
      //   Following link will return a random drink
          url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',

      // Following link returns an object with an array of fine different drinks as objects
      //  url: 'http://lcboapi.com/products?per_page=5q=' + drinkReq ,
      //  headers: { 'Authorization': 'Token MDphZjIxYTU4NC1iMzczLTExZTYtYjY4ZC02YjdkMTY3MDNhMDI6RDlGU09jVUV6bXJGUWN1anlLTEc2emRsQWxuY2daN2w5TENy' }
    }).then(function(data){
      // console.log(data);
      var drinkGroup = $('<div class="group"></div>')
    $.each(data.drinks, function(req, res){
      var drinkSubGroup = $('<div class="subgroup"></div>')
        drinkSubGroup.append($('<h2 class="drinkTitle"></h2>'+ '<br>').text(res.strDrink));
        drinkSubGroup.append($('<img class="drinkPic"></img>').attr('src',res.strDrinkThumb));

        drinkSubGroup.append($('<h3 class="drinkIngredientList"></h3>').text('Ingredients'));
        drinkSubGroup.append($('<p class="drinkIngredient"></p>').text(res.strMeasure1 + res.strIngredient1));
        drinkSubGroup.append($('<p class="drinkIngredient"></p>').text(res.strMeasure2 + res.strIngredient2));
        drinkSubGroup.append($('<p class="drinkIngredient"></p>').text(res.strMeasure3 + res.strIngredient3));
        drinkSubGroup.append($('<p class="drinkIngredient"></p>').text(res.strMeasure4 + res.strIngredient4));
        drinkSubGroup.append($('<p class="drinkIngredient"></p>').text(res.strMeasure5 + res.strIngredient5));
        drinkSubGroup.append($('<p class="drinkIngredient"></p>').text(res.strMeasure6 + res.strIngredient6));
        drinkSubGroup.append($('<p class="drinkIngredient"></p>').text(res.strMeasure7 + res.strIngredient7));
        drinkSubGroup.append($('<p class="drinkIngredient"></p>').text(res.strMeasure8 + res.strIngredient8));
        drinkSubGroup.append($('<p class="drinkIngredient"></p>').text(res.strMeasure9 + res.strIngredient9));
        drinkSubGroup.append($('<p class="drinkIngredient"></p>').text(res.strMeasure10 + res.strIngredient10));

        drinkSubGroup.append($('<h3 class="howtomake"></h3>').text('Directions'));
        drinkSubGroup.append($('<p class="drinkInstructions"></p>').text(res.strInstructions));

        drinkSubGroup.append($('<h3 class="glass"></h3>').text('Serve In'));
        drinkSubGroup.append($('<p class="drinkCategroy"></p>').text(res.strGlass));
        drinkGroup.append(drinkSubGroup);

        })
        $('.chill').empty().append(drinkGroup);

    });
  })
})

 // $('.searchshow').on("submit", loadDrink);



//---- Netflix Function ----



$(function() {
  //...
  $('.action').on('click', function() {
    $.ajax({
      url: 'https://random-movie.herokuapp.com/random',
      dataType:'jsonp'
    }).then(function(data){
      // console.log(data);
      var netflixGroup = $('<div class="netflixGroup"></div>');
      var netflixSubGroup = $('<div class="netflixSubGroup"></div>');
        netflixSubGroup.append($('<h2 class="movieName"></h2>' + '<br>').text(data.Title));
        netflixSubGroup.append($('<img class="moviePoster">'+ '<br>').attr('src', data.Poster));
        netflixSubGroup.append($('<p class="movieYear"></p>'+ '<br>').text(data.Year));
        netflixSubGroup.append($('<p class="movieRating"></p>'+ '<br>').text('Rated: ' + data.Rated));
        netflixSubGroup.append($('<p class="movieActors"></p>'+ '<br>').text(data.Actors));
        netflixSubGroup.append($('<p class="movieRating"></p>'+ '<br>').text(data.Genre));
        netflixSubGroup.append($('<p class="moviePlot"></p>'+ '<br>').text(data.Plot));
        netflixSubGroup.append($('<p class="movieScore"></p>'+ '<br>').text(data.imdbRating + '/10'));

        netflixGroup.append(netflixSubGroup);
        $('.netflixContent').empty().append(netflixGroup);
    })

  })
});
