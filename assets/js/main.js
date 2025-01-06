// ===================== Featured Listing START ========================

$(".featured_listing_slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // ===================== explore cities START ========================

$(".explore_cities_slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    swipeToSlide :true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // =====================  Apartment Slider START ========================

$(".our_agents_main").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

// ================ Brand Slider start =================

$('.brand_slider_main').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });  
  
// ================ testimonials Slider start =================


$(document).ready(function() {
  $('.testimonials_slider_main').slick({
    dots: false,  
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

 
  $('.slick-dot').on('click', function() {
    var index = $(this).index();
    $('.testimonials_slider_main').slick('slickGoTo', index);
  });

 
  $('.testimonials_slider_main').on('afterChange', function(event, slick, currentSlide) {
    $('.slick-dot').removeClass('active');
    $('.slick-dot').eq(currentSlide).addClass('active');
  });
});

  
  // ================ counter start =================

  document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.award');

    function animateCounter(counter) {
        let target = parseInt(counter.getAttribute('data-target'));
        let element = counter.querySelector('span');
        let current = 0;
        let interval = 50;  
        let step = Math.ceil(target / 100);  

        function animateNumber() {
            if (current < target - 1) {
                current += step;
                if (current >= 1000 && target >= 1000) {
                    
                    element.innerText = Math.floor(current / 1000) + "K";
                } else {
                    element.innerText = current;
                }
            } else {
              current = target;
          
              function formatNumber(number) {
                  if (number >= 1e9) {
                      return (number / 1e9).toFixed(1) + "B"; 
                  } else if (number >= 1e6) {
                      return (number / 1e6).toFixed(1) + "M"; 
                  } else if (number >= 1e3) {
                      return (number / 1e3).toFixed(1) + "K"; 
                  } else {
                      return number.toString();
                  }
              }
          
              element.innerText = formatNumber(target);
          
              clearInterval(countInterval);
          }
        }

        let countInterval = setInterval(animateNumber, interval);
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); 

    counters.forEach(counter => {
        observer.observe(counter);
    });
});

  