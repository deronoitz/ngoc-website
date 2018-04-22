var changeNavbar = function(){
  var scroll = window.scrollY;
  var getTop = document.querySelector('nav > .top');
  var getMiddle = document.querySelector('nav > .middle');
  var navHeight = getTop.clientHeight + getMiddle.clientHeight;
  var target = document.querySelector('nav');
  if(scroll >= navHeight){
    target.classList.add('minified');
    target.style.transform = "translateY(-"+navHeight+"px)";
  } else {
    target.classList.remove('minified');
    target.style.transform = "translateY(0)"

  }
}
var getNavHeight = function(){
  var nav = document.querySelector('nav').clientHeight;
  document.getElementById('ngoc-app').style.marginTop = nav+"px";
}

window.addEventListener('scroll', function(){
  changeNavbar();
})
