
var newTable=document.createElement("table");
newTable.align = "center";

for (let i = 0; i < 10; i++) 
{ 
	var newRow = newTable.insertRow(i);
	
	for(let j = 0; j < 10; j++) 
	{
		var newCell = newRow.insertCell(j);
		newCell.width="50";
		newCell.innerHTML=(i+1)*(j+1);
	}
}


document.getElementById("printBlock").appendChild(newTable);
