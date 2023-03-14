// set initial count
let count = 0;

// selecting value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn"); // console.log(btns); // returning nodeList

btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const styles = event.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});

// both will work but prefer forEach!

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", (event) => {
//         const styles = event.currentTarget.classList;
//         if (styles.contains("decrease")) {
//             count--;
//         } else if (styles.contains("increase")) {
//             count++;
//         } else {
//             count = 0;
//         }
//         if (count > 0) {
//             value.style.color = "green";
//         } else if (count < 0) {
//             value.style.color = "red";
//         } else if (count === 0) {
//             value.style.color = "#222";
//         }
//         value.textContent = count;
//     });
// }


