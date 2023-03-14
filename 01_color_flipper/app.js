const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    // console.log(document.body);

    // get random color between 0-3

    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
});

// function to generate random numbers
function getRandomNumber() {
    const random = Math.random() * colors.length;
    return Math.floor(random);
}