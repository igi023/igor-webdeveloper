window.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const h1 = document.querySelector('.navbar h1');
  const links = navbar.querySelectorAll('a');
  const scrollAmount = 100; // Change this value to the number of pixels you want

  function changeNavColor() {
      console.log('Scrolling...'); // Debugging line
      if (window.scrollY > scrollAmount) {
          console.log('Scrolled past ' + scrollAmount + 'px'); // Debugging line
          navbar.style.position = 'fixed';
          navbar.style.backgroundColor = 'silver'; // Change navbar background color
          navbar.style.borderColor = 'black';
          links.forEach(a => a.style.color = 'black'); // Change navbar link color
          h1.style.color = 'black'; // Change h1 text color
          h1.style.borderColor = 'black'; // Change h1 border color
      } else {
          console.log('Scrolled above ' + scrollAmount + 'px'); // Debugging line
          navbar.style.position = 'relative';
          navbar.style.backgroundColor = 'black'; // Original navbar background color
          navbar.style.borderColor = 'white';
          links.forEach(a => a.style.color = 'white'); // Original navbar link color
          h1.style.color = 'white'; // Original h1 text color
          h1.style.borderColor = 'white'; // Original h1 border color
      }
  }

  links.forEach(a => {
      a.addEventListener('mouseover', function() {
          this.style.color = 'rgb(0, 0, 204)'; // Blue color on hover
      });
      a.addEventListener('mouseout', function() {
          if (window.scrollY > scrollAmount) {
              this.style.color = 'black'; // Black color after hover when scrolled
          } else {
              this.style.color = 'white'; // White color after hover when not scrolled
          }
      });
  });

  // Initial call to set the correct color on page load
  changeNavColor();

  // Attach the scroll event listener
  window.onscroll = function() {
      changeNavColor();
  };
});



// JS KOD ZA HAMBURGER MENU 

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Adjust this value if needed
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});



// ========================================================================================================================================
// JS KOD ZA SLIKE U HOME SECTIONU  

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".sliderImages img");
    let cycle = 0;

    // Funkcija za pokretanje animacije
    function startAnimation() {
        images.forEach((img, index) => {
            img.classList.add('hidden');
            img.classList.remove('slide-in', 'slide-out'); // Resetuje sve klase
        });

        // Prikazivanje slike u grupi
        images.forEach((img, index) => {
            if ((index >= cycle && index < cycle + 3) || (cycle + 3 > images.length && index < (cycle + 3) % images.length)) {
                img.classList.remove('hidden');
                img.classList.add('slide-in');
                img.addEventListener('animationend', () => {
                    if (img.classList.contains('slide-in')) {
                        img.classList.remove('slide-in');
                        img.classList.add('slide-out');
                    }
                });
            }
        });

        // Povećava ciklus i vraća na početak ako je na kraju
        cycle = (cycle + 3) % images.length;

        // Ponovo pokreni animaciju
        setTimeout(startAnimation, 6000); // Vreme treba da se poklapa sa trajanjem animacije
    }

    
    startAnimation();
});

// ==============================================================================================================

// JS KOD ZA TEXT U HOME SEKCIJI

  document.addEventListener("DOMContentLoaded", function() {
    let i = 0;
    let txtIndex = 0;
    const texts = ['I\'m a web developer', 'My name is Igor', 'I\'m a programmer'];
    let speed = 50; // The speed/duration of the typing effect in milliseconds
    let deleting = false;
    
    function typeWriter() {
      let currentText = texts[txtIndex];
      let displayText = currentText.substring(0, i);
      
      document.getElementById("typeWritter").innerHTML = displayText;
      
      if (!deleting) {
        if (i < currentText.length) {
          i++;
          setTimeout(typeWriter, speed);
        } else {
          deleting = true;
          setTimeout(typeWriter, 1000); // Wait for a while before starting to delete
        }
      } else {
        if (i > 0) {
          i--;
          setTimeout(typeWriter, speed);
        } else {
          deleting = false;
          txtIndex = (txtIndex + 1) % texts.length; // Move to the next text
          setTimeout(typeWriter, 500); // Wait for a while before starting to type the next text
        }
      }
    }
    
    typeWriter();
  });


//   JS KOD ZA MY WORK
document.addEventListener("DOMContentLoaded", function() {
    // Dobijanje svih projekt elemenata
    const projects = document.querySelectorAll('.project');
  
    // Provera da li je element u vidnom polju
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top < window.innerHeight && rect.bottom > 0
      );
    }
  
    // Provera da li je svaki projekt u vidnom polju
    function checkVisibility() {
      projects.forEach(project => {
        if (isInViewport(project)) {
          project.classList.add('in-view');
        }
      });
    }
  
    // Slušanje događaja skrolovanja
    window.addEventListener('scroll', checkVisibility);
    // Početna provera u slučaju da je sekcija već u vidnom polju prilikom učitavanja
    checkVisibility();
});


  let backToTopButton = document.getElementById("backToTop");

  // Show the button when the user scrolls down 20px from the top of the document
  window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          backToTopButton.style.display = "flex";
      } else {
          backToTopButton.style.display = "none";
      }
  };

  // When the user clicks on the button, scroll to the top of the document
  function scrollToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }



// Control with navigation anchor

  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor link behavior

            const targetId = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scroll
                block: 'start' // Scroll to the top of the target element
            });
        });
    });
});