// Code your solution in this file


// Code your solution in this file


function findMatching(the_arr, thing_to_be_looked_for){
  return the_arr.filter(function(each_item){
    return each_item.toLowerCase() == thing_to_be_looked_for.toLowerCase()
  })
}

function fuzzyMatch(the_arr, the_beginning_part){
  return the_arr.filter(function(each_item){
    // NOW LOOP THROUGH EACH CHARACTER TO CHECK IF ITS THE SAME AND IN ORDER
     new_arr = []
     for (let word of the_arr){
        for (let i = 0;i < the_beginning_part.length; i++){
             if (word[i] === the_beginning_part[i]){
                continue;
             }else{
                 break;
             }
        }
     }
  })
}

function matchName(){
  
}