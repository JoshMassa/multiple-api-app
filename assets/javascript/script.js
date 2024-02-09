var newJoke = document.getElementById('joke-container');
var newDog = document.getElementById('dog-img');

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

//Code for custom Modal
document.addEventListener("DOMContentLoaded", function() {
    var customModal = document.getElementById("modal");
    customModal.style.display = 'block';
});

document.addEventListener('click', function() {
    var customModal = document.getElementsByClassName("modal");
    customModal.style.display = "none";
    }
);