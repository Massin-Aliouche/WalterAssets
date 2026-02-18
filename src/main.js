import './styles.css'

// -- Scroll reveal with IntersectionObserver --
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (prefersReducedMotion) {
  // Show all elements immediately for users who prefer reduced motion
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'))
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target) // stop observing once revealed
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
}

// -- Mobile menu toggle with accessibility --
const menuBtn = document.getElementById('mobile-menu-btn')
const mobileMenu = document.getElementById('mobile-menu')

function closeMobileMenu() {
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden')
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false')
  }
}

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden')
    mobileMenu.classList.toggle('hidden')
    menuBtn.setAttribute('aria-expanded', String(!isOpen))
  })

  // Close mobile menu when clicking a nav link
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMobileMenu)
  })

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMobileMenu()
    }
  })

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu()
  })
}

// -- Navbar background on scroll --
const nav = document.getElementById('navbar')
if (nav) {
  let ticking = false
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 50) {
          nav.classList.add('bg-dark-900/95', 'backdrop-blur-md', 'shadow-lg')
          nav.classList.remove('bg-transparent')
        } else {
          nav.classList.remove('bg-dark-900/95', 'backdrop-blur-md', 'shadow-lg')
          nav.classList.add('bg-transparent')
        }
        ticking = false
      })
      ticking = true
    }
  })
}

// -- Dynamic copyright year --
document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear()
})

// -- Contact form client-side validation & honeypot --
const contactForm = document.querySelector('form[data-contact]')
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    // Honeypot check
    const hp = contactForm.querySelector('[name="website"]')
    if (hp && hp.value) {
      e.preventDefault()
      return
    }

    // Basic client-side validation
    const email = contactForm.querySelector('[name="email"]')
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      e.preventDefault()
      email.setCustomValidity('Veuillez entrer une adresse email valide.')
      email.reportValidity()
      return
    }
    if (email) email.setCustomValidity('')
  })
}
