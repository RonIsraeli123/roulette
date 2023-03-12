const sendMailAction = (playersAndBalls, dstMail) => {
  let finalMessage = `*player + balls* \n`;

  playersAndBalls.forEach((element) => {
    let playerNumber = element[0];
    let playerBalls = element[1];
    finalMessage += `${playerNumber} - ${playerBalls} \n`;
  });

  const myMail = 'hibusiness1000@gmail.com';
  const key =
    'E71CC0B7D39BD03F3931C5EE881E94427DCB182498F15774BB06D785E95FA884E8FE5654B671386ED01D57DAFAF6DA92';
  const password = 'mBHXQAEAX84Tx2g';
  const subject = 'Roulette Game';
};

export default sendMailAction;
