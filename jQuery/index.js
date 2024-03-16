// $("h1").css("color", "red");

// If the script is in head section
// $(document).ready(function () {
//   $("h1").css("color", "red");
// });

// $("h1").addClass("big-title margin-50");
// // $("h1").removeClass("big-title margin-50");
// console.log($("h1").hasClass("margin-50"));

// // to manipulate text
// $("h1").text("bye");

// $("button").html("<em>Hey</em>");

// // manipulate attribute

// console.log($("img").attr("src"));

// $("a").attr("href", "https://yahoo.com");

// $("h1").attr("class")

// Event Listener

// $("h1").click(function(){
//     $("h1").css("color", "purple")
// })

// $("button").click(function () {
//   $("h1").css("color", "purple");
// });

// $("input").keydown(function (event) {
//   console.log(event.key);
// });

// $(document).keydown(function (event) {
//   $("h1").text(event.key);
// });

// $("h1").on("mouseover", function () {
//   $("h1").css("color", "purple");
// });

// Add or remove elements

// $("h1").before("<button>New</button")
// $("h1").after("<button>New</button");
// $("h1").prepend("<button>New</button");
// $("h1").append("<button>New</button");
// $("button").remove();

// jQuery Animation

// $("button").click(function () {
//   //   $("h1").hide();
//   //   $("h1").toggle();
//   //   $("h1").fadeOut();
//   //   $("h1").fadeIn();
//   //   $("h1").fadeToggle();
//   //   $("h1").slideUp();
//   //   $("h1").slideDown();
//   $("h1").slideToggle();
// });

$("button").click(function () {
  //   $("h1").animate({ opacity: 0.5 });
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
