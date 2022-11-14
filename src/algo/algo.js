function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const returnNumbers = (players, sum_balls) => {
  let results = [];
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  for (let player = 0; player < players; player++) {
    let options = [];
    for (let num = 0; num < sum_balls; num++) {
      let index = getRandomInt(0, array.length - 1);
      options.push(array[index]);
      array.splice(index, 1);
    }
    results.push(options);
  }
  return results;
};

export default returnNumbers;
