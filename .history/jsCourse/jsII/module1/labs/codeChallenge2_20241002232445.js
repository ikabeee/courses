let Images = function(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

let getImage = function(title, artist, date) {
    return {
        title,
        artist,
        date
    }
}
let imagesArray = [
    new Images('Title1', 'Artist1', '2020'),
    new Images('Title2', 'Artist2', '2021'),
];
let images1 = [];
let images2 = [];

imagesArray.forEach(image => images1.push(new Images(image.title, image.artist, image.date)));
images1.forEach(image => images2.push(getImage(image.title, image.artist, image.date)));
images2.forEach(image => {console.log(`${image.title} (${image.artist}, ${image.date})`)});