const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Push results into object // Make it first
const surveyResults = {};

// The worlds most awful nested questions. I assume this is why promises is next
rl.question("What is your name? Nicknames are also acceptable ", (answer) => {
  surveyResults.name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    surveyResults.activity = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      surveyResults.music = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        surveyResults.meal = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          surveyResults.mealFav = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            surveyResults.sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              surveyResults.superpower = answer;
              console.log(`${surveyResults.name} likes doing ${surveyResults.activity} while listening to: ${surveyResults.meal}. There favourite meal is ${surveyResults.meal} with ${surveyResults.mealFav} being there favourite dish!${surveyResults.sport} is there favourite sport and little know fact there superpower is ${surveyResults.superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});