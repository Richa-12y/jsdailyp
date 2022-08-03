//convert first letter to upper case
const word="freecodeword"

const firstLetter=word.charAt(0)
console.log(firstLetter)
const firstLetterC=firstLetter.toUpperCase()
console.log(firstLetterC);
const wordS=word.slice(1);
console.log(wordS)
const Data=firstLetterC+wordS;
console.log(Data);
//shorts from
const words="freecodeword"

const Datas=words.charAt(0).toUpperCase()+words.slice(1)
console.log(Datas)

//count all the vowels and const in given string
function calculateCounsAndVowel(string){
     var vCount=0;
     var cCount=0
     var vowel="aeiou"
     for(var i=0;i<string.length;i++){
       if(vowel.includes(string[i])){
         vCount=vCount+1;
       }else{
         cCount=cCount+1;
       }
     }
     return`number of vowel ${vCount} and number of ${cCount}`
     
   }
   console.log(calculateCounsAndVowel("you are welcome"))

   
   function converToCaps(value){
     var words=value.split(" ");
     console.log(words)
     var tempArray=[];
     for(var x=0;x<words.length;x++){
       tempArray.push(words[x].charAt(0).toUpperCase()+words[x].slice(1))
   }
     console.log(tempArray);
     console.log(tempArray.join(' '));
   
   }
   converToCaps("write a javascript funcation");


   function eachLetter(str){
    var newwords=str.split(" ");
    console.log(newwords)
    var tempArrays=[];
    for(var i=0;i<newwords.length;i++){
      tempArrays.push(newwords[i].charAt(0).toUpperCase()+newwords[i].slice(1))
  }
    console.log(tempArrays);
    console.log(tempArrays.join(' '));
  
  }
  eachLetter("what are you doing?");





  