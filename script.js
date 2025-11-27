const card = document.querySelectorAll(".card");

for (const c of card) {
  c.addEventListener("click", () => {
    removeActive();
    // for (const cards of card) {
    //   console.log(cards);
    // }

    // Removing done. Now, add the active class.
    c.classList.add("active");
  });
}

// Removing active class from all card. Including the first one where i manually write active class.
function removeActive() {
  for (const c of card) {
    c.classList.remove("active");
  }
}

// for (const cards of card) {
//   console.log(cards);
// }
