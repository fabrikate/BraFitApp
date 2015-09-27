$(document).ready(function() {

  var curCup;
  var size, cupIdx;
  var currentSize = [];
  var $questions = $('.surveyQ');
  var cupSizes = ['A', 'B', 'C', 'D', 'DD-E', 'DDD-F', 'DDDD-G', 'DDDDD-H', 'I'];
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

 // hide questions and show one at a time;
  function grabQuestion(num) {
    $($questions).hide();
    $($questions[num]).fadeIn();
    return num;
  }

  //current size
  $('#quest1').on('click', 'button', function(e) {
    e.preventDefault();
    var bandSize = $('#bandSize option:selected').val();
    var cupSize = $('#cupSize option:selected').val();
    currentSize.push(bandSize, cupSize);
    console.log(currentSize);
    grabQuestion(1);
  })
  // ribcage measurement
  $('#quest2').on('click', 'button', function(e) {
    e.preventDefault();
    var question2Ans = $('#quest2 option:selected').val();
    currentSize.push(inchesToBandMeasurement[question2Ans]);
    console.log(currentSize);
    grabQuestion(2);
  })
  // bra band placement
  $('#quest3').on('click', 'button', function(e) {
    e.preventDefault();
    var question3Ans = $('#question3 input:checked').val();
    if(question3Ans === 'High') {
      currentSize.push(parseInt(currentSize[0]) - 2);
    } else {
      currentSize.push(parseInt(currentSize[0]));
    }
    console.log(currentSize);
    grabQuestion(3);
  })
  // wire pain in wire TODO: undefined error
  $('#quest4').on('click', 'button', function(e) {
    e.preventDefault();
    curCup = cupSizes.indexOf(currentSize[1]);
    var question4Ans = $('#question4 input:checked').val();
    if (question4Ans === 'chestPain') {
      currentSize.push(cupSizes[curCup - 1]);
    } else if (question4Ans === 'cutInSide') {
      currentSize.push(cupSizes[curCup + 1]);
    } else {
      currentSize.push(cupSizes[curCup]);
    }
    console.log(currentSize);
    grabQuestion(4);
  })
  //cup preferences
  $('#quest5').on('click', 'button', function(e) {
    e.preventDefault();
    var question5Ans = $('#question5 input:checked').val();
    console.log(currentSize);
    grabQuestion(5);
  })
  // wire flat on chest
  $('#quest6').on('click', 'button', function(e) {
    e.preventDefault();
    var question6Ans = $('#question6 input:checked').val();
    if (question6Ans === 'wireFlatNo') {
      curCup = cupSizes.indexOf(currentSize[1]);
      currentSize.push(cupSizes[curCup + 1]);
    } else {
      currentSize.push(currentSize[1]);
    }
    console.log(currentSize);
    grabQuestion(6);
  })
  // cups runeth over
  $('#quest7').on('click', 'button', function(e) {
    e.preventDefault();
    var question7Ans = $('#question7 input:checked').val();
    curCup = cupSizes.indexOf(currentSize[1]);
    if ( question7Ans === 'cupTopGap' ) {
      currentSize.push(cupSizes[curCup - 1]);
    } else if ( question7Ans === 'cupDoubleBubble') {
      currentSize.push(cupSizes[curCup + 1]);
    } else if ( question7Ans === 'cupBtmGap') {
      var quest7Band = currentSize[0] - 2;
      currentSize.push(quest7Band);
    } else {
      currentSize.push(currentSize[1]);
    }
    console.log(currentSize);
    grabQuestion(7);
  })
  // brand preferences
  $('#quest8').on('click', 'button', function(e) {
    e.preventDefault();
    var question8Ans = $('#quest8 input:checked').val();
    console.log(question8Ans);
    giveRecSize(recommendedBand(), recommendedCup());
    loadAjax();
  })
  grabQuestion(0);

  // get Band recommendation via average of answers
  function recommendedBand() {
    var recBand, sum, err= 'error';
    var givenBand = parseInt(currentSize[0]);
    console.log(givenBand);
    if (typeof currentSize[6] !== 'string' && currentSize[6] !== undefined) {
      avg = (givenBand + currentSize[2] + currentSize[3] + currentSize[6]) / 4;
      console.log('number avg nums are: ', givenBand, currentSize[2], currentSize[3], currentSize[6]);
      console.log('number index avg is: ', avg);
    } else if (typeof currentSize[6] === 'string') {
      avg = (givenBand + currentSize[2] + currentSize[3]) / 3;
      console.log('string index avg is: ', avg);
    } else {
      console.log('Error')
    }
    recBand = Math.floor(avg);
    if ( recBand % 2 !== 0 ) {
      recBand = recBand - 1;
    }
    console.log('returned band is ', recBand);
    return recBand || err;
  }
  // get Cup Size via frequency
  function recommendedCup() {
    var givenCup = currentSize[1];
    var cups = [];
    var cupA = [], cupB = [];
    var recCup;
    cups.push(currentSize[1, 4, 5]);
    if ( typeof currentSize[6] === 'string' ) {
      cups.push(currentSize[6]);
    }
    cups.sort();
    for( var i = 0; i < cups.length; i++ ) {
      if (cups[i] === givenCup) {
        cupA.push(cups[i]);
      } else {
        cupB.push(cups[i]);
      }
    }
    if (cupA.length > cupB.length) {
      return givenCup
    } else {
      recCup = cupB[0];
      return recCup;
    }
  }
  //give recommended size
  function giveRecSize(recBand, recCup) {

    if (currentSize[0] > recBand) {
      cupIdx = cupSizes.indexOf(recCup);
      size = recBand + cupSizes[cupIdx + 1];
      $('#inputResult').innerHTML = size;
      $('#result').append('<h3>Your size is: ' + size + '</h3>');
      console.log(size);
      return size;
    } else if(currentSize[0] < recBand) {
      cupIdx = cupSizes.indexOf(recCup);
      size = recBand + cupSizes[cupIdx - 1];
      console.log(size);
      $('#inputResult').innerHTML = size;
      $('#result').append('<h3>Your size is: ' + size + '</h3>');
      return size;
    } else {
      size = recBand + recCup;
      console.log(size);
      $('#inputResult').innerHTML = size;
      $('#result').append('<h3>Your size is: ' + size + '</h3>');
      return size;
    }
  }
  function loadAjax(){
    $.ajax({
      method: 'POST',
      url: '/size/' + size,
      dataType: 'text',
      success: function(data) {
        alert(data);
        console.log('ajax data is: ', data);
      },
      error: function (err) {
        alert(err.responseText);
        console.log('Error is: ', err);
      }
    });
  }
})
