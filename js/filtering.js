// Function to uncheck all checkboxes
function uncheckAllFilters() {
  document.querySelector("#programming-filter").checked = false;
  document.querySelector("#design-filter").checked = false;
  document.querySelector("#marketing-filter").checked = false;
}

// Filter functions
function filterProgramming() {
  uncheckAllFilters();
  document.querySelector("#programming-filter").checked = true;
  const programming = cards.filter((card) => card.typeCard === "programming");
  renderCards(programming);
}

function filterDesign() {
  uncheckAllFilters();
  document.querySelector("#design-filter").checked = true;
  const design = cards.filter((card) => card.typeCard === "design");
  renderCards(design);
}

function filterMarketing() {
  uncheckAllFilters();
  document.querySelector("#marketing-filter").checked = true;
  const marketing = cards.filter((card) => card.typeCard === "marketing");
  renderCards(marketing);
}

document
  .querySelector("#programming-filter")
  .addEventListener("change", filterProgramming);
document
  .querySelector("#design-filter")
  .addEventListener("change", filterDesign);
document
  .querySelector("#marketing-filter")
  .addEventListener("change", filterMarketing);
