document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - headerHeight(),
      behavior: 'smooth'
    });
  }

  function headerHeight() {
    const header = document.querySelector('header');
    return header.offsetHeight;
  }
});