// custobox_myScript.js
$(function() {
  $('#butGoals').on('click', function( e ) 
      {
      // alert("this works 4");
      // alert("I have executed the function");
       Custombox.open( {
            target: '.modal-Goals',
            effect: 'newspaper',
            overlayClose: false,
            overlayOpacity: 0.5
        });
        e.preventDefault();
    });
    });

