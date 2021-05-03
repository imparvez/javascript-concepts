function reverseString(str) {
    var reverseStr = '';
    var strToArray = str.split('');
    for(var i = strToArray.length -1; i >= 0; i--) {
        reverseStr += strToArray[i];
    }

    return reverseStr;
}
  
console.log(reverseString('parvez'));