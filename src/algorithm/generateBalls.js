import { BALLS } from './config';

const getRandomInt = (min, max) => {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min
  );
};

const generateBalls = (players, sum_balls) => {
  let results = [];
  let array = Array.from(BALLS);
  for (let player = 0; player < players; player++) {
    let options = [];
    for (let num = 0; num < sum_balls; num++) {
      let index = getRandomInt(0, array.length - 1);
      options.push(array[index]);
      array.splice(index, 1);
    }
    results.push(
      options.sort(function (a, b) {
        return a[0] - b[0];
      })
    );
  }
  return results;
};

export default generateBalls;
