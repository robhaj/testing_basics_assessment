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
    return (sortedScores[sortedScores.length / 2] + sortedScores[((sortedScores.length / 2) - 1)])/2;
  } else {
    return (sortedScores[Math.floor(sortedScores.length/2)]);
  }
}

function modeScore(scoreArr) {
  var appears, mode, maxNum;
  appears = {};
  mode = [];
  maxNum = 0;

  for (var i in scoreArr) {
    if (!(scoreArr[i] in appears))
    appears[scoreArr[i]] = 1;
    else
    appears[scoreArr[i]]++;
    if (appears[scoreArr[i]] == maxNum)
    mode.push(scoreArr[i]);
    else if (appears[scoreArr[i]] > maxNum) {
      maxNum = appears[scoreArr[i]];
      mode = [scoreArr[i]];
    }
  }
  return mode;
}

module.exports = {
  letterGrader:letterGrader,
  averageScore:averageScore,
  medianScore:medianScore,
  modeScore:modeScore
};
