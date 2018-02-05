// const power = (x, y) => {
//     if(x==0) return 0;
//     if(y==1) return x;
//     if(y<0) return 1/(x*power(x, (-1*y)-1))
//     return x*power(x,y-1);
// }

// const p = power(1.90, -2);

// console.log(p);


// let obj = {
//     myVar: 'foo',
    
//     myFunc: function() { 
//       let self = this
//       console.log(self.myVar)  
    
//       setTimeout( ()=> {
//         console.log(this.myVar)
//       }, 1000)
//     }
//   }

//   obj.myFunc() // foo ... then... foo

//   let ob = {
//       mVar : 'My Variable',

//       thisFunc : function()  {
//           console.log(this.mVar);          
//       }
//   }

//   ob.thisFunc();
  


//Chanllenge

const user = {
    name: 'Misba',
    cityies: ['Kulaura', 'Moulvibazar', 'Sylhet'],
    printData(){
        return this.cityies.map((city, index)=> '(' + index + ') '+this.name + ' Lived in '+ city);
    }
}

//console.log(user.printData());

const multiplier = {
    multiplyBy : 5,
    multiplying : [5, 6, 7, 8, 9, 10],
    printMultiply(){
        this.multiplying.map((m, i)=> console.log(this.multiplyBy + ' X ' + i + ' = ' + this.multiplyBy*i) );
    }
}
multiplier.printMultiply()
