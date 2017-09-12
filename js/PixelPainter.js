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

