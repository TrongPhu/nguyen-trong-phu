/**
 * 
 * Problem 1: Three ways to sum to n
    # Task
    Provide 3 unique implementations of the following function in JavaScript.

    **Input**: `n` - any integer

    *Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.

    **Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.
 */


const sum_to_n_a = function (n) {
    let total = 0;
    for (let i = 1; i <= n; i++) total += i;
    return total;
  };
  
  const sum_to_n_b  = function (n) {
    if (n <= 1) return 1;
    return n + sum_to_n_b(n - 1);
  };
  
  const sum_to_n_c = function (n) {
    let arr = Array.from({length: n + 1}, (_x, i) => i);
    return arr.reduce((total,currentValue) => total + currentValue);
  };
  

  console.log(sum_to_n_a(5));
  console.log(sum_to_n_b(5));
  console.log(sum_to_n_c(5));