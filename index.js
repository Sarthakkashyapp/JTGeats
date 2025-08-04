document.addEventListener("DOMContentLoaded", () => {
  // Popular Items Data
  const popularItems = [
    {
      img: "assests/Kitchensection/tandoori-chicken.png",
      title: "Tandoori Chicken",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time2.png",
      offer: null,
      plus : "assests/Kitchensection/plus-icon.png"
    },
    {
      img: "assests/Kitchensection/chilli-chicken.png",
      title: "Chilli Chicken",
      price: "₹184",
      rating: "4.3",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer2.png",
      plus : "assests/Kitchensection/plus-icon.png"
    },
    {
      img: "assests/Kitchensection/pizza6.png",
      title: "Fresh Pizza",
      price: "₹116",
      rating: "4.1",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer.png",
      plus : "assests/Kitchensection/plus-icon.png"
    },
    {
      img: "assests/Kitchensection/pizza2.jpg",
      title: "Cheese Burst Pizza",
      price: "₹150",
      rating: "4.5",
      time: "assests/Kitchensection/time.png",
      offer: null,
      plus : "assests/Kitchensection/plus-icon.png"
    },
    {
      img: "assests/Kitchensection/pizza1.png",
      title: "Home made pizza",
      price: "₹190",
      rating: "4.7",
      time: "assests/Kitchensection/time.png",
      offer: "assests/Kitchensection/offer2.png",
      plus : "assests/Kitchensection/plus-icon-2.png"
    }
  ];

  // Target the swiper-wrapper
  const swiperWrapper = document.querySelector(".popular-swiper .swiper-wrapper");

  if (!swiperWrapper) {
    console.error("Swiper wrapper not found in DOM.");
    return;
  }

  // Generate slides dynamically
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
  if (typeof Swiper === "undefined") {
    console.error("Swiper library not loaded.");
    return;
  }

  const swiper = new Swiper('.popular-swiper', {
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


  // Request Dish Modal Logic
  const requestDishBtn = document.getElementById("requestDishBtn");
  const modal = document.getElementById("requestDishModal");
  const closeBtn = document.querySelector(".close-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const submitBtn = document.querySelector(".submit-btn");

  if (requestDishBtn && modal) {
    requestDishBtn.addEventListener("click", () => {
      modal.style.display = "flex";
      document.body.classList.add("modal-open");
    });
  }

  if(submitBtn) {
    submitBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    })
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
});


// Service section login
const video = document.getElementById("serviceVideo");
const playBtn = document.getElementById("playBtn");

// Toggle functionality
function toggleVideo() {
  if (video.paused) {
    video.play();
    playBtn.style.display = "none";
  } else {
    video.pause();
    playBtn.style.display = "flex";
  }
}

playBtn.addEventListener("click", toggleVideo);
video.addEventListener("click", toggleVideo);

// Show play icon again when video ends
video.addEventListener("ended", () => {
  playBtn.style.display = "flex";
});
