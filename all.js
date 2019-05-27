$(document).ready(function() {
	$('.dropdown').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('.dropdown').toggleClass('bluer');
		$('.dropopen').slideToggle();
//ad
	$('.adc').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$(".ad").hide();
//swiper
$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      speed:3000,
      autoplay: {
      delay: 5000,
      },
  })
});