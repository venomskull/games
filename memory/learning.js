var answer = 0;

function baseValue(value){
   return function(multipleValue){
      return value * multipleValue;
   }
}

const multiple = baseValue(2);
answer = multiple(5);
console.log(answer);