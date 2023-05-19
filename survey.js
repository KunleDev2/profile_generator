const readline = require("readline");

let fullSentence = "";
let setArray = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Whats your name? Nicknames are also acceptable :)? ", (answer) => {
  setArray.push(answer);

  rl.question("Whats an activity you like doing? ", (answer) => {
    setArray.push(answer);

    rl.question("What do you listen to while doing that? ", (answer) => {
      setArray.push(answer);

      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.) ",
        (answer) => {
          setArray.push(answer);

          rl.question(
            "What's your favourite thing to eat for that meal? ",
            (answer) => {
              setArray.push(answer);

              rl.question(
                "Which sport is your absolute favourite? ",
                (answer) => {
                  setArray.push(answer);

                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at! ",
                    (answer) => {
                      setArray.push(answer);
                      fullSentence = setArray;

                      console.log(
                        `Thank you for your valuable feedback: ${fullSentence}`
                      );

                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});