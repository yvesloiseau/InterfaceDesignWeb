# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$.ajax(url: "/fr/about").done (html) ->
  alert "About page has loaded!"
#  $("#results").append html
$.ajax(url: "/fr/contact").done (html) ->
  alert "Contact page has loaded!"

#$(document).ready ->
 # alert "page has loaded!"

#$('#new_comments').css('bigger')
#$("#new_comment").html("Thank you for your review!")
#$(".message-box").css("border", "2px solid red")

