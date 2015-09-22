$(document).ready(function() {

  var currentSize = [];
  var $questions = $('.surveyQ');
  function grabQuestion(num) {
    $($questions).hide();
    $($questions[num]).fadeIn();
    return num;
  }
  var inchesToBandMeasurement = {

    '27-29"': 32,
    '29-32"': 34,
    '33-34"': 36,
    '35-38"': 38,
    '39-21"': 40,
    '42"': 42,
    '46-47"': 46,
    '48-49"': 48
  }

  var cupSizes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

  $('#quest1').on('click', 'button', function(e) {
    e.preventDefault();
    var bandSize = $('#bandSize option:selected').val();
    var cupSize = $('#cupSize option:selected').val();
    currentSize.push(bandSize, cupSize);
    console.log(currentSize);
    // db.Size.create({
    //   currentBandSize: bandSize,
    //   currentCupSize: cupSize
    // });
    grabQuestion(1);
  })
  $('#quest2').on('click', 'button', function(e) {
    e.preventDefault();
    var question2Ans = $('#quest2 option:selected').val();
    console.log(inchesToBandMeasurement[question2Ans]);
    currentSize.push(inchesToBandMeasurement[question2Ans]);
    grabQuestion(2);
  })
  $('#quest3').on('click', 'button', function(e) {
    e.preventDefault();
    var question3Ans = $('#question3 input:checked').val();
    console.log(question3Ans);
    if(question3Ans === 'High') {
      currentSize.push(eval(currentSize[0] - '2'));
    }
    grabQuestion(3);
  })
  $('#quest4').on('click', 'button', function(e) {
    e.preventDefault();
    var question4Ans = $('#question4 input:checked').val();
    console.log(question4Ans);
    grabQuestion(4);
  })
  $('#quest5').on('click', 'button', function(e) {
    e.preventDefault();
    var question5Ans = $('#question5 input:checked').val();
    console.log(question5Ans);
    grabQuestion(5);
  })
  $('#quest6').on('click', 'button', function(e) {
    e.preventDefault();
    var question6Ans = $('#question6 input:checked').val();
    console.log(question6Ans);
    grabQuestion(6);
  })
  $('#quest7').on('click', 'button', function(e) {
    e.preventDefault();
    var question7Ans = $('#question7 input:checked').val();
    console.log(question7Ans);
    grabQuestion(7);
  })
  $('#quest8').on('click', 'button', function(e) {
    e.preventDefault();
    var question8Ans = $('#quest8 input:checked').val();
    console.log(question8Ans);
    grabQuestion(8);
  })
  grabQuestion(0);



})
