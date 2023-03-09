function solution(array){
    
    const max = Math.max.apply(null,array)
    const index = array.indexOf(max)
   
    var answer = [max,index];
    return answer
    }