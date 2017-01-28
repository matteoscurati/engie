import $ from 'jQuery';
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
});
