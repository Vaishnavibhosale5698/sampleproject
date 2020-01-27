const fib = (target, col = [0, 1]) => {
    if (typeof target !== "number") {
      throw new Error("Argument has to a number");
    }
  
    if (target === 0) {
      throw new Error("Target count cannot be 0");
    }
  
    if (target === 1) {
      return [0];
    }
  
    if (col.length === target) {
      return col;
    }
  
    const collectionLength = col.length;
    const n1 = col[collectionLength - 2];
    const n2 = col[collectionLength - 1];
    const addition = n1 + n2;
    const newCollection = [...col, addition];
  
    return fib(target, newCollection);
  };
  
  module.exports = fib;