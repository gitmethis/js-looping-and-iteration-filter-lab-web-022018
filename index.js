// Code your solution in this file


// Code your solution in this file


function findMatching(the_arr, thing_to_be_looked_for){
  return the_arr.filter(function(each_item){
    return each_item.toLowerCase() == thing_to_be_looked_for.toLowerCase()
  })
}

function fuzzyMatch(the_arr, the_beginning_part){
 let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName(){
  
}