
var refreshRating = function() {
  $('#new_comments').css('bigger');
 // $('.navbar').css('bigger');
  // $("#new_comment").html("Thank you for your review!");
  $(".message-box").css("border", "2px solid red");
  console.log("this is a test");
  $("#golfInfo").tooltip();
  $("#cyclingInfo").tooltip();
  $("#wineInfo").tooltip();
  $('[data-toggle="tooltip"]').tooltip();
   console.log("Tooltip section");

};

$(document).on('turbolinks:load', function() {
    refreshRating();
    });

// Tooltips scripts
 //  $(function () {
 //    });
   //  End of tooltip section function
