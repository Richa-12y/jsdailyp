var persone={
     firstName:"richa",
     lastName:"singh",
     age:27,
     getFullName:function(){
          return this.firstName+ " " +this.lastName;
     },
     address:{
          bulding:"villa apartment",
          road:"rue la roau",
          city:"purnea"
     }
}
var prop;
for(prop in persone){
     console.log(prop);
}
var persones={
     firstName:"shanu",
     lastName:"singh",
     age:25,
}

persones.dummy="niki"
console.log(persones);
var prop;
for(prop in persones){
     console.log(persones[prop]);

}
console.log(persone);
console.log(persone ["age"]);
console.log(persone.address);
console.log(persone.getFullName());
console.log(persone.address.bulding);
console.log(persone.address.city);