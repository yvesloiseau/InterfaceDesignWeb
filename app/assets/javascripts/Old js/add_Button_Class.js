//                                                                                           //
//  Adding class to my button to remove the default class from bootstrap for the INFO button //
//                                                                                           //

// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "https://connect.facebook.net/fr_CA/sdk.js#xfbml=1&version=v2.5";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));
$(function() {
	// $('#faqPanel button').on('click', function(){
 //    	$('button.current').removeClass('buttonBoot');
 //    	$(this).addClass('buttonBoot');
	// });

$('#accordion button').on('click', function(){
    $(this).addClass('buttonBoot');
    $(this).parent().siblings().find('button').removeClass('buttonBoot');
	});

});
