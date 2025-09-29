// brute force.

function areRotations(s1, s2) {
    // code here
    if(s1.length != s2.length){
        return false;
    }
    
    let count = 0; 
    let newStr = s1; 
    while(count < s1.length){
        newStr = newStr.slice(1) + newStr.slice(0, 1);
        count++; 
        if(s2 === newStr){
            return true;
        }
    }
    
    return false
}

console.log(areRotations("abcd","cdab"));

// o(n2) time complexicity;



// Optium
function optimumStringRotations(s1, s2) {
    // code here
    if(s1.length != s2.length){
        return false;
    }
    
   let concatenatedStr = s1 + s1; 
   if(concatenatedStr.includes(s2)){
       return true;
   }
   return false;
}