$(document).ready(function() {
  $('#surveyStartBtn').on('click', function(e) {
    e.preventDefault();
    loadSurvey();
  });

  function loadSurvey() {
    $('#content').load('../../views/survey/quest1.handlebars');
    $('#templateContent').fadeOut();
  }
  //use handlebars directly on front end handlebars js docs
  //hid a url that renders just partial
  //
})
