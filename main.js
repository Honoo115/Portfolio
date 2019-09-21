$(function() {
  $("#bars").on("click", function() {
    $("#menu").toggle();
  });
});
function scrollToAnchor(target) {
  $("html,header").animate(
    {
      scrollTop: target.offset().top
    },
    1000
  );
}
$("#myBtn").on("click", function() {
  scrollToAnchor($("#bio"));
});
