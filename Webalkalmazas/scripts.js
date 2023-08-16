let p0 = {
    photo: `Images/Picture01.jpg`,
    title: `Kis-Fátra`,
    description: `2005`,
    nr: `0`,
    left: `15px`
  };

let p1 = {
    photo: `Images/Picture02.jpg`,
    title: `Prága`,
    description: `2016`,
    nr: `1`,
    left: `140px`
};

let p2 = {
    photo: `Images/Picture03.jpg`,
    title: `Holt-tenger`,
    description: `2015`,
    nr: `2`,
    left: `265px`
};

let p3 = {
    photo: `Images/Picture04.jpg`,
    title: `Párizs`,
    description: `2017`,
    nr: `3`,
    left: `390px`
};

let p4 = {
    photo: `Images/Picture05.jpg`,
    title: `Andalúzia`,
    description: `2018`,
    nr: `4`,
    left: `515px`
  };

let p5 = {
    photo: `Images/Picture06.jpg`,
    title: `Cinque Terre`,
    description: `2019`,
    nr: `5`,
    left: `640px`
};

let p6 = {
    photo: `Images/Picture07.jpg`,
    title: `Toszkána`,
    description: `2019`,
    nr: `6`,
    left: `765px`
};

let p7 = {
    photo: `Images/Picture08.jpg`,
    title: `Tallin`,
    description: `2020`,
    nr: `7`,
    left: `890px`
};

let allPhotos = [p0, p1, p2, p3, p4, p5, p6, p7];


let loadPhoto = (currentPhotoNumber) => {
    $(`#photo`).attr(`src`, allPhotos[currentPhotoNumber].photo);
    $(`#title`).text(allPhotos[currentPhotoNumber].title);
    $(`#description`).text(allPhotos[currentPhotoNumber].description);
    $(`#nr`).text(allPhotos[currentPhotoNumber].nr);
};

let currentPhoto = 0;
let previousPhotoNumber = 0;
loadPhoto(currentPhoto);

$(`#next`).click(() => {
    $(`#p`+currentPhoto).removeClass(`active`);
    if(currentPhoto < 7) {
        currentPhoto++;
    }
    else {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
    console.log(`next arrow | photo: `+ currentPhoto);
    $(`#p`+currentPhoto).addClass(`active`);
});

$(`#prev`).click(() => {
    $(`#p`+currentPhoto).removeClass(`active`);
    if(currentPhoto > 0) {
        currentPhoto--;
    }
    else {
        currentPhoto = 7;
    }
    loadPhoto(currentPhoto);
    console.log(`prev arrow | photo: `+ currentPhoto);
    $(`#p`+currentPhoto).addClass(`active`);
});

function thumbnailPhotos(currentPhotoNumber) {
    $(`.thumb`).append(`<img src=`+currentPhotoNumber.photo+` alt="" id=p`+currentPhotoNumber.nr+`>`);

    $(`#p`+currentPhotoNumber.nr).hover(() => {
        console.log(`over:`+currentPhotoNumber.left);
        $(`#label`).html(`<div class="label" style="left: `+currentPhotoNumber.left+`;"><p>`+currentPhotoNumber.title+`</p></div>`);
    });

    $(`#p`+currentPhotoNumber.nr).click(() => {
        loadPhoto(currentPhotoNumber.nr);
        console.log(`current: `+ currentPhotoNumber.nr +` | previous: `+ previousPhotoNumber);

        if (currentPhotoNumber.nr == previousPhotoNumber){
            $(`#p`+currentPhotoNumber.nr).addClass(`active`);
        }
        else {
            allPhotos.forEach((setInactive) => {$(`#p`+setInactive.nr).removeClass(`active`);})
            $(`#p`+currentPhotoNumber.nr).addClass(`active`);
        }
        previousPhotoNumber = currentPhotoNumber.nr;
        currentPhoto = currentPhotoNumber.nr;
    });


};

allPhotos.forEach(thumbnailPhotos);
$(`#p0`).addClass(`active`);
