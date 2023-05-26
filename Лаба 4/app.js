timeBoxHours = document.getElementById('hours');
timeBoxMinutes = document.getElementById('minutes');
timeBoxSeconds = document.getElementById('seconds');
timeBox = document.getElementById('time-box');
imgBox = document.getElementById('img-box');

function setDate() {
	now = new Date();

	//Получение и занесение текущих значений времени
	curSeconds = now.getSeconds();
	curMins = now.getMinutes();
  curHour = now.getHours();

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
  
  
  //document.body.style.background =  'linear-gradient(' + ((curHour*3600 + curMins*60 + curSeconds)/86400 * -360) + 'deg, #16175e, #ffb100) fixed';
}

setInterval(setDate, 1000);
setDate();