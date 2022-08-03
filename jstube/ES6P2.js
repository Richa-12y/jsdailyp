//write a javaScript function to get the difference between two dates in days?
function getDiffInDays(date1,date2) {
     newDate1=new Date(date1)
     newDate2=new Date(date2)
     var days=Math.floor(
         ( Date.UTC(newDate1.getFullYear(),newDate1.getMonth(),newDate1.getDate())-
          Date.UTC(newDate2.getFullYear(),newDate2.getMonth(),newDate2.getDate()))/
          (1000*60*60*24)

     )
     console.log(days)

}
getDiffInDays("02/02/2010","02/02/2009")

//write a javaScript function to get  the quarter(1 to 4) of the year.
 function getQuarter(date) {
     switch (date.getMonth()) {
          case 0:   
          case 1:
          case 2:   
            return 1;
               case 3:    
               case 4: 
               case 5:    
               return 2;
               case 6:
                    case 7:
                         case 8:
               return 3;
               case 9:  
               case 10:
               case 11:    
               return 4;
     }
 }

console.log(getQuarter(new Date()))

//Problem Statement: Given an array of numbers, write a function to remove 
//all duplicates from the array and return the new array
//Sample Input: [1, 2, 3, 1, 4, 4, 5]
//Sample Output: [1, 2, 3, 4, 5]

function removeRapetedValue() {
     var arrays=[1, 2, 3, 1, 4, 4, 5,8,8,9,9]
     var arraymodification=arrays.toString().trim().split(',')
     console.log(arraymodification)
     
          var data=arraymodification.filter((e,i)=>i
          ===arraymodification.indexOf(e))
          return data

}
console.log(removeRapetedValue())

function findNegativesArray() {
     var mtx=[[1,2,3],
     [4,-5,6],
     [-7, -8, 9]]
     var newArray=[]
     for(var i=0;i<mtx.length;i++){
        for (var j=0;j<mtx[i].length;j++) {
               if (mtx[i][j]<0) {
                    newArray.push(mtx[i][j])
               }
               
          }
     }
     return newArray
}
console.log(findNegativesArray())


function findArrayNegativeValue(){
     var data=[[2,3,-8],[5,6-8],[-10,11,-11]]
    var result=data.map(el=>{
      return el.filter(e=>e<0)
    })
    return result
     
   }
  console.log(findArrayNegativeValue())