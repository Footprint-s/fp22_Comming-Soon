// add "send email" button DOM and set id="send" in index file

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

// --- Logic Of Sponsors Slider (Added by Abdeali) --- //

$(document).ready(function () {
  $(".swiper-wrapper").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 1500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
