const songs = [
    {
        name : 'Four seasons- Winter, 1st movement',
        artist : 'Antonio Vivaldi',
        music : 'sound/vivaldi.mp3'
    },
    {
        name : 'Swan Lake',
        artist : 'Tchaikovsky',
        music : 'sound/tchaikovsky.mp3'
    }
];

// declaración de variables
const seek_slider = document.querySelector('.seek_slider');
const songName = document.querySelector('.song-name');
const artistName = document.querySelector('.song-artist');
const vinyl = document.querySelector('.vinil');
const currTime = document.querySelector('.current-time');
const totalDuration = document.querySelector('.total-duration');
const playBtn = document.querySelector('.playpause-track');
let curr_song = document.createElement('audio');
let song_index = 0;
let isPlaying = false;
let updateTimer;
const iconElement = playBtn.querySelector('i');

// cargar canción
loadSong(song_index);


function loadSong(song_index){
    clearInterval(updateTimer);
    reset();
    curr_song.src = songs[song_index].music;
    curr_song.load();
    songName.textContent = songs[song_index].name;
    artistName.textContent = songs[song_index].artist;
    updateTimer = setInterval(setUpdate, 1000);
    curr_song.addEventListener('ended', nextSong);
}

// reset de los valores de tiempo y el range
function reset(){
    currTime.textContent = "00:00";
    totalDuration.textContent = "00:00";
    seek_slider.value = 0;
}

//verifica si la canción está sonando o no
function playpauseSong(){
    if (isPlaying){
        pauseSong();
    }else{
        playSong();
    }
}

//reproduce la canción y activa la animación 
function playSong(){
    curr_song.play();
    isPlaying = true;
    vinyl.classList.add('rotate');
    iconElement.classList.replace('fa-play', 'fa-pause');// cambia el icono del boton
}

// para la reproducción y la animación
function pauseSong(){
    curr_song.pause();
    isPlaying = false;
    vinyl.classList.remove('rotate');
    iconElement.classList.replace('fa-pause', 'fa-play');//regresa el icono a su valor original
}

//reproduce la siguiente canción
function nextSong(){
    if(song_index < songs.length - 1){
        song_index++;
    }else{
        song_index = 0;
    }
    loadSong(song_index);
    playSong();
}

//reproduce la canción anterior
function prevSong(){
    if(song_index > 0){
        song_index--;
    }else{
        song_index = songs.length - 1;
    }
    loadSong(song_index);
    playSong();
}

// asigna la posicion del range según el tiempo actual de la canción
function seekTo(){
    let seekto = curr_song.duration * (seek_slider.value / 100);
    curr_song.currentTime = seekto;
}

// actualiza los valores del tiempo de reproducción y el total de cada canción
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_song.duration)){
         seekPosition = curr_song.currentTime * (100/curr_song.duration);
        seek_slider.value = seekPosition;

        let currMin = Math.floor(curr_song.currentTime / 60);
        let currSec = Math.floor(curr_song.currentTime - currMin * 60);
        let durMin = Math.floor(curr_song.duration / 60);
        let durSec = Math.floor(curr_song.duration - durMin * 60);

        if(currSec < 10){
            currSec = "0" + currSec;
        }
        if(durSec < 10){
            durSec = "0" + durSec;
        }
        if(currMin < 10){
            currMin = "0" + currMin;
        }
        if(durMin < 10){
            durMin = "0" + durMin;
        }

        currTime.textContent = currMin + ":" + currSec;
        totalDuration.textContent = durMin + ":" + durSec;
    }
}