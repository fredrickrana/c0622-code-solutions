let currentCount = 3;
const countdown = setInterval(() => {
  console.log(currentCount);
  currentCount--;
  if (currentCount < 1) {
    console.log('Blast off!');
    clearInterval(countdown);
  }
}, 1000);
