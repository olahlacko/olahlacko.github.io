function getGreetingTo(name) {
    console.log(`Hello ${name}!`);
}

$(document).ready(function() {
    $("#nameButton").click(function() {
        var na = $("#name").val();
        getGreetingTo(na);
        $(".hello").html(`<p>Hello ${na}!</p>`);
        
    });
});

function printNumbersTill(end) {
    for (let i = 1; i-1 < end; i++) {
    console.log(i);
    $(".number").append(`<p>${i}</p>`);
    }
}

$(document).ready(function() {
    $("#numberButton").click(function() {
        var number = $("#number").val();
        var nr = parseInt(number);
        printNumbersTill(nr);
    });
});


/*

let printNumbersTill2 = (end) => {
    for (let i = 1; i < end+1; i++) {
        console.log(i);
        }
}

printNumbersTill2(3)

//////////////////////////////////////////////

let getGreetingTo2 = (name) => {
    console.log(`Hello ${name}!`);
}

getGreetingTo2('Laci')

//////////////////////////////////////////////

let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
};

printValues([0, 3, 6, 7, 9])

//////////////////////////////////////////////

let printValues2 = [10, 20, 30, 50, 12];

printValues2.forEach((number) => {
  console.log(number);
});
*/