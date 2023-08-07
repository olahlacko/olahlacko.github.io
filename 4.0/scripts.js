let name = "Lacko";
console.log(name);

//jQuery part

// read examples
var h1Text = $("h1").text();
console.log(h1Text);

console.log($(".list").css("background-color"));

//change text
$("h1").text("JavaScript - modified by jQuery");
var h1Text = $("h1").text();
console.log(h1Text);

//change css
$(".list").css("background", "lightblue");
$(".list2").css("background", "lightgreen");

//change html
$(".list2").html("second <strong>ListItem</strong>");

//append html item 
$("ul").append("<li>last appended <strong>ListItem</strong></li>");

//remove element
//$("li:first-of-type").remove();

//change css class - add, if not already on it / remove if already on it
$("li:last-of-type").toggleClass("list2");

//add list item by pushing button
function appendListItem(){
    $("ul").append("<li>another appended <strong>ListItem</strong></li>");
};

function removeListItem(){
    $("li:last-of-type").remove();
};

$("#addLi").click(appendListItem);
$("#removeLi").click(removeListItem);

// "=>" can be used instead of function, like: $("#removeLi").click(()=> { $("li:last-of-type").remove()});



