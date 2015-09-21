$(document).ready(function() {

  var answers = [];
  var $questions = $('.surveyQ');
  function grabQuestion(num) {
    $($questions).hide();
    $($questions[num]).fadeIn();
    return num;
  }

  function getAnswer(num) {
    $('#quest1').on('click', 'button', function(e) {
      e.preventDefault();
      var userAnswer = $('input:checked').val();
      console.log(userAnswer);
      getAnswer(grabQuestion(1));
    })
    $('#quest2').on('click', 'button', function(e) {
      e.preventDefault();
      var userAnswer = $('input:checked').val();
      console.log(userAnswer);
      getAnswer(grabQuestion(2));
    })
    $('#quest3').on('click', 'button', function(e) {
      e.preventDefault();
      var userAnswer = $('input:checked').val();
      console.log(userAnswer);
      getAnswer(grabQuestion(3));
    })
    $('#quest4').on('click', 'button', function(e) {
      e.preventDefault();
      var userAnswer = $('input:checked').val();
      console.log(userAnswer);
      getAnswer(grabQuestion(4));
    })
    $('#quest5').on('click', 'button', function(e) {
      e.preventDefault();
      var userAnswer = $('input:checked').val();
      console.log(userAnswer);
      getAnswer(grabQuestion(5));
    })
    $('#quest6').on('click', 'button', function(e) {
      e.preventDefault();
      var userAnswer = $('input:checked').val();
      console.log(userAnswer);
      getAnswer(grabQuestion(6));
    })
    $('#quest7').on('click', 'button', function(e) {
      e.preventDefault();
      var userAnswer = $('input:checked').val();
      console.log(userAnswer);
      getAnswer(grabQuestion(7));
    })
  }
  getAnswer(grabQuestion(0));



})
