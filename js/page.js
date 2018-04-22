var parallax = function(el, d){
  var item,scroll,height;
  if(document.getElementById(el) != null){
    item = document.getElementById(el);
    scroll = window.scrollY;
    height = document.body.clientHeight;
    setTimeout(function(){
      item.setAttribute("style", "transform: translate"+d+"(-"+scroll*.05+"px)");
    }, 10);
  }

}

var touchElement = function(el){
  var scroll = window.scrollY;
  var l = document.getElementById(el);
  var elTop = l.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;
  var out = elTop - screenHeight;
  if(out <= 0){
    return true;
  } else {
    return false;
  }
}

window.addEventListener('scroll', function(){
  parallax('banner-top', 'Y');
  // parallax('banner-footer', 'Y');
  if(touchElement('banner-footer')){
    document.getElementById('banner-footer').classList.add('add')
    document.querySelector('.banner.collection-footer').classList.add('add')
  } else {
    document.getElementById('banner-footer').classList.remove('add')

  }

})
