var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
      katzDeliLine.push(name)
     return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line."
}

function nowServing(katzDeliLine){
  let i = 0;
  while(i === katzDeliLine.length) {
    i--;
  }
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
return "Currently serving " + katzDeliLine.shift() + ".";
}

var line = []
function currentLine(katzDeli) {

   for (let i = 0; i < katzDeli.length; i++) {
     line.push(` `+[i+1]+`. `  + katzDeli[i])
   }
   return(`The line is currently:` + line);
}