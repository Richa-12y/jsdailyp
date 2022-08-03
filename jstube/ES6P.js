//wap to search for a date within string 

function isStringDate(passDate) {
     var regex=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
     if (regex.test(passDate)) {
          return "String is Data"
     }
     else{
          return"String is not Data"
     }
    
}
console.log(isStringDate("17-7"));
//wap to check whether input is data object or not

function checkDataObject(input) {
   if(Object.prototype.toString.call(input)==="[object Date]"){
     return true
   }
   else{
     return false
   }
}
console.log(checkDataObject(new Date()))

//wap to get the number of days in month

function getDays(month,year) {
     return new Date(year,month,0).getDate()
}
console.log(getDays(7,2022));

//wap in javaScript function to add specified min to a Date object?
function addMinutes(date,minutes) {
     console.log(`Before addtion ${date}`)

     let millisec=date.getTime();
     millisec=millisec+minutes*60000;
     console.log(`After addtion ${new Date(millisec)}`)
}
addMinutes(new Date(2020,10,15),20)