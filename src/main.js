import './styles.css'

// Scroll reveal with IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
)

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
  })
}

// Navbar background on scroll
const nav = document.getElementById('navbar')
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('bg-dark-900/95', 'backdrop-blur-md', 'shadow-lg')
      nav.classList.remove('bg-transparent')
    } else {
      nav.classList.remove('bg-dark-900/95', 'backdrop-blur-md', 'shadow-lg')
      nav.classList.add('bg-transparent')
    }
  })
}
