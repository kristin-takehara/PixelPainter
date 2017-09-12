//create forloop to generate parent div = row
for(var i = 0; i < 51; i++){
  var ppCanvas = document.createElement("div");
  ppCanvas.className = "cellDivRow";
  pixelPainter.appendChild(ppCanvas);
  for (var j = 0; j < 61; j++){
    var cells = document.createElement("div");
    cells.className = "cellsInRow";
    ppCanvas.appendChild(cells);
  }
}

//create new set of parent and child divs for colors:
for (var k = 0; k < 11; k++){
	var colorCanvas = document.createElement('div');
	colorCanvas.className = "paintParentRow";
	pixelPainter.appendChild(colorCanvas);

//insert colors into palate  
	for (var l = 0; l < 11; l++){
    var colors = ["red", "blue", "yellow"];
		var paintColors = document.createElement('div');
		paintColors.className = "paintBox";
    paintColors.style.backgroundColor = colors;
		colorCanvas.appendChild(paintColors);
	}
}


