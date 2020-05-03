function RangeMapper(number, toMin, toMax) {
  var fromMax = 100
  var fromMin = 0

  var fromAbs = number - fromMin;
  var fromMaxAbs = fromMax - fromMin;

  var normal = fromAbs / fromMaxAbs;

  var toMaxAbs = toMax - toMin;
  var toAbs = toMaxAbs * normal;

  var to = toAbs + toMin;

  return to;
}

function RangeMapper2(number, fromMin, fromMax, toMin, toMax) {

  //clamp
  /*
  if (number > fromMax) {
    number = fromMax
  }
  */
  var fromAbs = number - fromMin;
  var fromMaxAbs = fromMax - fromMin;

  var normal = fromAbs / fromMaxAbs;

  var toMaxAbs = toMax - toMin;
  var toAbs = toMaxAbs * normal;

  var to = toAbs + toMin;

  return to;
}

showDebug = true;

document.addEventListener("keypress", function (e) {
  console.log("keypressed")
  console.log(e)
  if (e.key == "m") {
    handleDebugLayer()
  }
})


function handleDebugLayer() {

  showDebug = !showDebug;
  if (showDebug) {

    scene.debugLayer.show();
  }
  else {

    scene.debugLayer.hide();
  }
}