
'use strict';

// html page with CSS and JS
// short biography <done>

// use .toUpperCase() or .toLowerCase()
/* console.log() for if the answer is correct or not
replace with alerts at the end */

// ask user for name via prompt()
var user = prompt('What is your name?');
// custom greeting for coming to site
alert('Hi ' + user + '! Welcome to the Morgan Quiz! I\'ve gota  few questions for you:');


// 5 yes/no questions <done>
var dogName = prompt('Morgan\'s had a dog named \'Ramen\': Y/N?');
var schoolCount = prompt('Morgan only attended 4 schools in Bellingham: Y/N');
var japanTime = prompt('Morgan lived in Japan: Y/N');
var previousWork = prompt('Morgan has worked in software before: Y/N');
var tabletop = prompt('Morgan hates all things related to dragons and the dungeons they inhabit: Y/N');

var answerCount = 0;

if(dogName.toLowerCase() === 'n' || dogName.toLowerCase() === 'no'){
  alert('Your animal guess was correct! Morgan\'s dog was named \'Noodles\'');
  answerCount++;
}else if (dogName.toLowerCase() === 'y' || dogName.toLowerCase() === 'yes'){
  alert('Morgan did not have a pet named \'Ramen\'');
}else{
  alert('I\'m only capable of understanding Yes/No for an answer about Morgan\'s dog.');
}

if(schoolCount.toUpperCase() === 'N' || schoolCount.toUpperCase() === 'no'){
  alert('You were correct about schools! Morgan attended a silly amount of schools.');
  answerCount++;
}else if (schoolCount.toUpperCase() === 'Y' || schoolCount.toUpperCase() === 'YES'){
  alert('Morgan attended more than twice as many schools as that.');
}else{
  alert('I\'m only capable of understanding Yes/No for an answer about Morgan\'s school history.');
}

if(japanTime.toLowerCase() === 'n' || japanTime.toLowerCase() === 'no'){
  alert('違う - Chigau! Morgan spent nearly 2 years in beautiful Fukuyama.');
}else if (japanTime.toLowerCase() === 'y' || japanTime.toLowerCase() === 'yes'){
  alert('それは正しいです - That is correct! Morgan did live in Japan!');
  answerCount++;
}else{
  alert('I\'m only capable of understanding Yes/No for an answer about Japan.');
}

if(previousWork.toLowerCase() === 'n' || previousWork.toLowerCase() === 'no'){
  alert('You were incorrect about Morgan\'s work history. He has spent several ' +
  'years as a software tester, amongst other roles.');
}else if (previousWork.toLowerCase() === 'y' || previousWork.toLowerCase() === 'yes'){
  alert('You were right! Morgan has worked in softare for nearly 8 years.');
  answerCount++;
}else{
  alert('I\'m only capable of understanding Yes/No for an answer about Morgan\'s work history.');
}

if(tabletop.toLowerCase() === 'n' || tabletop.toLowerCase() === 'no'){
  alert('You nailed your spot check! Morgan obsessses about D&D to an unhealthy degree!');
  answerCount++;
}else if (tabletop.toLowerCase() === 'y' || tabletop.toLowerCase() === 'yes'){
  alert('CRY HAVOC! Morgan is insulted about your perception of his hobbies and will fight you over it!');
}else{
  alert('I\'m only capable of understanding Yes/No for an answer regarding Morgan\'s obsession.');
}


// display back in final message
alert('You got ' + answerCount + ' questions correct out of 5. See Morgan\'s bio for answers and more!');
