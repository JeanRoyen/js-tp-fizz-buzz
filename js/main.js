
/*const removeMessage = document.querySelector('.no-js__message');
const olElement = document.querySelector('ol');
removeMessage.remove();

for (let i = 1; i <= 100; i++) {
    let content = ''; //

    if (i % 3 === 0 && i % 5 === 0) {
        content = '<li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>';
    } else if (i % 3 === 0) {
        content = '<li class="fizz">FI<i>zz</i></li>';
    } else if (i % 5 === 0) {
        content = '<li class="buzz">BU<i>zz</i></li>';
    } else {
        content = `<li>${i}</li>`;
    }
    olElement.insertAdjacentHTML("beforeend", content);
}*/

const removeMessage = document.querySelector('.no-js__message');
const olElement = document.getElementById('fizzbuzz');

removeMessage.remove()

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        olElement.insertAdjacentHTML("beforeend", ' <li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>');
    } else if (i % 3 === 0) {
        olElement.insertAdjacentHTML("beforeend", ' <li class="fizz">FI<i>zz</i></li>');
    } else if (i % 5 === 0) {
        olElement.insertAdjacentHTML("beforeend", ' <li class="buzz">BU<i>zz</i></li>');
    } else {
        olElement.insertAdjacentHTML("beforeend", `<li>${i}</li>`);
    }
}

