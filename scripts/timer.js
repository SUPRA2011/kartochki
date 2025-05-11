let totalTime  = 60
let intervalId = 0
const stTime = document.querySelector(".state__time");
function startTimer()
{const stMoves = document.querySelector(".state__moves");}
function stopTimer()
{totalTime=0;
    clearInterval(intervalId);}

export {totalTime, intervalId, startTimer, stopTimer}