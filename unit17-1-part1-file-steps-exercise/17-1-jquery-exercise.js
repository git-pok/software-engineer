// 1. When the DOM is ready, console.log the message 
// “Let’s get ready to party with jQuery!”
function hello() {
    console.log('Let\'s get ready to party with jQuery!')
}

window.addEventListener('DOMContentLoaded', hello);

// 2. Give all images inside of an article tag the class of image-center 
// (this class is defined inside of the style tag in the head).
$('article img').addClass('image-center');

// 3. Remove the last paragraph in the article.
$('article p:last-child').remove();

// 4. Set the font size of the title to be a random pixel size from 0 to 100.
function randomNumber() {
return Math.floor(Math.random() * 101) + 'px';
}

$('#title').css('font-size', randomNumber());

// 5. Add an item to the list; it can say whatever you want.
$('aside ol').append('<li>I love Software Engineering!</li>');

//  6. Scratch that; the list is silly. Empty the aside and 
// put a paragraph in it apologizing for the list’s existence.
$('aside').html('<p>Apologies for the list! It should not exist!</p>')

// 7. When you change the numbers in the three inputs on the bottom, 
// the background color of the body should change to match whatever the 
// three values in the inputs are.

function backgroundColor() {
    let r = $('.form-control').eq(0).val();
    let g = $('.form-control').eq(1).val();
    let b = $('.form-control').eq(2).val();
    return rgb = `rgb(${r}, ${g}, ${b})`;   
}

function changeBackgroundColor() {
    return $('body').css('background-color', backgroundColor());   
}

$('.mb-5').on('focusout', 'input', changeBackgroundColor);

// old code for 7
// $('.mb-5').on('focusout', 'input', function() {
//     $('body').css('background-color', backgroundColor());
// });

// 8. Add an event listener so that when you click on the image, 
// it is removed from the DOM.
$('body').on('click', 'img', function() {
    $(this).remove();
});
 