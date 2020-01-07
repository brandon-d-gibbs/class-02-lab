
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

if(dogName.toLowerCase() === 'n'){
  alert('Your animal guess was correct! Morgan\'s dog was named \'Noodles\'');
}else{
  alert('Morgan did not have a pet named \'Ramen\'');
}

if(schoolCount.toUpperCase() === 'N'){
  alert('You were correct about schools! Morgan attended a silly amount of schools.');
}else{
  alert('Sadly, Morgan attended more than just 4 schools.');
}

if(japanTime.toLowerCase() === 'y'){
  alert('それは正しいです - That is correct! Morgan did live in Japan!');
}else{
  alert('違う - Chigau! Morgan spent nearly 2 years in beautiful Fukuyama.');
}

if(previousWork.toLowerCase() === 'y'){
  alert('You were right! Morgan has worked in softare for nearly 8 years.');
}else{
  alert('You were incorrect about Morgan\'s work history. He has spent several ' +
  'years as a software tester, amongst other roles.');
}

if(tabletop.toLowerCase() === 'n'){
  alert('You nailed your spot check! Morgan obsessses about D&D to an unhealthy degree!');
}else{
  alert('CRY HAVOC! Morgan is insulted about your perception of his hobbies and will fight you over it!');
}


// display back in final message
