
function binaryAgent(str) {
  
  var splitArr = str.split(" ");
   
  var myArr = [];
  
  //From binar to d
  for(var i = 0; i<splitArr.length; i++){
      var x = parseInt(splitArr[i],2);
      myArr.push(x);    
  }
  
  var stringArr = [];
  //Turn numebrs into letters;
  for(var j = 0; j<myArr.length; j++){
     var y = String.fromCharCode(myArr[j]);
    stringArr.push(y);
  }
  
  return stringArr.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
