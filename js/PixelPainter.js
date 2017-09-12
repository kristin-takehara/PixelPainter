//console.log('Baseem was here');


//cellDiv to hold all other divs
var ppCanvas = document.createElement("div");
ppCanvas.id = "cellDiv";
pixelPainter.appendChild(ppCanvas);

//forloop to create all pixel boxed as divs
var cell = Array(2500).fill(1);
for (var i =0; i < cell.length; i++){
  cell[i] = document.createElement("div");
  cell[i].className = "cells";
  ppCanvas.appendChild(cell[i]);
}

