// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

let image = [ ]
let songNames = [ ]
let artist = [ ]
let songLinks = [ ]

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.

let song1 = {
  imageUrl : "https://i1.sndcdn.com/artworks-sRDJhbGDyvUA3em6-P4dUgg-t500x500.jpg",
  songName : "Living in a Nightmare",
  artist   : "Blacklight District",
  songLink : "https://www.youtube.com/watch?v=sb7U1LceIMg"
}

let song2 = {
  imageUrl : "https://i.ytimg.com/vi/h7MYJghRWt0/maxresdefault.jpg",
  songName : "Die For You",
  artist   : "VALORANT, Grabbitz",
  songLink : "https://www.youtube.com/watch?v=h7MYJghRWt0"
}

let song3 = {
  imageUrl : "https://cdns-images.dzcdn.net/images/cover/089519d3ea4e86a9226036918cc19217/500x500.jpg",
  songName : "Satellite",
  artist   : "STARSET",
  songLink : "https://www.youtube.com/watch?v=fB4tJ_Ml9nw"
}

let song4 = {
  imageUrl : "https://i1.sndcdn.com/artworks-000053960610-1tgb5q-t500x500.jpg",
  songName : "Coalescence",
  artist   : "Chris Christodoulou",
  songLink : "https://www.youtube.com/watch?v=ysPtBjY8o_A"
}

let song5 = {
  imageUrl : "https://i1.sndcdn.com/artworks-000065016938-40k290-t500x500.jpg",
  songName : "I Will Show You",
  artist   : "From Ashes to New",
  songLink : "https://www.youtube.com/watch?v=n9_aRVZ2oco"
}

let song6 = {
  imageUrl : "https://www.rush.com/wp-content/uploads/2014/12/clockwork-angels-cover-600x600.jpg",
  songName : "The Garden",
  artist   : "RUSH",
  songLink : "https://www.youtube.com/watch?v=uZodbmC6Mxc"
}

let songStorage = ["song1","song2","song3","song4","song5","song6"];

// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.


//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.



}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
