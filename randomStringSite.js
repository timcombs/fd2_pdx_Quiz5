var stringSelector = function () {
  var bunchOfStrings = [
    "Every good person does fine.",
    "Now is the time for all good folk to come to the aid of their party.",
    "The quick brown fox jumped over the lazy dog.",
    "The rain in Spain falls mainly on the plain.",
    "Amazingly few discotheques provide jukeboxes.",
    "A quick movement of the enemy will jeopardize six gunboats.",
    "All questions asked by five watch experts amazed the judge.",
    "How razorback-jumping frogs can level six piqued gymnasts!",
    "Pack my box with five dozen liquor jugs.",
    "The five boxing wizards jump quickly.",
    "Jackdaws love my big sphinx of quartz.",
    "Life can only be understood backwards, but it must be lived forward.",
    "Teachers open the door but you must walk through it yourself.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "Tell the truth and then run."
  ];
  var randomString = bunchOfStrings[Math.floor(Math.random() * 15)];
  return randomString;
 };

var stringSpitter = function() {
  var randomString = stringSelector();
  var stringHolderElement = document.getElementById("stringHolder");
  var stringElement = document.getElementById("theString");

  // removes last string
  stringElement.parentNode.removeChild(stringElement);

  // recreates the string element
  var stringElement = document.createElement("p");
  stringElement.setAttribute('id', 'theString');
  addTheString = document.createTextNode(randomString);
  // add new string
  stringElement.appendChild(addTheString);
  stringHolderElement.appendChild(stringElement);
};

// gets input of stringButton
var evtGrab = document.getElementById('stringButton');
// call stringSpitter on button click
evtGrab.addEventListener('click', stringSpitter, false);

