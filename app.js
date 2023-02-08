const dice = document.querySelector(".card_dice");
const id = document.querySelector(".card_number");
const advice = document.querySelector(".card_quote");

function loadQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      id.innerHTML = `Advice #${response.slip.id}`;
      advice.innerHTML = `&#8220${response.slip.advice}&#8221`;
    });
}

dice.addEventListener("click", loadQuote);
