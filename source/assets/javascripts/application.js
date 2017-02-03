import $ from 'jQuery';
import classie from 'desandro-classie';
import matchHeight from 'jquery-match-height';

require('jquery-ui');
require('modernizr');

$(document).ready(() => {
  if ($('.article-box').length > 0) {
    $('.article-box').matchHeight();
  }
});

function sizeOnScroll() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 10,
      header = document.querySelector("#logo"),
      image = document.querySelector("#logo__logo");
    if (distanceY > shrinkOn) {
      classie.add(header,"is-smaller");
      classie.add(image,"is-smaller");
    } else {
      if (classie.has(header,"is-smaller")) {
        classie.remove(header,"is-smaller");
      }
      if (classie.has(image,"is-smaller")) {
        classie.remove(image,"is-smaller");
      }
    }
  });
}

window.onload = sizeOnScroll();
