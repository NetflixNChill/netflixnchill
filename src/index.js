function loadMe(e) {
   e.preventDefault();



  $.ajax({
      url:"https://random-movie.herokuapp.com/random"
    }).done(function(data){
      var group = $('<div class="netflixGroup"></div>')
      // var subgroup = $('<div class="netflixSubGroup"></div>')
      // if (data.category === "undefined") {
      //   alert ('Sorry we can\'t find that category! Check options below for examples.')
      // } else {
        subgroup.append($('<h1 class="cityTitle"></h1>').text(data.show_title));
      //   group.append(subgroup);
      // }
      $('.netflixContent').empty().append(group);
    });
 }
 $('.searchShow').on("submit", loadMe);
