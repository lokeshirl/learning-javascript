// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
    // console.log(links.classList);
    // console.log(links.classList.contains('links')); --> returns true if class exist and false if DNE
    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links');
    // } else {
    //     links.classList.add('show-links');
    // }

    // this works same as above if-else add and remove
    links.classList.toggle("show-links");
});