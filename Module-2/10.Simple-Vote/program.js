'use strict';

const numCand = parseInt(prompt('How many candidates are there?'))

let voting = []

for (let i = 0; i < numCand; i++) {
    const candName = prompt(`Name of candidate ${i+1}.`);
    voting[i] = {name: candName, votes: 0}
}

const numVotes = parseInt(prompt('How many voters are there?'))

for (let i = 0; i < numVotes; i++) {
let vote = prompt(`Voter ${i+1} who are you voting for?`);
    for (let j = 0; j < voting.length; j++) {
        if (voting[j].name === vote) {
            voting[j].votes += 1;}
    }
}

voting.sort(function(a, b) { 
    return b.votes - a.votes  ||  b.votes.localeCompare(a.votes);
  });

console.log(`Winner is ${voting[0].name} with ${voting[0].votes} votes!`)
console.log('Results:')
for (let i = 0; i < voting.length; i++) {
    console.log(`${voting[i].name}: ${voting[i].votes} votes.`)
}
