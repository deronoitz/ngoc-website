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

var thumbImage = function(e){
  var imgUrl = e.querySelector('img').getAttribute('src');
  var imgTarget = document.querySelectorAll('.big-img .imgReplace');
  var imgThumb = document.querySelectorAll('.thumb-img li');
  for (var i = 0; i < imgTarget.length; i++) {
    imgTarget[i].classList.remove('active');
    imgThumb[i].classList.remove('active');

  }
  var curTarget = document.querySelector("img.imgReplace[src='"+imgUrl+"']");
  curTarget.classList.add('active');
  e.classList.add('active');
}

var callSearch = function(e){
  var parent = e.closest('li');
  parent.querySelector('input').focus();
  parent.querySelector('input').select();

  parent.classList.add('active');

}

var removeSearch = function(e){
  var parent = e.closest('li');
  parent.classList.remove('active');

}
var touchElement = function(el){
  var scroll = window.scrollY;
  var l = document.getElementById(el);
  if(l){
    var elTop = l.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
    var out = elTop - screenHeight;
    if(out <= 0){
      return true;
    } else {
      return false;
    }
  }
}

window.addEventListener('scroll', function(){
  // parallax('banner-top', 'Y');
  // parallax('banner-footer', 'Y');
  if(touchElement('banner-footer')){
    // document.getElementById('banner-footer').classList.add('add')
    // document.querySelector('.banner.collection-footer').classList.add('add')
  } else {
    if(document.getElementById('banner-footer')){
      // document.getElementById('banner-footer').classList.remove('add')

    }

  }

})

document.onreadystatechange = function () {
   if (document.readyState == "complete") {
     // document is ready. Do your stuff here
     console.log("Website by Reverse Project (http://www.reverse-project.com)");
     // console.log("http://www.reverse-project.com");
     document.getElementById('preload').classList.add('hide');
     setTimeout(function(){
       document.getElementById('preload').remove();
     }, 500)
   }
}

function getSum(total, num) {
    return total + num;
}

var updatePriceCart = function(e){
  var bp = e.getAttribute("bp");
  var x = e.value;
  var count = bp * x;
  var target = e.parentElement.parentElement.parentElement.querySelector("h3");
  target.innerHTML = "$"+count+".00"

  var all = document.querySelectorAll('table.cart tbody tr h3');
  var allVal = [];
  for (var i = 0; i < all.length - 1; i++) {
    allVal.push(all[i].textContent.replace( /^\D+/g, '') * 1);
  }
  var total = allVal.reduce(getSum);
  document.querySelector('.cart tr.sum h3').textContent = "$"+total+".00";
}
function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.hasAttribute(cls));
    return el;
}


var cartStepForward = function(e){
  var currentStep = findAncestor(e, "data-step").getAttribute("data-step") * 1;
  var nextStep = currentStep + 1;
  document.querySelector("*[data-step='"+currentStep+"']").classList.add('hidden');
  document.querySelector("*[data-step='"+nextStep+"']").classList.remove('hidden');
  document.querySelector("*[step-holder='"+currentStep+"']").setAttribute('step-holder', nextStep);

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

var cartStepPrevious = function(e){
  var currentStep = findAncestor(e, "data-step").getAttribute("data-step") * 1;
  var prevStep = currentStep - 1;
  document.querySelector("*[data-step='"+currentStep+"']").classList.add('hidden');
  document.querySelector("*[data-step='"+prevStep+"']").classList.remove('hidden');
  document.querySelector("*[step-holder='"+currentStep+"']").setAttribute('step-holder', prevStep);

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        for (var i = 0; i < myObj.countries.country.length; i++) {
          var country = myObj.countries.country[i].countryName;
          var html = "<option value="+country+">"+country+"</option>";
          if(document.getElementById('countryForm')){
            document.getElementById('countryForm').insertAdjacentHTML("beforeend", html) ;
          }

        }
    }
};
xmlhttp.open("GET", "scripts/country.json", true);
// xmlhttp.open("GET", "https://cors.io/?http://country.io/names.json", true);
xmlhttp.send();
