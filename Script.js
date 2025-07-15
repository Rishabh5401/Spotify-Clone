console.log("welcome to spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById("masterSongName");




let songs=[
    {songName:"Warriyo - Mortals [NCS Release]", filePath : "songs/1.mp3", coverpath:"1.jpg"},
    {songName:"Cielo - Huma-Huma", filePath : "songs/2.mp3", coverpath:"2.jpg"},
    {songName:"DEAF KEV - Invincible [NCS Release]-320k", filePath : "songs/3.mp3", coverpath:"3.jpg"},
    {songName:"Different Heaven & EH!DE - My Heart [NCS Release]", filePath : "songs/4.mp3", coverpath:"4.jpg"},
    {songName:"Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath : "songs/5.mp3", coverpath:"5.jpg"},
    {songName:"Rabba - Salam-e-Ishq", filePath : "songs/6.mp3", coverpath:"6.jpg"},
    {songName:"Sakhiyaan - Salam-e-Ishq", filePath : "songs/7.mp3", coverpath:"7.jpg"},
    {songName:"Bhula Dena - Salam-e-Ishq", filePath : "songs/8.mp3", coverpath:"8.jpg"},
    {songName:"Tumhari Kasam - Salam-e-Ishq", filePath : "songs/9.mp3", coverpath:"9.jpg"},
    {songName:"Na Jaana - Salam-e-Ishq", filePath : "songs/10.mp3", coverpath:"10.jpg"},
]


songItems.forEach((element, i) => {
    if (i < songs.length) {
        element.getElementsByTagName("img")[0].src = songs[i].coverpath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    }
});



// audioElement.play();
// handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('Play');
        masterPlay.classList.add('pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('Play');
        masterPlay.classList.remove('pause');   
        gif.style.opacity=0;
    }
})

// listen to Events
audioElement.addEventListener("timeupdate", ()=>{
    console.log("timeupdate");
    progress=parseInt(audioElement.currentTime/audioElement.duration * 100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('pause');
        element.classList.add('Play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('play');
        e.target.classList.add('pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('play');
        masterPlay.classList.add('pause');
    
    })
})
document.getElementById('previous').addEventListener('click', ()=>{


    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('play');
masterPlay.classList.add('pause');
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('play');
    masterPlay.classList.add('pause');
})