// Find the Symmetric Difference 求对称差分
/* 
*  The mathematical term symmetric difference 
*  (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. 
*  For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
*/

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

function sym(...args) {
  const diff = (one, two) => {
    let diff1 = [];
    let diff2 = [];
    diff1 = one.filter(item => !two.includes(item));
    diff2 = two.filter(item => !one.includes(item));
    return diff1.concat(diff2);
  }
  return [...new Set(args.reduce(diff))]
}

sym([1, 2, 3], [5, 2, 1, 4]);