// add solution here
function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}

function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}

//My solutions
function theBeatlesPlay(musicians, instruments){
  let sentenceArr = [];
  for(let i = 0; i < musicians.length; i++){
    sentenceArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return sentenceArr;
}

function johnLennonFacts(facts){
  let i = 0;

  while (i < facts.length){
    facts[i] += '!!!';
    i++
  }
  return facts;
}


function iLoveTheBeatles(num){
  let beatlesArr = [];

  var i = 0;

  function incrementVariable() {
    i = i + 1;
    return i;
  }

  do {beatlesArr[i] = ('I love the Beatles!')}
  while (num < 15 && incrementVariable() <= num);

  return beatlesArr;
}
