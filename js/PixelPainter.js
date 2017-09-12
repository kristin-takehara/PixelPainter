var colorArray = ['#9B59B6','#85C1E9','#F1948A','#F1C40F','#76D7C4','#DC7633','#EAEDED','#AF601A','#21618C'];
var selectedColor;
var width = 0;
var height = 0;

//clear button code: 
var clearButton = document.createElement("button");
  clearButton.id = "action";
  clearButton.innerHTML = "CLEAR";
  clearButton.addEventListener("click", clearCanvas);

  pixelPainter.appendChild(clearButton);

//eraser button code:
var clearButton = document.createElement("button");
  clearButton.id = "action";
  clearButton.innerHTML = "ERASER";
  clearButton.addEventListener("click", eraserActivated);
  pixelPainter.appendChild(clearButton);




//create forloop to generate parent div = row

function divCanvas(width, height){
  //this for loop sets the parent div row
for(var i = 0; i < width; i++){
  var ppCanvas = document.createElement("div");
  ppCanvas.className = "cellDivRow";
  pixelPainter.appendChild(ppCanvas);
  //this for loop creates divs within the parent div row
  for (var j = 0; j < height; j++){
    var cells = document.createElement("div");
    cells.addEventListener("mousemove", changeColor);
    cells.className = "cellsInRow";
    ppCanvas.appendChild(cells);
  } 
  
}
//this for loop creates the color pallete which is divs in the parent row
for (var k = 0; k < colorArray.length; k++){
  var colorCanvas = document.createElement('div');
  colorCanvas.style.backgroundColor = colorArray[k];
  colorCanvas.addEventListener("click", selectColor);
  colorCanvas.className = "paintParentRow";
  pixelPainter.appendChild(colorCanvas);
}

}
divCanvas(51,51);


function changeColor(){
  event.target.style.backgroundColor = selectedColor;
}

//sets colors by selecting the color pallete
function selectColor(){
  selectedColor = event.target.style.backgroundColor;
}

//set cells to background white, this is clears canvas for more creations
function clearCanvas(){
  cells = document.getElementsByClassName("cellsInRow");
  for (var i =0; i < cells.length; i++){
    cells[i].style.backgroundColor = 'fdfefe';
  }
}

function eraserActivated(){
  selectedColor = event.target.style.backgroundColor;

}




