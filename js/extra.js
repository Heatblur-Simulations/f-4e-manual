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

// Disabled for now, because it causes page-changes when clicking the chapter collapse/expand button as well
/*
$("li.chapter-item").on("click", function (e) {
  // When clicking next to the anchor in the nav bar, click the anchor as well
  e.stopPropagation();
  $(this).find("a")[0].click();
});
*/

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

window.setTheme = function setTheme(theme_id) {
  $("button.theme#" + theme_id).click();
}

window.enableGameMode = function enableGameMode() {
  $("#theme-toggle").hide(); // Themes switch automatically based on in-game time
  $(".right-buttons a[href*='print.html']").hide(); // Print Button
  $(".menu-logo").hide(); // Logo on the sidebar uses absolute path and hence is broken in-game
}
