console.log("Welcome to spotify");


let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSong = document.getElementById('masterSong');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));
let timeDisplay = document.getElementById('timer');
let timeLength = document.getElementsByClassName('mytimer');



let songs = [
    { songName: 'Let Me Love You', filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: 'Rabb Di Meher', filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: 'Yeh Dooriyan', filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: 'Shayad(Reprise)', filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: 'Illegal Weapon', filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: 'Kahaani Suno', filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: 'Saalam-e-ishq', filePath: "songs/3.mp3", coverPath: "covers/7.jpg" },
    { songName: 'Saturday ', filePath: "songs/4.mp3", coverPath: "covers/8.jpg" },
    { songName: 'Disco deewane', filePath: "songs/5.mp3", coverPath: "covers/9.jpg" },
    { songName: 'Na Jaana', filePath: "songs/6.mp3", coverPath: "covers/10.jpg" }
];


songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;

    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});


masterPlay.addEventListener('click', function () {
    if (audioElement.paused || audioElement.currentTime <= 0) {

        audioElement.play();
        updateTime()


        masterPlay.classList.remove('ri-play-circle-line');
        masterPlay.classList.add('ri-pause-circle-line');


        gif.style.opacity = 1;


    } else {
        audioElement.pause();
        masterPlay.classList.remove('ri-pause-circle-line');
        masterPlay.classList.add('ri-play-circle-line');
        songItemPlay[songIndex].classList.remove('ri-pause-circle-line');
        songItemPlay[songIndex].classList.add('ri-play-circle-line')

        gif.style.opacity = 0;




    }

}


)

audioElement.addEventListener('timeupdate', function () {

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)

    myProgressBar.value = progress;
    updateTime();
    if (audioElement.currentTime <= timeLength) {
        myProgressBar.addEventListener('change', function () {
            audioElement.currentTime = myProgressBar.value * audioElement.duration / 100

        })
        // update Seekbar;
    }
});
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('ri-pause-circle-line');
        element.classList.add('ri-play-circle-line');


    })
}

songItemPlay.forEach((element) => {

    element.addEventListener('click', (e) => {
        if (audioElement.paused) {
            makeAllPlays();
            songIndex = parseInt(e.target.id)
            e.target.classList.remove('ri-play-circle-line');
            e.target.classList.add('ri-pause-circle-line')
            audioElement.src = `songs/${songIndex + 1}.mp3  `;
            masterSong.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('ri-play-circle-line');
            masterPlay.classList.add('ri-pause-circle-line');
            updateTime();



        } else {
            e.target.classList.remove('ri-pause-circle-line');
            e.target.classList.add('ri-play-circle-line')
            audioElement.pause()
            gif.style.opacity=0;
            masterPlay.classList.remove('ri-pause-circle-line');
            masterPlay.classList.add('ri-play-circle-line');
        }
    })
})

document.getElementById('next').addEventListener('click', function () {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3  `;
    masterSong.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('ri-play-circle-line');
    masterPlay.classList.add('ri-pause-circle-line');
    updateTime();

})

document.getElementById('previous').addEventListener('click', function () {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3  `;
    masterSong.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('ri-play-circle-line');
    masterPlay.classList.add('ri-pause-circle-line');
    updateTime();
})
var isPlaying = true;
function isPlaying() {
    if (songItemPlay[songIndex] === isPlaying || masterPlay.onclick(() => {
        audioElement.play()
    })) {
        songItemPlay[songIndex].classList.remove('ri-pause-circle-line');
        songItemPlay[songIndex].classList.add('ri-play-circle-line')
    }
}


//  let update = setInterval(()=>{
//     let minutes = Math.floor(audioElement.currentTime/60);
//     let seconds = audioElement.currentTime%60;
// if(seconds>0 && minutes>0){

//    timeDisplay.innerHTML=` 0${minutes}: 0${seconds}  `
//    console.log(minutes);
//    console.log(seconds);

// }else{
//     clearInterval(update)
// }
// },1000);



// function handleTimer(){

//     let minutes = Math.floor(audioElement.currentTime/60);
//     let seconds = Math.floor(audioElement.currentTime%60);

//     if(audioElement.currentTime>=0 && !audioElement.paused){

//         var startTimerId = setInterval(()=>{
//         console.log(minutes, seconds)
//             timeDisplay.innerHTML= `0 ${minutes}: 0${seconds}  `
//             console.log(startTimerId)
//         },1000)
//     }else{
//         clearInterval(startTimerId)
//     }

// }

function updateTime() {
    myProgressBar.value = (audioElement.currentTime / audioElement.duration) * 100
    let minutes = Math.floor(audioElement.currentTime / 60)
    if (minutes < 10) {
        min = '0' + String(minutes)
    }
    let seconds = Math.floor(audioElement.currentTime % 60)
    if (seconds < 10) {
        seconds = '0' + String(seconds)
    }
    timeDisplay.innerHTML = ` ${minutes}:${seconds}`

}

// console.log(audioElement.currentTime)