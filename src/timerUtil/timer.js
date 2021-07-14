var timePassed = 0;
var timeLimit = 0;
var timeInterval = null;



const COLOR_CODES = {
  info: {
    color: "green"
  }
};

export let remainingPathColor = COLOR_CODES.info.color;


export function formatTimeLeft(time) {
  time = time*60;
  timeLimit = time;
  // The largest round integer less than or equal to the result of time divided being by 60.
  const minutes = Math.floor(time / 60);
  
  // Seconds are the remainder of the time divided by 60 (modulus operator)
  let seconds = time % 60;
  
  // If the value of seconds is less than 10, then display seconds with a leading zero
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // The output in MM:SS format
  return `${minutes}:${seconds}`;
}

export const startTime = ()=> {
  timeInterval = setInterval(()=>{
    var timeLeft = 0;
    timePassed += 1;
    timeLeft =  timeLimit - timePassed;

    document.getElementById("timeLeft").innerHTML = formatTimeLeft(timeLeft);
  },1000);
}
