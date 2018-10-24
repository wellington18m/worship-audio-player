let audio; 
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let stop = document.getElementById("stop");
let ul = document.getElementById("playList");
let volume = document.getElementById("volume");
let progressSlider = document.querySelector(".progressSlider");
let songInfo = document.querySelectorAll(".song-info");
let duration = document.querySelector('.duration');
let currentTime = document.querySelector('.currentTime');
let songTitle = document.querySelector('.songTitle');
let songArtist = document.querySelector('.songArtist');
let li = document.getElementsByTagName("li");
let img = document.querySelector(".cover");
let dir = "music/";
let ext = ".mp3";
audio = new Audio();

let songs=[
 "Al Estar Ante Ti", "Al Final", "All For Love","Alza tus Ojos",
 "Angel Of The Lord", "Arrebato","At the Crosss","Dame Tus Ojos",
 "De tal Manera Me amo","Desert Song","Esta Es Mi Fe","Here I Am To Worship",
 "I Adore","Here In My Life","Hinno De Victoria","Hombres De Valor","Hoy Te Vengo a Bendecir",
  "I Belong To You","I Give You My Heart","I Will Love","I Will Run To You", "Iglesia",
  "La Niña de Tus Ojos", "Oceans Will Part","Open My Eyes","Por Un Destello De Tu Gloria",
  "Que sería de mí","Shout to the Lord","Sin Dolor","Sumérgeme","Supe Que Me Amabas",
  "The Heart Of Worship","The Power Of Your Love","Tú Estas Aquí","Un Viaje Largo","Vine  Adorarte",
  "With All I Am"
];

let artists=[
 "Abel Zavala", "Lyli Goodman", "Hillsong","Marcos Barrientos",
 "Hillsong", "Nancy Amancio","Hillsong","Marcela Gandara",
 "Abel Zabala","Hillsong","Egleyda Belliard","Hillsong",
 "Hillsong","Hillsong","Danny Berrios","Hombres De Valor","Jesús Adrian Romero",
  "Hillsong","Hillsong","Hillsong","Hillsong", "Hillsong",
  "Daniel Calveti", "Hillsong","Hillsong","Jesús Adrian Romero",
  "Jesus Adrian Romero","Hillsong","Lyli Goodman","Jesús Adrian Romero","Marcela Gandara",
  "Hillsong","Hillsong","Jesus Adrian Romero","Marcela Gandara","Marcela Gandara",
  "Hillsong"
];

let file = ".jpg";
let imgDir = "worship/"
let images = ["img1", "img2","img3","img4","cover","img5","img6",
               "img7","img8","img9","img10","img11","img12",
               "img13","img14","img15","img16","img17","img18",
               "img19","img20","img21","img22","img23","img24",
               "img25","img26","img27","img28"
];
let random = Math.floor(Math.random()*images.length);

 

img.setAttribute("src", imgDir+"img.png");
let count =0;
 audio.src=dir+songs[count]+ext;

$("#pause").hide()
 
for(let i=0; i<songs.length; i++){
	    
         let li = document.createElement("li");
        let node = document.createTextNode(songs[i]);
          li.append(node);
          
          ul.append(li);
         
 }

 const trackStatus = () =>{
  songTitle.innerHTML=songs[count];
  songArtist.innerHTML=artists[count];
 }

 

const converTime = (secs)=>{
   let min = Math.floor(secs / 60);  
   let sec = secs  % 60; 
   min = (min<10)? '0' + min : min;                       
   sec = (sec <10)? '0' + sec : sec;                       
    return (min + ":" + sec)
}
 
const showDuration =()=>{
  let d = Math.floor(audio.duration);
   progressSlider.setAttribute('max', d);                            
   duration.textContent=converTime(d);

      
         
 }

 const updateSlider = () =>{
 	
 	let c = Math.round(audio.currentTime);
 	 progressSlider.value = c;
 	 currentTime.textContent=converTime(c);


 }

  $('.progressSlider').on("change", ()=>{
      audio.currentTime = progressSlider.value;
      currentTime.textContent= converTime(audio.currentTime)
  });

  function SongPlaying(){
  	   for(let i=0; i<li.length; i++){
	     
          	   
	 	       let el = li[0];
	 	       while(el){
	 	       	 
	 	       	 if(el.tagName === "LI"){
                      el.classList.remove("style")
	 	       	     
	 	       	 }
	 	       	  
	 	       	  el = el.nextSibling;
	 	       	 
	 	    }
    
    }

  li[count].classList.add("style")  
  }


function init(){
	audio.src=dir+songs[count]+ext;
	audio.play()
}


 
   
   setInterval(()=>{
	  random = Math.floor(Math.random()*images.length);
	  img.setAttribute("src", imgDir+images[random]+file);
       
   },15000)
  
       



function displaySongInfo(){
	  for(let i=0; i<songInfo.length; i++){
	    songInfo[i].style.display="inline";	
	  }
}

  


 	 $("#play").click(()=>{
        setTimeout(showDuration,1000);
          audio.play();
	 	displaySongInfo();
        $("#play").hide();
        $("#pause").show();
         SongPlaying();
         trackStatus();
   })


 	  $("#pause").click(()=>{
          audio.pause()
	 	$("#play").show();
	 	$("#pause").hide();

 	 })
	 
    for(let i=0; i<li.length; i++){
	     
          li[i].addEventListener("click", ()=>{
                setTimeout(showDuration,1000)
                count = i;
                
               audio.src=dir+li[count].innerHTML+ext;
               trackStatus();
               audio.play()
               
          	   $("#play").hide();
	 	       $("#pause").show();
	 	       let el = li[0];
	 
               
	 	       SongPlaying();

     })

    }

 
	 
$("#next").on("click", ()=>{
	       nextSong();
          SongPlaying();
          trackStatus();
})

$("#prev").on("click", ()=>{

	count += -1;
       count = (count <0)? count = songs.length-1 : count;
       SongPlaying()
	  init()
	
	trackStatus();
})

$("#stop").on("click", ()=>{
        audio.pause();
        count=0;
        audio.currentTime=0;
        $("#play").show();
        $("#pause").hide();

        for(let i=0; i<songInfo.length; i++){
	          songInfo[i].style.display="none";

        }


    for(let i=0; i<li.length; i++){
	    
	 	       	 
	 	    if(li[i].tagName === "LI"){
                      li[i].classList.remove("style")
	 	       	     
	 	       	 }
	 	       	  
	 	     }

  
   

})

function nextSong(){
	  count +=1;
	 count = (count > songs.length-1)? count =0 : count;
	  
	   init()
     	  
}



audio.addEventListener("ended", ()=>{
           if(audio.ended){
             count +=1
           	 count = (count >songs.length-1)? count = 0 : count;
           	 init();
           	SongPlaying()
           	
     trackStatus();
        }
})
     
       
volume.addEventListener("change", ()=>{
    audio.volume = volume.value;
     
});




setInterval(updateSlider, 1000)

let search = document.getElementById("search");

search.addEventListener("keypress",(e)=>{
        let value =search.value 
       
     
         if(e.which===13){
                    
                   
              let au = audio.src=dir+value+ext;
                  audio.play();
                 console.log(au)
             }                  
             
          
            
     
       
})

search.addEventListener("keyup",()=>{
         console.log(1)
         for(i=0; i< li.length; i++){
              if(li[i].innerHTML.toLowerCase().indexOf(search.value) >-1){
                   li[i].style.display="";
              }else{
                li[i].style.display="none";

              }

         }
    
       
})
