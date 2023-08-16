let i = 0;

$('#plus').click(() => {
    i = i + 1;
    console.log(i);
    $("h2").html(i);
  });

$('#minus').click(() => {
    i = i - 1;
    console.log(i);
    $("h2").html(i);
});