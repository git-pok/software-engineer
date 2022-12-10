// When the form is submitted, capture the values for each of the inputs 
// and append them to the DOM along with a button to remove each title 
// and rating from the DOM.
function movieRating(e) {
    e.preventDefault();
    const $titleValue = $('#title').val(); 
    const $ratingValue = $('#rating').val();
    $('.movies').append(
        `<div>
            <h1 class='review'>
                <span class='upperCase'>Movie Title:</span> <span class='space'>${$titleValue}</span> 
                <span class='upperCase'>Rating:</span> ${$ratingValue}
            </h1>
            <button type='button'>Remove</button>
        </div>`);
    $('#title').val('')
    $('#rating').val('');
}

$('form').on('submit', movieRating);

// When the button to remove is clicked, 
// remove each title and rating from the DOM.
function removeReview(e) {
    if (e.target.tagName === 'BUTTON') $(this).remove();
}

$('.movies').on('click', 'div', removeReview);


