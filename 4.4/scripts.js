$(document).ready(function() {
  $("#addItem").click(function() {
      var i = $("#item").val();
      $("ul").append(`<li>${i}</li>`);
  });
});