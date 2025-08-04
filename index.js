document.addEventListener("DOMContentLoaded", () => {
  //Kitchen Section Data
  const kitchenItems = [
    {
      img: "assests/Kitchensection/pizza1.png",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer.png",
      plus: "assests/Kitchensection/plus-icon.png"
    },
    {
      img: "assests/Kitchensection/pizza2.jpg",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: null,
      plus: "assests/Kitchensection/plus-icon.png"
    },
    {
      img: "assests/Kitchensection/pizza3.jpg",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer2.png",
      plus: "assests/Kitchensection/plus-icon.png"
    },
     {
      img: "assests/Kitchensection/pizza4.jpg",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: null,
      plus: "assests/Kitchensection/plus-icon.png"
    },
     {
      img: "assests/Kitchensection/pizza5.png",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer.png",
      plus: "assests/Kitchensection/plus-icon.png"
    },
     {
      img: "assests/Kitchensection/pizza6.png",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: null,
      plus: "assests/Kitchensection/plus-icon.png"
    },
     {
      img: "assests/Kitchensection/pizza7.png",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer2.png",
      plus: "assests/Kitchensection/plus-icon.png"
    },
     {
      img: "assests/Kitchensection/pizza8.png",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer.png",
      plus: "assests/Kitchensection/plus-icon.png"
    },
     {
      img: "assests/Kitchensection/pizza1.png",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer.png",
      plus: "assests/Kitchensection/plus-icon.png"
    },
     {
      img: "assests/Kitchensection/pizza2.jpg",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: null,
      plus: "assests/Kitchensection/plus-icon.png"
    },
     {
      img: "assests/Kitchensection/pizza3.jpg",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer2.png",
      plus: "assests/Kitchensection/plus-icon.png"
    },
     {
      img: "assests/Kitchensection/pizza4.jpg",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: null,
      plus: "assests/Kitchensection/plus-icon.png"
    }
];

  const kitchenGrid = document.getElementById("kitchenGrid");

  if (kitchenGrid) {
    kitchenItems.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("kitchen-card");

      card.innerHTML = `
        <img src="${item.img}" alt="${item.title}" class="dish-img" />
        ${item.offer ? `<img src="${item.offer}" alt="Offer" class="offer-tag" />` : ""}
        <div class="card-body">
          <div class="inner-body">
            <div class="dish-info">
              <h3 class="dish-title">${item.title}</h3>
              <div class="dish-meta">
                <span class="dish-price">${item.price}</span>
              </div>
            </div>
            <div class="dish-icons">
              <div class="left-icons">
                <div class="left-bg">
                  <img src="assests/Kitchensection/ant-design_star-filled.png" alt="Rating" class="star-icon" />
                  <p class="rating">${item.rating}</p>
                </div>
                <img src="${item.time}" alt="Time" class="time-icon" />
              </div>
              <img src="${item.plus}" alt="Add" class="icon plus" />
            </div>
          </div>
        </div>
      `;

      kitchenGrid.appendChild(card);
    });
  }

  

  //Polpular Items Section
  const popularItems = [
    {
      img: "assests/Kitchensection/tandoori-chicken.png",
      title: "Tandoori Chicken",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time2.png",
      offer: null,
      plus: "assests/Kitchensection/plus-icon.png"
    },
    {
      img: "assests/Kitchensection/chilli-chicken.png",
      title: "Chilli Chicken",
      price: "₹184",
      rating: "4.3",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer2.png",
      plus: "assests/Kitchensection/plus-icon.png"
    },
    {
      img: "assests/Kitchensection/pizza6.png",
      title: "Fresh Pizza",
      price: "₹116",
      rating: "4.1",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer.png",
      plus: "assests/Kitchensection/plus-icon.png"
    },
    {
      img: "assests/Kitchensection/pizza2.jpg",
      title: "Cheese Burst Pizza",
      price: "₹150",
      rating: "4.5",
      time: "assests/Kitchensection/time.png",
      offer: null,
      plus: "assests/Kitchensection/plus-icon.png"
    },
    {
      img: "assests/Kitchensection/pizza1.png",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer2.png",
      plus: "assests/Kitchensection/plus-icon-2.png"
    }
  ];

  const swiperWrapper = document.querySelector(".popular-swiper .swiper-wrapper");

  if (swiperWrapper) {
    popularItems.forEach(item => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");

      slide.innerHTML = `
        <div class="kitchen-card">
          <img src="${item.img}" alt="${item.title}" class="dish-img" />
          ${item.offer ? `<img src="${item.offer}" alt="Offer" class="offer-tag" />` : ""}
          <div class="card-body">
            <div class="inner-body">
              <div class="dish-info">
                <h3 class="dish-title">${item.title}</h3>
                <div class="dish-meta">
                  <span class="dish-price">${item.price}</span>
                </div>
              </div>
              <div class="dish-icons">
                <div class="left-icons">
                  <div class="left-bg">
                    <img src="assests/Kitchensection/ant-design_star-filled.png" alt="Rating" class="star-icon" />
                    <p class="rating">${item.rating}</p>
                  </div>
                  <img src="${item.time}" alt="Time" class="time-icon" />
                </div>
                <img src="${item.plus}" alt="Add" class="icon plus" />
              </div>
            </div>
          </div>
        </div>
      `;

      swiperWrapper.appendChild(slide);
    });

    // Initialize Swiper
    if (typeof Swiper !== "undefined") {
      new Swiper('.popular-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            centeredSlides: false
          },
          768: {
            slidesPerView: 2,
            centeredSlides: false
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: true
          }
        }
      });
    }
  }



  //Request Dish Modal
  const requestDishBtn = document.getElementById("requestDishBtn");
  const modal = document.getElementById("requestDishModal");
  const closeBtn = document.querySelector(".close-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const submitBtn = document.querySelector(".submit-btn");

  const closeModal = () => {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  };

  if (requestDishBtn && modal) {
    requestDishBtn.addEventListener("click", () => {
      modal.style.display = "flex";
      document.body.classList.add("modal-open");
    });
  }

  if (submitBtn) submitBtn.addEventListener("click", closeModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  

  //Service Section Video
  const video = document.getElementById("serviceVideo");
  const playBtn = document.getElementById("playBtn");

  function toggleVideo() {
    if (video.paused) {
      video.play();
      playBtn.style.display = "none";
    } else {
      video.pause();
      playBtn.style.display = "flex";
    }
  }

  if (playBtn && video) {
    playBtn.addEventListener("click", toggleVideo);
    video.addEventListener("click", toggleVideo);

    video.addEventListener("ended", () => {
      playBtn.style.display = "flex";
    });
  }
});
