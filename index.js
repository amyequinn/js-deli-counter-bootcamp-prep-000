
function takeANumber(katzDeliLine, name){
  var position = katzDeliLine.length +1;
  katzDeliLine.push(name);
  var welcome = ("Welcome, " +name+ ". You are number " +position+ " in line.");
  return welcome;
}

function nowServing(katzDeliLine){

if (katzDeliLine.length===0){
return "There is nobody waiting to be served!";
}
  var serving = katzDeliLine.shift();
  var currentlyServing = ("Currently serving " +serving+ ".");
  return currentlyServing;
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length===0){
  return "The line is currently empty.";
  }
var number = katzDeliLine.length;
var line =("The line is currently:");
  return line;
}
