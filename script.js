const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#play');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// Song titles
const songs = ['Drake', 'Jay-Z', 'Rihanna'];

// Song tracker
let songIndex = 2;

// Initially load song into DOM
loadSong(songs[songIndex])

// Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `mp3/${song}.mp3`
};