'use strict';

function getDogImage(doggoBreed) {
    fetch(`https://dog.ceo/api/breed/${doggoBreed}/images/random/1`)
        .then(response => response.json())
        .then(responseJson =>
          displayResults(responseJson))
        .catch(error => alert('Something went wrong.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    let html = '';
    for (let i = 0; i < responseJson.message.length; i++) {
        let doggoBreed = $('input[type="text"]').val();
        if (responseJson.code === 404) {
            $('.results h2').html(`Uh oh... ${doggoBreed} doesn't exist.
            `);
        }
        else {
            $('.results h2').html(`Here's a ${doggoBreed}`);
            html += `<img src="${responseJson.message[i]}" class="dog-image" />`
        }
        $('.results-img').html(html)
        $('.results').removeClass('hidden');
    }
}

function dogForm() {
  $('form').submit(event => {
    event.preventDefault();
    let doggoBreed = $('input[type="text"]').val().toLowerCase();
    getDogImage(doggoBreed);
  });
}

$(dogForm)