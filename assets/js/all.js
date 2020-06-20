"use strict";

// click hamIcon 
$('.hamIcon').click(function (e) {
  e.preventDefault();
  $('.hamList').addClass('active');
}); // click backArrow

$('.backArrow').click(function (e) {
  e.preventDefault();
  $('.hamList').removeClass('active');
});
//# sourceMappingURL=all.js.map
