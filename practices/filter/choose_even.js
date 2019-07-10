'use strict';

function choose_even(collection) {
  //  var result=[];
  //  for(var i=0;i<collection.length;i++){
  //    if(collection[i]%2==0){
  //      result.push(collection[i]);
  //    }
  //  }
return collection.filter((number)=>{
  return number%2==0;
});
  //implement here
}

module.exports = choose_even;
