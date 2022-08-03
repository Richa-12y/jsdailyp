//1.write javascript program to list the propeties of javaScript Object

const familyMemeber={
      
       name:"Richa Singh",
       brotherName:"Shanu Singh",
       motherName:"Bandana Singh",
       fatherName:"Mithilesh Singh",
      anotherFamily:{
          name:"Amyra Singh",
          brotherName:"Arsh Singh",
          motherName:"Rk Singh",
          fatherName:"A S",
      }

}

var props;
for(props in familyMemeber){
     console.log(familyMemeber)
}
for(props in familyMemeber){
     console.log(familyMemeber[props])
}
var count=0;
for(var key in familyMemeber){
     count=count+1;
}
console.log(count)
// 2.write javascript program to get the length of javaScript Object
var student={
     name:"richa",
     rollnumber:"65"
}
var count=0;
for(var key in student){
     count=count+1;
}
console.log(count)

// 3.write javascript function to check whether an object contains given property
var students={
     name:"Bhanu",
     rollnumber:"1"
}

function keyMatch(propertyName) {
     for(var key in students){
          if(propertyName===key){
               return true;
          }
          else{
               return false;
          }
     }
}
console.log(keyMatch("name"))