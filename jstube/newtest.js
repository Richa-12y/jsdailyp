//
function multiply(a, b){
     return a * b
    }
    
 console.log(multiply(1, 8))

 function reverseTheString(str) {
     var newStr=str.split('').reverse().join('')
     console.log(newStr)
 }
 reverseTheString("This is my new job")

 function reverseString(str) {
// Step 1. Create an empty string that will host the new created string
    newString=''
    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
       for(var i=str.length-1;i>=0;i--){
          //   newString += str[i]; // or 
          newString = newString + str[i];
            console.log(newString);
    /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/
 
}
// Step 3. Return the reversed string
return newString; // "olleh"

}

 reverseString('hello')


 function reverseStrings(strs) {
     return (strs === '') ? '' : reverseString(strs.substr(1)) + strs.charAt(0);
   }
   reverseStrings("home");

function countVowels(str) {
    var vowelCount=0;
    var vowels=["a","e","i","o","u"];
    for(var i=0;i<str.length;i++){
        for(var j=0;j<vowels.length;j++){
            if(str[i]===vowels[j]){
                vowelCount++;
            }
        }
    }
    return vowelCount
}
console.log(countVowels("richa"))

function checkDivison(n,x,y) {

    return !(n%x||n%y)

}
console.log(checkDivison(18,6,3))

function makeNegativeNumber(num) {
    if(num<0){
        return num;
    }
    else{
        return num*-1
    }
    //return -Math.abs(num)
}
console.log(makeNegativeNumber(10))


function findSmallestNumber() {
    var arrayOfNumber=[10,16,79,80]
    var SmallestNumber;
    for(var i=0;i<arrayOfNumber;i++){
       var arrNumber=arrayOfNumber[i];

       if(i===0){
        SmallestNumber=arrNumber;
       }
       if(arrNumber<SmallestNumber){
        SmallestNumber=arrNumber
       }
       console.log(SmallestNumber)
    }
}
findSmallestNumber()

const rps=(p1,p2)=>{
  if(p1===p2) 
  return "Draw!";
  var rules={rocks:"scissor",paper:"rock",scissor:"paper"}
  if(p2===rules[p1]){
    return "Player 1 won!"
  }
  else{
    "Player 2 won!"
  }
}

function addTwoArray(arr1,arr2) {
    for(var i=0;i<arr1.length;i++){
        var arrayTwo=arr2[i];
        var arrayOne=arr1[i];
      const bothArray=arrayOne+arrayTwo
      console.log(bothArray)        
   }
}
addTwoArray([7,8,10],[8,7,5])

function name(params) {
    var newparams=params.split('').join('').toUpperCase('')
    console.log(newparams)
}
name("this is your filed")