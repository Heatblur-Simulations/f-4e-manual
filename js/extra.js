$.fn.onClassChange = function (cb) {
  return $(this).each((_, el) => {
    new MutationObserver((mutations) => {
      mutations.forEach(
        (mutation) => cb && cb(mutation.target, mutation.target.className),
      );
    }).observe(el, {
      attributes: true,
      attributeFilter: ["class"], // only listen for class attribute changes
    });
  });
};

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

function swapLightDarkModeImages() {
  $("img").each(function () {
    const e = $(this);
    const src = e.attr("src");
    const useDark = $("html").hasClass("hb_dark");

    if (!src) {
      return;
    }

    if (useDark && src.includes("img/light/")) {
      e.attr("src", src.replace("img/light/", "img/dark/"));
    }

    if (!useDark && src.includes("img/dark/")) {
      e.attr("src", src.replace("img/dark/", "img/light/"));
    }
  });
}

$(document).ready(function () {
  swapLightDarkModeImages();
});

$("html").onClassChange((el, newClass) => {
  swapLightDarkModeImages();
});

window.setTheme = function setTheme(theme_id) {
  $("button.theme#" + theme_id).click();
};

window.enableGameMode = function enableGameMode() {
  $("#theme-toggle").hide(); // Themes switch automatically based on in-game time
  $(".right-buttons").hide(); // Print, PDF, GitHub, Edit Buttons
  $(".menu-logo").hide(); // Logo on the sidebar uses absolute path and hence is broken in-game
};
