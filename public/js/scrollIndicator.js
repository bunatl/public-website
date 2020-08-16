// When the user scrolls the page, execute myFunction
// https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
window.onscroll = function() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.height = scrolled + "%";
  // document.getElementById("progress-bar").innerHTML = `Completed: ${Math.round( scrolled ) } %`;
};