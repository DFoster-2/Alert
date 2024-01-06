var time = 0;
var rewsion = "o";
function date() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var formattedTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById("Time").innerHTML = formattedTime;
    time = formattedTime;
    console.log(time);
    lookout();
}

function lookout(){
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  console.log(dayOfWeek);
  if(time == "11:50:0"){
    rewsion = "Lunchtime and exercise";
  }
  if(time == "10:0:0"){
    rewsion = "strech";
  }
  if(dayOfWeek === 2 || dayOfWeek === 3 || dayOfWeek === 5){
    if (time === "10:0:0" || time === "11:50:0"){
      var grover = document.getElementById("grover");
      grover.classList.remove("hiden");
      sounnd();
    }
  }
}



function sounnd(){
  sound = new Audio("https://freesound.org/data/previews/316/316847_4939433-lq.mp3");
  //sound.loop = true;
  sound.play();
  setTimeout(function() {
    let text = rewsion;
    let utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.voice = window.speechSynthesis.getVoices()[0];
    window.speechSynthesis.speak(utterance);
    var grover = document.getElementById("grover");
    grover.classList.add("hiden");

  }, 2000);
}


setInterval(date, 1000);





