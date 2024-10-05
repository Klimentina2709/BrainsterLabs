let currentPage = 0;
const itemsPerPage = 4;
const showMoreBtn = document.getElementById("show-more-btn");

function showMore() {
  currentPage++;
  const end = currentPage * itemsPerPage;
  const itemsToShow = cards.slice(0, end);

  renderCards(itemsToShow);

  if (end >= cards.length) {
    showMoreBtn.style.display = "none";
  }
}

function initializePagination() {
  currentPage = 0;
  showMoreBtn.style.display = "block";

  const isTabletOrMobile = window.matchMedia("(max-width: 1024px)").matches;

  if (isTabletOrMobile) {
    showMore();
    showMoreBtn.addEventListener("click", showMore);
  } else {
    renderCards(cards);
    showMoreBtn.style.display = "none";
  }
}

window.addEventListener("resize", initializePagination);

initializePagination();

if (window.matchMedia("(max-width: 1024px)").matches) {
  showMore();
}
