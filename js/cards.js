const cards = [
  {
    typeCard: "programming",
    imgSrc: "assets/img/img_01.jpg",
    imgAlt: "programming",
    academy: "Академија за програмирање",
  },
  {
    typeCard: "programming",
    imgSrc: "assets/img/img_02.jpg",
    imgAlt: "programming",
    academy: "Академија за програмирање",
  },
  {
    typeCard: "programming",
    imgSrc: "assets/img/img_03.jpg",
    imgAlt: "programming",
    academy: "Академија за програмирање",
  },
  {
    typeCard: "programming",
    imgSrc: "assets/img/img_04.jpg",
    imgAlt: "programming",
    academy: "Академија за програмирање",
  },
  {
    typeCard: "programming",
    imgSrc: "assets/img/img_05.jpg",
    imgAlt: "programming",
    academy: "Академија за програмирање",
  },
  {
    typeCard: "programming",
    imgSrc: "assets/img/img_06.jpg",
    imgAlt: "programming",
    academy: "Академија за програмирање",
  },
  {
    typeCard: "programming",
    imgSrc: "assets/img/img_07.jpg",
    imgAlt: "programming",
    academy: "Академија за програмирање",
  },
  {
    typeCard: "programming",
    imgSrc: "assets/img/img_08.jpg",
    imgAlt: "programming",
    academy: "Академија за програмирање",
  },
  {
    typeCard: "programming",
    imgSrc: "assets/img/img_09.jpg",
    imgAlt: "programming",
    academy: "Академија за програмирање",
  },
  {
    typeCard: "programming",
    imgSrc: "assets/img/img_10.jpg",
    imgAlt: "programming",
    academy: "Академија за програмирање",
  },
  {
    typeCard: "marketing",
    imgSrc: "assets/img/img_11.jpg",
    imgAlt: "marketing",
    academy: "Академија за маркетинг",
  },
  {
    typeCard: "marketing",
    imgSrc: "assets/img/img_12.jpg",
    imgAlt: "marketing",
    academy: "Академија за маркетинг",
  },
  {
    typeCard: "marketing",
    imgSrc: "assets/img/img_13.jpg",
    imgAlt: "marketing",
    academy: "Академија за маркетинг",
  },
  {
    typeCard: "marketing",
    imgSrc: "assets/img/img_14.jpg",
    imgAlt: "marketing",
    academy: "Академија за маркетинг",
  },
  {
    typeCard: "marketing",
    imgSrc: "assets/img/img_15.jpg",
    imgAlt: "marketing",
    academy: "Академија за маркетинг",
  },
  {
    typeCard: "design",
    imgSrc: "assets/img/img_16.jpg",
    imgAlt: "design",
    academy: "Академија за дизајн",
  },
  {
    typeCard: "design",
    imgSrc: "assets/img/img_17.jpg",
    imgAlt: "design",
    academy: "Академија за дизајн",
  },
  {
    typeCard: "design",
    imgSrc: "assets/img/img_18.jpg",
    imgAlt: "design",
    academy: "Академија за дизајн",
  },
  {
    typeCard: "design",
    imgSrc: "assets/img/img_19.jpg",
    imgAlt: "design",
    academy: "Академија за дизајн",
  },
];

document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault();
});

function renderCards(filteredCards) {
  let container = document.querySelector(".card-render");
  container.innerHTML = "";

  filteredCards.forEach((card) => {
    container.innerHTML += `<div class="flex-child card">
      <div class="inner-item">
       <img src="${card.imgSrc}" alt="${card.imgAlt}" />
         <div class="content">
           <span>${card.academy}</span>
           <h4>Име на проектот стои овде во две линии</h4>
           <p>
          Кракот опис во кои студентите ќе можат да опишат за што се работи во
          проектот.
           </p>
           <div class="circle">
             <i class="fa-solid fa-heart"></i>
           </div>
           <small>Ноември-Декември 2023</small>
           <div class="align">
             <a href="#" class="btn">
            Дознај повеќе
             </a>
        </div>
      </div>
    </div>
  </div>`;
  });
}

renderCards(cards);
