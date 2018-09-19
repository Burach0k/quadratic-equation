module.exports = function solveEquation(equation) {
  var a = +equation.substring(0,equation.indexOf("*"));
  var b = +equation.substring(equation.indexOf("^")+5,equation.indexOf("*",10)-1);
  var c = +equation.substring(equation.indexOf("x",10)+4);
  var znak1 = equation[equation.indexOf("^")+3];
  var znak2 = equation[equation.indexOf("x",10)+2];
  if(znak1 == '-') b = b*(-1);
  if(znak2 == '-') c = c*(-1);
  var d = b*b - 4*a*c;
  var x1 = Math.round((-b + Math.sqrt(d))/(2*a));
  var x2 = Math.round((-b - Math.sqrt(d))/(2*a));
  if(x1<x2) {
    return [x1,x2];
  }else{
    return [x2,x1];
  }
}
