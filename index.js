
function takeANumber(katzDeliLine, name){
  var position = katzDeliLine.length +1;
  katzDeliLine.push(name);
  var welcome = ("Welcome, " +name+ ". You are number " +position+ " in line.");
  return welcome;
}

function nowServing(katzDeliLine){

if (katzDeliLine===0);
return "There is nobody waiting to be served!";}

else {
  var serving = katzDeliLine.shift();
  return serving;
}
}
