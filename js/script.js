$(document).ready(function() {

  var answers = [];
  var $questions = $('.surveyQ');
  function grabQuestion(num) {
    $($questions).hide();
    $($questions[num]).fadeIn();
    return num;
  }

  $('#quest1').on('click', 'button', function(e) {
    e.preventDefault();
    var bandSize = $('#bandSize option:selected').val();
    var cupSize = $('#cupSize option:selected').val();
    console.log(bandSize, cupSize);
    grabQuestion(1);
  })
  $('#quest2').on('click', 'button', function(e) {
    e.preventDefault();
    var question2Ans = $('#quest2 option:selected').val();
    console.log(question2Ans);
    grabQuestion(2);
  })
  $('#quest3').on('click', 'button', function(e) {
    e.preventDefault();
    var question3Ans = $('#question3 input:checked').val();
    console.log(question3Ans);
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
    var question7Ans = $('input:checked').val();
    console.log(question7Ans);
    grabQuestion(7);
  })

  grabQuestion(0);



})
