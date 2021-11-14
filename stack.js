// solving stack questions using array
var stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack);
var popoperation = stack.pop(); //this will remove the top most element that is 4 and will return
console.log(popoperation);
console.log(stack);
// reverse of string
function reverseString(string) {
  var stackstring = [];
  for (var i = 0; i < string.length; i++) {
    stackstring.push(string[i]);

    var reverseString = "";
    while (stackstring.length > 0) {
      reverseString = reverseString + stackstring.pop();
    }
    return reverseString;
  }
}
console.log(reverseString("abcde"));
