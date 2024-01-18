$.fn.onClassChange = function(cb) {
  return $(this).each((_, el) => {
    new MutationObserver(mutations => {
      mutations.forEach(mutation => cb && cb(mutation.target, mutation.target.className));
    }).observe(el, {
      attributes: true,
      attributeFilter: ['class'] // only listen for class attribute changes 
    });
  });
}

$("li.chapter-item").on("click", function (e) {
  // When clicking next to the anchor in the nav bar, click the anchor as well
  e.stopPropagation();
  $(this).find("a")[0].click();
});

$("div.menu-logo img, h1.menu-title").on("click", function (e) {
  // When clicking logo or title text, click main chapter link
  e.stopPropagation();
  $("ol.chapter").children(":first").click();
});

function ensureLogoVisible() {
  var logo = "img/f4line_black.svg";
  if ($("html").hasClass("hb_dark")) {
    logo = "img/f4line.svg";
  }
  $("img.line_art_logo").attr("src", logo);
}

$(document).ready(function() {
  ensureLogoVisible();
})

$("html").onClassChange((el, newClass) => ensureLogoVisible());
