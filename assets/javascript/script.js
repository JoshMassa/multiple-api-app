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
    
}