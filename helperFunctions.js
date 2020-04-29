function RangeMapper (number, toMin, toMax) {
    var fromMax = 100
    var fromMin = 0

    var fromAbs  =  number - fromMin;
    var fromMaxAbs = fromMax - fromMin;      
   
    var normal = fromAbs / fromMaxAbs;

    var toMaxAbs = toMax - toMin;
    var toAbs = toMaxAbs * normal;

    var to = toAbs + toMin;
   
    return to;
  }