$("li.chapter-item").on("click", function (e) {
  // When clicking next to the anchor in the nav bar, click the anchor as well
  e.stopPropagation();
  $(this).find("a")[0].click();
});
