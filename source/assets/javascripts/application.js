import $ from 'jQuery';
import classie from 'desandro-classie';
import matchHeight from 'jquery-match-height';

require('jquery-ui');
require('modernizr');

$(document).ready(() => {
  if ($('.half-article--same-height').length > 0) {
    $('.half-article--same-height').matchHeight();
  }

  if ($('.half-coloured--same-height').length > 0) {
    $('.half-coloured--same-height').matchHeight();
  }

  if ($('.two-article--same-height').length > 0) {
    $('.two-article--same-height').matchHeight();
  }

  if ($('.three-article--same-height').length > 0) {
    $('.three-article--same-height').matchHeight();
  }

  if ($('.two-article__heading--same-height').length > 0) {
    $('.two-article__heading--same-height').matchHeight();
  }

  if ($('.three-article__heading--same-height').length > 0) {
    $('.three-article__heading--same-height').matchHeight();
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
