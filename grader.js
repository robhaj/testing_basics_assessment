function letterGrader(score) {
  switch (true) {
    case score >= 90:
    return 'A';
    case score >= 80:
    return 'B';
    case score >= 70:
    return 'C';
    case score >= 60:
    return 'D';
    default:
    return 'F';
  }
}

function averageScore(scoreArr) {
  var total = 0;
  scoreArr.forEach(function(val) {
    total += val;
  });
  return total/scoreArr.length;
}

function medianScore(scoreArr) {
  var sortedScores = scoreArr.sort(function(a,b) {
    return a-b;
  });
  if (sortedScores.length % 2 === 0){
  } else {
    return (sortedScores[Math.floor(sortedScores.length/2)]);
  }
}

function modeScore(scoreArr) {
  return scoreArr.sort(function(a,b){
    return scoreArr.filter(function(v){
      return v===a })
      .length - scoreArr.filter(function(v){
        return v===b })
        .length}).pop();
      }

      module.exports = {
        letterGrader:letterGrader,
        averageScore:averageScore,
        medianScore:medianScore,
        modeScore:modeScore
      };
