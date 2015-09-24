var questionOne =
"<div class='surveyQ' id='quest1'>"+
    "<p>What is your current Bra Size?</p>" +
    "<form>" +
      "<label for='bandSize'>Band:</label>" +
      "<select id='bandSize' required>" +
        "<option>30</option>" +
        "<option>32</option>" +
        "<option>34</option>" +
        "<option>36</option>" +
        "<option>38</option>" +
        "<option>40</option>" +
        "<option>42</option>" +
        "<option>44</option>" +
        "<option>46</option>" +
      "</select>" +
      "<label for='cupSize'>Cup</label>" +
      "<select id='cupSize' required>" +
        "<option>A</option>" +
        "<option>B</option>" +
        "<option>C</option>" +
        "<option>D</option>" +
        "<option>DD / E</option>" +
        "<option>DDD / F</option>" +
        "<option>DDDD / G</option>" +
        "<option>DDDDD / H</option>" +
      "</select>" +
      "<button id='quest1Btn'>Next</button>" +
    "</form>" +
  '</div>';

var questionTwo =
'<div class="surveyQ" id="quest2">' +
    '<p>Measure around your ripcage, under the bust and parallel to the floor.</p>' +
    '<p>What is the measurement?</p>' +
    '<select required>' +
      '<option>27-29"</option>' +
      '<option>29-32"</option>' +
      '<option>33-34"</option>' +
      '<option>35-38"</option>' +
      '<option>39-41"</option>' +
      '<option>42"</option>' +
      '<option>43-45"</option>' +
      '<option>46-47"</option>' +
      '<option>48-49"</option>' +
    '</select>' +
    '<button id="question2Btn">Next</button>' +
  '</div>';

var questionThree =
  "<div class='surveyQ' id='quest3'>" +
    "<p>Where does your bra band currently sit? </p>" +
    "<form id='question3' required>" +
     " <input type='radio' id='highBand' name='answer' value='High' />" +
      "<img height='150px' width='150px' src='../../img/bandBackHigh.jpg' alt='high bra band' />" +
      "<label for='highBand'>High, on my shoulder blades.</label>" +

      "<input type='radio' id='lowerBack' name='answer' value='Low' />" +
      "<img height='150px' width='150px' src='../../img/bandBackLow.jpg' alt='low bra band'" +
      "<label for='lowerBack'>Low, far below my shoulder blades.</label>" +

      "<input type='radio' id='underBlades' name='answer' value='Correct' />" +
      "<img height='150px' width='150px' src='../../img/bandJustRight.jpg' alt='bra band'" +
      "<label for='underBlades'>Just under my shoulder blades.</label>" +
      "<button>Next</button>" +
    "</form>" +
  "</div>";

var questionFour =
  "<div class='surveyQ' id='quest4'>" +
    "<p>Do you have any pain with the wire?</p>" +
    "<form id='question4' required>" +
      "<input type='radio' id='chestPain' name='answer' value='chestPain' />" +
      "<label for='chestPain'>The wire presses into my rib cage.</label>" +

      "<input type='radio' id='noPain' name='answer' value='noPain' />" +
      "<label for='noPain'>No Pain.</label>" +

      "<input type='radio' id='cutInSide' name='answer' value='cutInSide' />" +
      "<label for='cutInSide'>It cuts in my side, under my arm.</label>" +
      "<button>Next</button>" +
    "</form>" +
  "</div>";

var questionFive =
  "<div class='surveyQ' id='quest5'>" +
      "<p>What are your cup preferences?</p>" +
      "<form id='question5' required>" +
        "<input type='radio' id='unlined' name='answer' value='unlined' />" +
        "<label for='unlined'>Unlined. </label>" +

        "<input type='radio' id='lightPadding' name='answer' value='lightPadding' />" +
        "<label for='lightPadding'>Lightly Padded.</label>" +

        "<input type='radio' id='paddedNoPushUp' name='answer' value='paddedNoPushUp' />" +
        "<label for='paddedNoPushUp'>Padded but with no push up.</label>" +

        "<input type='radio' id='pushUp' name='answer' value='pushUp' />" +
        "<label for='pushUp'>Push Up.</label>" +
        "<button>Next</button>" +
      "</form>" +
    "</div>";

var questionSix =
"<div class='surveyQ' id='quest6'>" +
    "<p>Does the wire between your cups lie flat on your chest?</p>" +
    "<form id='question6' required>" +
      "<input type='radio' id='wireflatYes' name='answer' value='wireflatYes' />" +
      "<label for='wireflatYes'>Yes.</label>" +
      "<input type='radio' id='wireflatNo' name='answer' value='wireflatNo' />" +
      "<label for='wireflatNo'>No.</label>" +
      "<button>Next</button>" +
    "</form>" +
  "</div>";

var questionSeven =
"<div class='surveyQ' id='quest7'>" +
    "<p>Do your cups runeth over?</p>" +
    "<form id='question7' required>" +
      "<input type='radio' id='cupTopGap' name='answer' value='cupTopGap' />" +
      "<label for='cupTopGap'>No, but theres a gap between the cup and me.</label>" +
      "<input type='radio' id='cupDoubleBubble' name='answer' value='cupDoubleBubble' />" +
      "<label for='cupDoubleBubble'>Yes, I run over the top of the cup.</label>" +
      "<input type='radio' id='cupTopRunsFlat' name='answer' value='cupTopRunsFlat' />" +
      "<label for='cupTopRunsFlat'>No gaps, no overflow</label>" +
      "<input type='radio' id='cupBtmGap' name='answer' value='cupBtmGap' />" +
      "<label for='cupBtmGap'> Cup gaps at the bottoms" +
      "<button>Next</button>" +
    "</form>" +
  "</div>";

var questionEight =
"<div class='surveyQ' id='quest8'>" +
    "<p>Check brands you like:</p>" +
    "<form required>" +
      "<input type='checkbox' id='chantelle' value='chantelle' />" +
      "<label for='chantelle'>Chantelle</label>" +
      "<input type='checkbox' id='DKNY' value='DKNY' />" +
      "<label for='DKNY'>DKNY</label>" +
      "<input type='checkbox' id='natori' value='natori' />" +
      "<label for='natori'>Natori</label>" +
      "<input type='checkbox' id='betseyJohnson' value='betseyJohnson' />" +
      "<label for='betseyJohnson'>Betsey Johnson</label>" +
      "<input type='checkbox' id='wacoal' value='wacoal' />" +
      "<label for='wacoal'>Wacoal</label>" +
      "<input type='checkbox' id='freyaFantasie' value='freyaFantasie' />" +
      "<label for='freyaFantasie'>Freya / Fantasie</label>" +
      "<input type='checkbox' id='vicSecret' value='vicSecret' />" +
      "<label for='vicSecret'>Victoria's Secret</label>" +
      "<input type='checkbox' id='laPerla' value='laPerla' />" +
      "<label for='laPerla'>La Perla</label>" +
      "<input type='checkbox' id='dunno' value='dunno' />" +
      "<label for='dunno'>I don't know / care</label>" +
      "<button>Next</button>" +
    "</form>" +
    "<p id='result'></p>" +
  "</div>";