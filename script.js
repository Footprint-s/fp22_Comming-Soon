              // Logic Of : Mail send //

sendBtn = document.getElementById("send");
const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const sendRequest = (method, url, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open(method, url);
    if (data) {
      xhttp.setRequestHeader("Content-Type", "application/json");
    }
    xhttp.onloadend = () => {
      if (xhttp.status >= 400) {
        reject(JSON.parse(xhttp.response));
      } else {
        resolve(JSON.parse(xhttp.response));
      }
    };

    xhttp.send(JSON.stringify(data));
  });

  return promise;
};

sendBtn.addEventListener("click", () => {
  let email = document.getElementById("email-textbox").value;
  if (email.match(email_regex)) {
    sendRequest("POST", "https://api.msufp.in/api/newsletter/", {
      email: email,
    })
      .then((resp) => {
        alert(resp.message ? resp.message : resp.email);
      })
      .catch((err) => {
        alert(`Error:${err}`);
      });
  } else {
    alert("E-mail address is not valid.");
  }
  email.value = "";
});

// --- Logic Of Sponsors Slider --- //
$(document).ready(function () {
  $('.Sponsors_swiper_Rappers').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode:true,
    arrows: false,
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 2,
          centerMode:false

        }
      },
      {
        breakpoint: 556,
        settings: {
          slidesToShow: 2,
          centerMode:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode:false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 468,
        settings: {
          centerMode:false,
          slidesToShow: 1
        }
      }
    ]
  });
});

// ----------- Logic of Testimonials -------------- //

new Swiper('.testimonials-slider', {
  speed: 1800,
  loop: false,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    250: {
      slidesPerView: 1,
    },
    350: {
      slidesPerView: 1,
    },
    468: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    556: {
      slidesPerView: 2,
    },
    567: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },

    1199: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

$(".testimonials-slider").hover(function() {
  (this).swiper.autoplay.stop();
}, function() {
  (this).swiper.autoplay.start();
});

// Initilize AOS

AOS.init();