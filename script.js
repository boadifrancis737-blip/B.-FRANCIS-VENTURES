// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);
        if (section) {
            e.preventDefault();
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Highlight active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('main section');
    let scrollPos = window.scrollY + 100;
    sections.forEach(section => {
        if (
            section.offsetTop <= scrollPos &&
            section.offsetTop + section.offsetHeight > scrollPos
        ) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Basic form validation (if a form is added later)
function validateContactForm() {
    console.log('Form validation placeholder');
    // Add form validation logic here if needed
}