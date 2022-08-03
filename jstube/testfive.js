function getCamelCase(str) {
     let strone=str.toLowerCase().split(' ');
     console.log(strone);
     let result=strone.map((el)=>{
          let resultone=el.split('')
          console.log(resultone);
          let[a,...b]=resultone;
          console.log(b);
          let restData=b.join('')
          console.log(restData)

          return (`${a.toUpperCase()} ${restData}`)
     })
     return result.join(' ')
}
console.log(getCamelCase("HI MY NAME IS RICHA"))

