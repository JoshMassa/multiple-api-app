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