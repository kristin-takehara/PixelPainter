var colorArray = ['#9B59B6','#85C1E9','#F1948A','#F1C40F','#76D7C4','#DC7633','#EAEDED','#AF601A','#21618C'];
var selectedColor;

//create forloop to generate parent div = row
for(var i = 0; i < 51; i++){
  var ppCanvas = document.createElement("div");
  ppCanvas.className = "cellDivRow";
  pixelPainter.appendChild(ppCanvas);
  for (var j = 0; j < 61; j++){
    var cells = document.createElement("div");
    cells.addEventListener("mouseover", changeColor);
    cells.className = "cellsInRow";
    ppCanvas.appendChild(cells);
  }
}

//create new set of parent and child divs for colors:
for (var k = 0; k < colorArray.length; k++){
	var colorCanvas = document.createElement('div');
	colorCanvas.style.backgroundColor = colorArray[k];
  colorCanvas.addEventListener("click", selectColor);
	colorCanvas.className = "paintParentRow";
	pixelPainter.appendChild(colorCanvas);
}

function changeColor(){
  event.target.style.backgroundColor = selectedColor;
}


function selectColor(){
  selectedColor = event.target.style.backgroundColor;
}