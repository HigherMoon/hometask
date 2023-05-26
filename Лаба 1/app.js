
// Находим кнопку pring и присваиваем ей событие "click", которое запускает функцию printForm
var printButton = document.search.print;
printButton.addEventListener("click", printForm);

function printForm(e) {
	
	// достает из полей значения и проверяем, не пустые ли они
	var a = parseInt(document.search.inputA.value, 0);
	var b = parseInt(document.search.inputB.value, 0);
	var c = parseInt(document.search.inputC.value, 0);
	if (isNaN(a)) { a = 1; }
	if (isNaN(b)) { b = 1; }
	if (isNaN(c)) { c = 0; }
	
	// Находим блок, в котором будем выводить результаты
	var printBlock = document.getElementById("printBlock");
	// Создаем блок ответа
	var divElement = document.createElement("div");
	
	// строка с принятыми значениями + закидывается в блок-ответ
	var pText = document.createElement("p");
	pText.textContent = "a = " + a + " | b = " + b + " | c = " + c;
	divElement.appendChild(pText);
	
	// Находим дискриминант и выводим его с формулой
	var pFormula = document.createElement("p");
	pFormula.textContent = "D = b^2 - 4ac  =>  " + b*b + " - (" + (4*a*c) + ") = " + findD(a, b, c); 
	divElement.appendChild(pFormula);
	
	// Выводим результат о количестве корней 
	var pCheckD = document.createElement("p");
	pCheckD.textContent = checkD(a, b, c);
	divElement.appendChild(pCheckD);
	
	var d = findD(a, b, c);
	if (d < 0) 
	{ 
		var pAnswer1 = document.createElement("p");
		var pAnswer2 = document.createElement("p");
		pAnswer1.textContent = "x1 = (-b + √(b^2 - 4ac)i) / 2a ==> x1 = (" + (-b) + " + √(" + (b*b - 4*a*c)+")i) / " + (2*a);
		
		pAnswer2.textContent = "x2 = (-b - √(b^2 - 4ac)i) / 2a ==> x2 = (" + (-b) + " - √(" + (b*b - 4*a*c)+")i) / " + (2*a);
		divElement.appendChild(pAnswer1);
		divElement.appendChild(pAnswer2);
	}
	else if (d == 0) 
	{
		var pAnswer = document.createElement("p");
		pAnswer.textContent = "x = -b / (2a) = " + (-b) + " / " + "(" + (2*a) + ") = " + (-b / (2*a)) ;
		divElement.appendChild(pAnswer);
	}
	else 
	{
		var pAnswer1 = document.createElement("p");
		var pAnswer2 = document.createElement("p");
		pAnswer1.textContent = "x1 = (-b + √(b^2 - 4ac)) / 2a ==> x1 = (" + (-b) + " + √(" + (b*b)+ " - 4*" + a + "*" + c + ")) / 2*" + a + " = " + (((-b) + Math.sqrt(b*b - 4*a*c)) / (2*a));
		
		pAnswer2.textContent = "x2 = (-b - √(b^2 - 4ac)) / 2a ==> x2 = (" + (-b) + " - √(" + (b*b)+ " - 4*" + a + "*" + c + ")) / 2*" + a + " = " + (((-b) - Math.sqrt(b*b - 4*a*c)) / (2*a));
		divElement.appendChild(pAnswer1);
		divElement.appendChild(pAnswer2);
	}
	
	//Закидываем элемент в блок ответов.
	printBlock.appendChild(divElement);
	
}

function findD(a, b, c) {
	return b*b - (4 * a * c);
}

function checkD(a, b, c){
	var d = findD(a, b, c);
	if (d < 0) { 
		return "( D < 0 , квадратное уравнение имеет мнимые корни )";
	}
	else if (d == 0) {
		return "( D == 0 , квадратное уравнение имеет один корень )";
	}
	else {
		return "( D > 0 , квадратное уравнение имеет два корня )";
	}
}


 