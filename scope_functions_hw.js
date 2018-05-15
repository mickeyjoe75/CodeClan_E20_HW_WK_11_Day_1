// MVP
// Episode 1
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
// Episode 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// Episode 3
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
// Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);
// Episode 5
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
// Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// Episode 8
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
// Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

/*
[Command: bash -c ''/Users/MJM75/.atom/packages/script/node_modules/.bin/babel' --filename '/Users/MJM75/.atom/packages/script/node_modules/.bin/babel' < '/Users/MJM75/codeclan/e20/workfiles/week_11/day_1/scope_functions_hw.js'| node']
TypeError: /Users/MJM75/.atom/packages/script/node_modules/.bin/babel: Duplicate declaration "declareMurderer"
  20 | }
  21 |
> 22 | const declareMurderer = function() {
     |       ^
  23 |   return `The murderer is ${murderer}.`;
  24 | }
  25 |
    at File.buildCodeFrameError (/Users/MJM75/.atom/packages/script/node_modules/babel-core/lib/transformation/file/index.js:427:15)
    at Scope.checkBlockScopedCollisions (/Users/MJM75/.atom/packages/script/node_modules/babel-traverse/lib/scope/index.js:398:27)
    at Scope.registerBinding (/Users/MJM75/.atom/packages/script/node_modules/babel-traverse/lib/scope/index.js:592:16)
    at Scope.registerDeclaration (/Users/MJM75/.atom/packages/script/node_modules/babel-traverse/lib/scope/index.js:496:14)
    at Object.BlockScoped (/Users/MJM75/.atom/packages/script/node_modules/babel-traverse/lib/scope/index.js:244:28)
    at Object.newFn (/Users/MJM75/.atom/packages/script/node_modules/babel-traverse/lib/visitors.js:318:17)
    at NodePath._call (/Users/MJM75/.atom/packages/script/node_modules/babel-traverse/lib/path/context.js:76:18)
    at NodePath.call (/Users/MJM75/.atom/packages/script/node_modules/babel-traverse/lib/path/context.js:44:14)
    at NodePath.visit (/Users/MJM75/.atom/packages/script/node_modules/babel-traverse/lib/path/context.js:105:12)
    at TraversalContext.visitQueue (/Users/MJM75/.atom/packages/script/node_modules/babel-traverse/lib/context.js:150:16)
[Finished in 0.53s]
*/
