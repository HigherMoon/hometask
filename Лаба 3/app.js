timeBoxHours = document.getElementById('hours');
timeBoxMinutes = document.getElementById('minutes');
timeBoxSeconds = document.getElementById('seconds');

circleHour = document.getElementById('circle-hour');
circleMinute = document.getElementById('circle-minute');
circleSecond = document.getElementById('circle-second');


function setDate() {
	now = new Date();

	//Получение и занесение текущих значений времени
	curSeconds = now.getSeconds();
	curMins = now.getMinutes();
  curHour = now.getHours();

  circleHour.style.transform = 'rotate(' + (curHour*30+(curMins*6/12)) + 'deg)';
  circleMinute.style.transform = 'rotate(' + (curMins*6) + 'deg)';
  circleSecond.style.transform = 'rotate(' + (curSeconds*6) + 'deg)';
 //Проверка часов и корректировка, если не хватает 0 слева
  if (curHour < 10) {
  	timeBoxHours.innerHTML = "0" + curHour;
  }
  else {
  	timeBoxHours.innerHTML = curHour;
  }

  if (curMins < 10) {
  	 timeBoxMinutes.innerHTML = "0" + curMins;
  }
  else {
  	 timeBoxMinutes.innerHTML = curMins;
  }

  if (curSeconds < 10) {
  	timeBoxSeconds.innerHTML = "0" + curSeconds;
  }
  else {
  	timeBoxSeconds.innerHTML = curSeconds;
  }

  if (curSeconds % 15 == 0){
    alert("15 секунд прошло и " + ((curHour*3600 + curMins*60 + curSeconds)/86400 * 360));
  }

  document.body.style.background =  'linear-gradient(' + ((curHour*3600 + curMins*60 + curSeconds)/86400 * 180) + 'deg, #16175e, #ffb100) fixed';
}

setInterval(setDate, 1000);
setDate();