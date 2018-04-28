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
  parallax('banner-top', 'Y');
  // parallax('banner-footer', 'Y');
  if(touchElement('banner-footer')){
    document.getElementById('banner-footer').classList.add('add')
    document.querySelector('.banner.collection-footer').classList.add('add')
  } else {
    if(document.getElementById('banner-footer')){
      document.getElementById('banner-footer').classList.remove('add')

    }

  }

})
document.onreadystatechange = function () {
   if (document.readyState == "complete") {
     // document is ready. Do your stuff here
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
