//  $(document).ready(function () {

//     $('.navbar .dropdown-item.dropdown').on('click', function (e) {
//         var $el = $(this).children('.dropdown-toggle');
//         if ($el.length > 0 && $(e.target).hasClass('dropdown-toggle')) {            var $parent = $el.offsetParent(".dropdown-menu");
//             $(this).parent("li").toggleClass('open');
    
//           if (!$parent.parent().hasClass('navbar-nav')) {
//                if ($parent.hasClass('show')) {
//                    $parent.removeClass('show');
//                   $el.next().removeClass('show');
//                     $el.next().css({"top": -999, "left": -999});
//                 } else {                    $parent.parent().find('.show').removeClass('show');
//                    $parent.addClass('show');
//                   $el.next().addClass('show');
//                    $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
//               }
//                  e.preventDefault();
//                 e.stopPropagation();
//          }
//             return;
//          }     });
//      $('.navbar .dropdown').on('hidden.bs.dropdown', function () {        $(this).find('li.dropdown').removeClass('show open');
//          $(this).find('ul.dropdown-menu').removeClass('show open');
// });
    
    
//  });
/** Dropdown on hover */
$(".nav-link.dropdown-toggle").hover( function () {
  // Open up the dropdown
  $(this).removeAttr('data-toggle'); // remove the data-toggle attribute so we can click and follow link
  $(this).parent().addClass('show'); // add the class show to the li parent
  $(this).next().addClass('show'); // add the class show to the dropdown div sibling
}, function () {
  // on mouseout check to see if hovering over the dropdown or the link still
  var isDropdownHovered = $(this).next().filter(":hover").length; // check the dropdown for hover - returns true of false
  var isThisHovered = $(this).filter(":hover").length;  // check the top level item for hover
  if(isDropdownHovered || isThisHovered) {
      // still hovering over the link or the dropdown
  } else {
      // no longer hovering over either - lets remove the 'show' classes
      $(this).attr('data-toggle', 'dropdown'); // put back the data-toggle attr
      $(this).parent().removeClass('show');
      $(this).next().removeClass('show');
  }
});
// Check the dropdown on hover
$(".dropdown-menu").hover( function () {
}, function() {
  var isDropdownHovered = $(this).prev().filter(":hover").length; // check the dropdown for hover - returns true of false
  var isThisHovered= $(this).filter(":hover").length;  // check the top level item for hover
  if(isDropdownHovered || isThisHovered) {
      // do nothing - hovering over the dropdown of the top level link
  } else {
      // get rid of the classes showing it
      $(this).parent().removeClass('show');
      $(this).removeClass('show');
  }
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}