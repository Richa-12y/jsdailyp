function converUpperToLower(str){
     var firstL=str.slice(0,1)
     console.log(firstL)
     var rest = str.slice(1).toLowerCase(); //get the rest of the string and make it Lowercase
     console.log(rest)
     var totalLength=firstL.concat(rest)
     console.log(totalLength)
}
converUpperToLower("YOUAREMYSUNSHINE")
//WAP TO check vowel no to given string 
function checkTheStringVowel(string){
  str= string.toLowerCase()
     var count=0;
    for(var i=0;i<str.length;i++){
      if(str.charAt(i)=='a'||str.charAt(i)=='e'||str.charAt(i)=='i'||
         str.charAt(i)=='o'||str.charAt(i)=='u'
         
        )
        {
          count++;
        }
    }
    console.log(`count ${count}`)
           
  }
  checkTheStringVowel("You are my sUnshine ")

  //write a program for count how many no are there and alphbhet
  function checkTheString(str){
     var numberCount=0;
     var alphbetCount=0;
    for(var i=0;i<str.length;i++){
      if(str.charAt(i)>=0 && str.charAt(i)<=122)
       
        {
          numberCount++
        }
      else{
        alphbetCount++
      }
    }
    return`This is number ${numberCount} and here is alphbetcount ${alphbetCount}`
           
  }
  console.log(checkTheString("12345ABCabcijk"))

//WAP a js function that return a passed string with letter in alphabetical order

function alphabeticalOrder(str){
     var checkString=str.split('').sort((a,b)=>a>b ? 1:-1).join('')
     console.log(checkString)
   }
   alphabeticalOrder("amnldfljkuoifofyrutfgvcjcgjddytyd")
//write a program to find the vowels in given string

function countLetter(str){
     var vowels='aeiou'
     var chechVowel=str.split('').filter(s=>vowels.indexOf(s)>-1).length
     console.log(chechVowel)
   }
   countLetter("richa is good web developers")
//wap for factorization?
function factorialize(num){
     if(num===0||num===1)
       return 1;
     for(var i =num-1;i>=1;i--){
       num=num*i
     }
     return num;
   }
  console.log(factorialize(7))
//wap a js program to check two no and reslu if one of the 
function sumofTwoNo100(a,b){
     sumofTwo=(a===100||b===100||(a+b)===100);
     
     console.log(sumofTwo)
   }
     sumofTwoNo100(100,0)
     sumofTwoNo100(0,100)
     sumofTwoNo100(50,120)