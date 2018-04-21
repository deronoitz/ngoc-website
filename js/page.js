var bgWrapper = $('.indexPage .bg-wrapper img');
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
var randomOpacity = (el)=>{
  var randomNumber = getRandomFloat(0.1, .50);
  // var randomNumber = getRandomFloat(.35, .50);
  TweenLite.to(el, .1, {css:{opacity: randomNumber}, ease:Power2.easeInOut});

}



$(document).ready(function(){
  $('.indexPage .bg-wrapper').parallax();
  $('.characterPage .bg-wrapper').parallax();

  new TypeIt('#indexType', {
    strings: ["Have we been here? Have we met before? I don’t know",
    "Right now maybe our future self watching over us through memories",
    "Am i alive ? Are we all alive ? Are we real ? We don’t know",
    "Right now maybe our another self watching over us through reality..."],
    speed: 50,
    autoStart: false
  });

  setInterval(()=>{
    randomOpacity(bgWrapper);
  }, 120);
})
