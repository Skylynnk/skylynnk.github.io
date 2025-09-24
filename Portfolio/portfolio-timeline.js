function portfolioToggle(header) {
    const details = header.nextElementSibling;
    const isExpanded = details.classList.contains('portfolio-expanded');

    // Close all other expanded items
    document.querySelectorAll('.portfolio-position-header').forEach(h => {
        h.classList.remove('portfolio-active');
        h.nextElementSibling.classList.remove('portfolio-expanded');
    });

    // Toggle current item
    if (!isExpanded) {
        header.classList.add('portfolio-active');
        details.classList.add('portfolio-expanded');
    }
}

function portfolioChangeSlide(button, direction) {
    const slider = button.closest('.portfolio-image-slider');
    const images = slider.querySelectorAll('.portfolio-slider-image');
    const dots = slider.querySelectorAll('.portfolio-slider-dot');
    
    let current = 0;
    images.forEach((img, index) => {
        if (img.classList.contains('portfolio-slider-active')) {
            current = index;
        }
    });

    images[current].classList.remove('portfolio-slider-active');
    dots[current].classList.remove('portfolio-dot-active');

    current += direction;
    if (current >= images.length) current = 0;
    if (current < 0) current = images.length - 1;

    images[current].classList.add('portfolio-slider-active');
    dots[current].classList.add('portfolio-dot-active');
}

function portfolioCurrentSlide(dot, index) {
    const slider = dot.closest('.portfolio-image-slider');
    const images = slider.querySelectorAll('.portfolio-slider-image');
    const dots = slider.querySelectorAll('.portfolio-slider-dot');

    images.forEach(img => img.classList.remove('portfolio-slider-active'));
    dots.forEach(d => d.classList.remove('portfolio-dot-active'));

    images[index].classList.add('portfolio-slider-active');
    dots[index].classList.add('portfolio-dot-active');
}

// navbar
//bottom nav bar
function showSection(event, sectionId) {
    event.preventDefault(); // 👈 This prevents the scroll to top
  
    // Hide all sections
    const sections = document.querySelectorAll('.info-section');
    sections.forEach(section => section.style.display = 'none');
  
    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) activeSection.style.display = 'block';
  
    // Update active nav link
    const navLinks = document.querySelectorAll('#moreNavBar ul li a');
    navLinks.forEach(link => link.classList.remove('active'));
  
    // Highlight the clicked link
    const clickedLink = event.currentTarget;
    if (clickedLink) clickedLink.classList.add('active');
  }

  //accorion 
  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}