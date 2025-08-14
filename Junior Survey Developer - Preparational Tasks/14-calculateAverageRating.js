// Problem:
// Given ratings from 1–5, return the average rating.

function averageRating(ratings) {
  let avgRating = 0;
  let sumRatings = 0;
  let countRatings = ratings.length;

  for (let i = 0; i < countRatings; i++) {
    sumRatings += ratings[i];
  }

  avgRating = sumRatings / countRatings;

  return avgRating.toFixed(2);
}

console.log(averageRating([5, 4, 3, 5, 4]));
// Output: 4.20

// Solution 2
function averageRating2(ratings) {
  let sum = ratings.reduce((acc, num) => acc + num, 0);
  return (sum / ratings.length).toFixed(2);
}

console.log(averageRating2([5, 4, 3, 5, 4])); 
// Output: 4.20

