function checkPrimen(n) {
     var i,n, isPrime=true;

     for (i= 2; i <=n-1; i++) {
          if(n%2===0){
               isPrime=true
               break;
          }
          if (isPrime==true) {
               console.log(`given number is prime ${n} number`)
          } else {
               console.log(`given number is not prime ${n} number`)

          }
     }
     
}
checkPrimen(10)
//check the no negtive and even +ve even,odd and even odd and -ne

function evenorpostiveCheck(n){
     var x=7;
     if(x>0 && n%2===0){
       console.log("number is postive and even");
     }
     else if(x>0 && n%2!==0){
           console.log("number is postive and odd");
   
     }
     else if(x<0 && x%2==0){
           console.log("number is negative and even");
   
     }
     else if(x<0 && x%2!==0){
               console.log("number is negative and odd");
   
     }
     else{
               console.log("number is zero");
   
     }
   }
   evenorpostiveCheck(13)

//fibonacci sequence program

function fib(nums){
     const fib=[0,1];
     for(let i=2;i<=10 ;i++){
       fib.push(fib[i-2]+fib[i-1])
     }
     return fib;
   }
   console.log(fib(11))

   //check that vowels no is given string

function countVowelConstans(string){
     var vCount=0;
     var cCount=0;
     var vowel="aeiou";
     for(var i=0;i<string.length;i++)
       {
         if(vowel.includes(string[i])){
           vCount=vCount+1;
         }
         else{
           cCount=cCount+1;
         }
       }
       
       return`vowel count:${vCount} and counst count:${cCount}`
     }
     console.log(countVowelConstans("aeiounbn n hghg"))

//find the key value in object
let newVlaue=[
    {
     name:"richa",
     age:"17",
     height:"7"
     },
     {
      name:"bhanu",
      age:"17",
      height:"7"
      },
      {
        name:"nikhil",
        age:"17",
        height:"7"
        },
    
    ]
   
   const modiF=Object.keys(newVlaue[0])
   const modiff=Object.values(newVlaue)
   const newData=modiff.map((el)=>{
       return(el)
   })
   console.log(newData)
   
   const newDta=modiF.map((e)=>{
       return(e.toUpperCase())
   })
   console.log(newDta)
