
function binaryAgent(str) {
  var digit=7;
  var resultCharCode=[];
  var result=[];
  var myArr=str.split(" ");
  for (var i = 0; i < myArr.length; i++) {
    var total=0;
    for (var j = 0; j < digit+1; j++) {
      total+=myArr[i][j]*Math.pow(2,digit-j);
  }
    result.push(total);
    var temp=String.fromCharCode(total);
    resultCharCode.push(temp);
}
console.log(result);
return resultCharCode.join("");;
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
