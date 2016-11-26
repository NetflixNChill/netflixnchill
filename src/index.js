function loadDrink(e) {
   e.preventDefault();
  var drinkReq = $('.drinkReq').val();
  if (drinkReq === '' || typeof drinkReq == null || typeof drinkReq == undefined) {
    alert('Don\'t forget to enter your drink!')
  } else {
    $.ajax({
      url: 'http://lcboapi.com/products?q=' + drinkReq ,
       headers: { 'Authorization': 'Token MDphZjIxYTU4NC1iMzczLTExZTYtYjY4ZC02YjdkMTY3MDNhMDI6RDlGU09jVUV6bXJGUWN1anlLTEc2emRsQWxuY2daN2w5TENy' }
}).then(function(result){
      console.log(result);
      var drinkGroup = $('<div class="group"></div>')
      var drinkSubGroup = $('<div class="subgroup"></div>')
        drinkSubGroup.append($('<h1 class="drinkTitle"></h1>').text(products.result.name));
        drinkSubGroup.append($('<p class="drinkType"></p>').text(result.primary_category));
        drinkSubGroup.append($('<p class="drinkPrice></p>').text(result.price_in_cents));
        drinkSubGroup.append($('<p class="drinkOrigin"></p>').text(result.origin));
        drinkSubGroup.append($('<p class="drinkServing"></p>').text(result.serving_suggestion));
        drinkGroup.append(drinkSubGroup);
        $('.chillcontent').append(drinkGroup);

    });
  }
 }
 $('.searchshow').on("submit", loadDrink);
