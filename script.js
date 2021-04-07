
let joke_btn = document.querySelector(".joke_btn");

let joke_txt = document.querySelector(".joke");

generateJoke();

joke_btn.addEventListener('click', generateJoke);

// USING ASYNC/AWAIT
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    joke_txt.innerHTML = data.joke
}
