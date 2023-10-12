document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize components here, if any
  
    // Custom animations and interactivity
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', function() {
        this.classList.add('animated', 'pulse');
        setTimeout(() => this.classList.remove('animated', 'pulse'), 1000);
      });
    });
  });
  
  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }
  
  function navigateToPage(page) {
    window.location.href = `${page}.html`;
  }
  