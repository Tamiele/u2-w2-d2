//extra 16
const addBadge = function () {
  let cards = document.querySelectorAll("#welcomeSummer .card");
  for (i = 0; i < cards.length; i++) {
    let card = cards[i];
    let span = document.createElement("span");
    span.className = "badge text-bg-danger position-absolute end-0 mt-2 me-2";
    span.innerText = "HOT";
    card.appendChild(span);
  }
};

addBadge();
