
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  katzDeliLine.length++;
  var welcome = ("Welcome, " +name+ " You are number" +katzDeliLine+ "in line.");
  return welcome;
}
