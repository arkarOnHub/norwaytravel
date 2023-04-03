let imgTracker = 0;

let imgSlides = ['./images/city.jpg', './images/aurora.jpg', './images/fjords.jpg', './images/mount.jpg'];
let imgNo = ['1 / 4', '2 / 4', '3 / 4', '4 / 4'];

let imgsrc = document.querySelector('.slide');
let NoContent = document.querySelector('.currentNo');
let imgCaption = document.querySelector('#caption');

document.querySelector('.thumb-0').style.opacity = 1;

function prev() {
    if (imgTracker === 0) {
        imgTracker = 3;
    } else {
        imgTracker--;
    }

    let slideCap = document.querySelector('.cap-'+imgTracker);
    let thumbOpa = document.querySelector('.thumb-'+imgTracker);

    if (imgTracker === 3) {
        trackerMinus = 0;
        document.querySelector('.thumb-'+trackerMinus).style.opacity = 0.5;
    } else {
        trackerMinus = imgTracker + 1;
        document.querySelector('.thumb-'+trackerMinus).style.opacity = 0.5;
    }

    imgsrc.src = imgSlides[imgTracker];
    NoContent.innerHTML = imgNo[imgTracker];
    imgCaption.innerHTML = slideCap.alt;
    thumbOpa.style.opacity = 1;
}

function next() {
    if (imgTracker === 3) {
        imgTracker = 0;
    } else {
        imgTracker++;
    }

    let slideCap = document.querySelector('.cap-'+imgTracker);
    let thumbOpa = document.querySelector('.thumb-'+imgTracker);

    if (imgTracker === 0) {
        trackerMinus = 3;
        document.querySelector('.thumb-'+trackerMinus).style.opacity = 0.5;
    } else {
        trackerMinus = imgTracker - 1;
        document.querySelector('.thumb-'+trackerMinus).style.opacity = 0.5;
    }

    imgsrc.src = imgSlides[imgTracker];
    NoContent.innerHTML = imgNo[imgTracker];
    imgCaption.innerHTML = slideCap.alt;
    thumbOpa.style.opacity = 1;
}