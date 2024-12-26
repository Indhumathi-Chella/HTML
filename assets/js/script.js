// DOM elements
var button = document.getElementById('changeTextButton');
var paragraph = document.getElementById('myParagraph');

// event listener to the button
button.addEventListener('click', function () {
    paragraph.textContent = 'Welcome Indhu!';
});


// Get the button and text content elements
var buttons = document.getElementById('change');
var text = document.getElementsByClassName('textcontent')[0];  // Access the first element with the 'textcontent' class

// Add event listener to the button
buttons.addEventListener('click', function () {
    // Change the text content of the paragraph
    text.textContent = 'Hypertext Markup Language!';
});

// create new element
var btn = document.getElementById('addpara');

btn.addEventListener('click', function () {

    var Paragraph = document.createElement('p');

    Paragraph.textContent = "I created a new paragraph";

    document.body.appendChild(Paragraph);
});


// query selector


var btns = document.querySelector('#changeTextButton');

btns.addEventListener('click', function () {
    var heading = document.querySelector('.heading');
    console.log(heading);
    heading[0].textContent = 'Text has been changed!';
});

// image
// Select the image element and the button
var img = document.getElementById('image');
var buttonimg = document.getElementById('changeImageButton');
var imageHeading = document.querySelector('.imghead');

buttonimg.addEventListener('click', function () {

    img.src = './assets/images/image1.jpg';
    imageHeading.style.backgroundColor = 'blue';
});

// set attributes example
var link = document.getElementById('link');
var btnLink = document.getElementById('changeLink');
btnLink.addEventListener('click', function () {
    link.setAttribute('href', 'https://code.visualstudio.com/');
    link.textContent = "VSCode";
});


// Events