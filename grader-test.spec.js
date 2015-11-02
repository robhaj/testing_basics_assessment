//dependencies
var letterGrader = require('./grader.js').letterGrader;
var averageScore = require('./grader.js').averageScore;
var medianScore = require('./grader.js').medianScore;
var modeScore = require ('./grader.js').modeScore;

//letter grader test
describe('Letter Grader', function () {
  it('should take a test score and returns the equivalent letter grade.', function () {
    expect(letterGrader(80)).toEqual('B');
    expect(letterGrader(70)).toEqual('C');
  });
});

//average test
describe('Average', function () {
  it('should take an array of test scores and returns the average score.', function() {
    expect(averageScore([90, 95, 87, 60])).toEqual(83);
    expect(averageScore([60, 71, 91, 83, 71])).toEqual(75.2);
  });
});

//median test
describe('Median', function() {
  it('should take an array of test scores and calculates the median score', function() {
    expect(medianScore([52,80,80,86,94])).toEqual(80);
    expect(medianScore([50,60,70,80,90])).toEqual(70);
    expect(medianScore([40,50,60,70])).toEqual(55);
  });
})
;

//mode test
describe('Mode', function() {
  it('should take an array of test scores and calculates the mode score.', function() {
    expect(modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual([92]);
    expect(modeScore([61, 61, 75, 75, 75, 81, 91, 95])).toEqual([75]);
  });
});
