

let num = 10;
function outer(){
    function inner(){
let num = 20;
} console.log(num);
}
outer();

output==20 

//------------//
let person = {
 name : "john",
getName: function(){
     return this.name;

    }
}
console. log(person.getName());

output==john

//--------------//

const i;
For(i = 1; i <5; i++){}
console.log(i);

output==5

//-------------//
const arr = [1 ,2 , 3 , 4 , 5],
 newArr = [];
for(let val in arr){
newArr.push(val);
console.log(newArr);
}
 
output==
[0]
[0, 1]
[0, 1, 2]
[0, 1, 2, 3]
[0, 1, 2, 3, 4]

//---------------------//

const arr = [1, 2 , 3, 4, 5],
[foo , bar, ...baz] = arr;
console.log(foo);
console. log(bar);
console. log(baz);

output==
1
2
[3, 4, 5]









