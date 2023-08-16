let colors = ['orange', 'magenta', 'red', 'brown', 'green', 'blue', 'teal'];

function coloredBox(boxColor) {
    $('.container').append('<div class="box"></div>');
    $('.container div:last-of-type').css('background-color', boxColor);
}

colors.forEach(coloredBox);

for (let i = 0; i < 20; i = i + 1) {
    $("ul").append(`<li>${i + 1}. line</li>`)
}