let userName = "Phillis";
let userQuestion = "Will I ever find love?";
randomNumber = Math.floor(Math.random() * 8);
eightBall = "";

if (userName != "") {
  console.log(`Hello ${userName}!`);
} else {
  console.log("Hello!");
}

console.log(
  `${userName}'s question is, ${userQuestion.toLowerCase()}! Let the magic 8 ball tell you the truth!`
);

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
  default:
    console.log("Seems you broke the code!");
}

console.log(eightBall);
