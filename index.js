
function takeANumber(katzDeliLine, name){
  var position = katzDeliLine.length +1;
  katzDeliLine.push(name);
  var welcome = ("Welcome, " +name+ " You are number" +position+ "in line.");
  return welcome;
}
