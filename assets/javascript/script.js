var newJoke = document.getElementById('joke-container');
var newDog = document.getElementById('dog-img');
var greetingParagraph = document.getElementById('greeting');


function randomDadJoke() {
    
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then((data) => {
        document.getElementById('dad-joke').textContent = `${data.joke}`;
    })
    .catch(error => {
        console.error('Error fetching dad joke: ', error);
    });
}

randomDadJoke();


function randomDogImage() {
    fetch('https://api.thedogapi.com/v1/images/search')
    .then(response => response.json())
    .then((data) => {
        const dogImg = document.getElementById('dog-img');
        dogImg.src = data[0].url;
        dogImg.alt = 'Random Dog Photo';
    })
    .catch(error => {
        console.error('Error fetching dog photo: ', error);
    });
}

randomDogImage();


newJoke.addEventListener('click', function() {
    randomDadJoke();
});

newDog.addEventListener('click', function() {
    randomDogImage();
});

//Functionality for custom modal and custom greeting
document.addEventListener("DOMContentLoaded", function() {
    //Display custom modal upon page loading
    var customModal = document.getElementById("modal");
    customModal.style.display = 'block';
    //If there is a key/value pair saved in local storage, do not display modal upon page loading
    var savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        customModal.style.display = 'none';
        greeting.textContent = '';
        displayWelcomeBack(savedUsername);
    }
    //Functionality to close modal when "x" is clicked
    var closeButton = document.getElementById('close')
    //If "x" has been clicked previously, don't display the modal
    var closeButtonClicked = localStorage.getItem('closeButtonClicked') === 'true'
    if (closeButtonClicked) {
        customModal.style.display = 'none';
    }
    closeButton.addEventListener('click', function() {
        customModal.style.display = 'none';
        localStorage.setItem('closeButtonClicked', 'true');
    });
    //Functionality to save username to local storage when submit button is clicked and dynamically display a unique greeting in the header
    var submitButton = document.getElementById('submit')
    submitButton.addEventListener('click', function() {
        var usernameInput = document.getElementById('username');
        var usernameValue = usernameInput.value;
        if (usernameValue.trim() !== '') {
            localStorage.setItem('username', usernameValue);
            customModal.style.display = 'none';
            greeting.textContent = '';
            var textNode1 = document.createTextNode("Hey " + usernameValue + ", thank you for checking us out!");
            var lineBreak = document.createElement('br');
            var textNode2 = document.createTextNode("Want to get a smile out of your day? Well you've found the right place!")
            var lineBreak2 = document.createElement('br');
            var textNode3 = document.createTextNode("Please enjoy our smile generator as much as you'd like.")
            greetingParagraph.appendChild(textNode1);
            greetingParagraph.appendChild(lineBreak);
            greetingParagraph.appendChild(textNode2);
            greetingParagraph.appendChild(lineBreak2);
            greetingParagraph.appendChild(textNode3);
            
        } else {
            customModal.style.display = 'none';
        }
    });
    //Function to display a welcome back message
    function displayWelcomeBack(username) {
        var usernameValue = localStorage.getItem('username')
        var textNode1 = document.createTextNode("Hey " + usernameValue + ", thanks for coming back!")
        var lineBreak = document.createElement('br');
        var textNode2 = document.createTextNode("Looking for some more smiles? Well you've come back to the right place!");
        var lineBreak2 = document.createElement('br');
        var textNode3 = document.createTextNode("Please enjoy our smile generator as much as you'd like.")
        greetingParagraph.appendChild(textNode1);
        greetingParagraph.appendChild(lineBreak);
        greetingParagraph.appendChild(textNode2);
        greetingParagraph.appendChild(lineBreak2);
        greetingParagraph.appendChild(textNode3);
    }
});