function fistEachconvertSmall(params) {
     var strNew=params.split("")
     console.log(strNew)
     var temp=[];

     for(var i=0;i<strNew.length;i++){
        temp.push(strNew[i].toLowerCase())
     }
     console.log(temp)
     console.log(temp.join(""))
}
fistEachconvertSmall("APPLE IS SO SWEET")


function writeLetter(str){
     for(var i=0;i<str.length;i++){
       console.log(str.charAt(i).toUpperCase());
     }
     
   }
   writeLetter("abcd")
   
   function writeLetters(str){
     for(var i=1;i>0;i--){
        
       var nreWords=str.split('').reverse('')
       console.log(nreWords.join(''))
   
     }
     
   }
   writeLetters("i love you")

   function revseTheLetter(prams) {
      for(var i=1;i>0;i--){
        var nreWorde=prams.split('').reverse('')
        console.log(nreWorde.join(''))
      }
   }
   revseTheLetter("Hello how you doing ?")


   function findRepetedAlphbet(str){
     var count=0;
    for(var i=0;i<str.length-1;i++){
      if(str.charAt(i)=='a'|| str.charAt(i)=='o'|| str.charAt(i)=='y'){
        count++;
      }
    }
    console.log(count)
  }
    findRepetedAlphbet("Today is good days")