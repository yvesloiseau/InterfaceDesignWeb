// custobox_myScript.js
$(function() {
  $('#butPassions').on('click', function( e )
      {
       alert("this works 4");
      // alert("I have executed the function");
       Custombox.open( {
            target: '.modal-Passions',
            effect: 'fadein',
            overlay: false,
            overlayClose: false,
            overlayOpacity: 0.5
        });
        e.preventDefault();
    });
    });

