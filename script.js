fetch('https://icanhazdadjoke.com/api')
.then(data => data.json())
.then(jokedata => {
    const jokeText = jokedata.attachments[0].text;
    const jokeElement = document.getElementById('jokeElement');

    jokeElement.innerHTML = jokeText;
})