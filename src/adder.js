// function adder(a, b){
// return a + b; 
// }

// const adder = (a, b, c) =>{
//     return (a || 0) + (b || 0) + (c || 0);
// } 

const adder = (...nums) =>{
    return nums.reduce((total , num) => total + num ,0)
} 

module.exports = adder;