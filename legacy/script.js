// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "CEO & Founder",
    department: "leadership",
    bio: "Visionary leader with 15+ years of industry experience.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "alex@example.com",
    },
  },
,
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Developer",
    department: "engineering",
    bio: "Full-stack developer with expertise in React and Node.js.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "michael@example.com",
    },
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer",
    department: "design",
    bio: "Creating intuitive user experiences through research-driven design.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "emily@example.com",
    },
  },
  {
    id: 4,
    name: "David Kim",
    role: "Marketing Director",
    department: "marketing",
    bio: "Strategic marketer with a passion for brand storytelling.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "david@example.com",
    },
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Backend Engineer",
    department: "engineering",
    bio: "Database expert specializing in high-performance systems.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "priya@example.com",
    },
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Product Manager",
    department: "product",
    bio: "Bridging the gap between business needs and technical solutions.",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "james@example.com",
    },
  },
 
]

// SVG icons
const icons = {
  twitter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
  email: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
}

// Function to create team member card
function createTeamMemberCard(member) {
  const card = document.createElement("div")
  card.className = `team-member ${member.department}`

  const socialLinks = Object.entries(member.socials)
    .map(([platform, url]) => {
      const href = platform === "email" ? `mailto:${url}` : url
      return `<a href="${href}" class="social-icon" target="_blank" rel="noopener noreferrer">${icons[platform]}</a>`
    })
    .join("")

  card.innerHTML = `
    <div class="image-container">
      <img src="${member.image}" alt="${member.name}" class="team-image" loading="lazy">
      <div class="social-overlay">
        <div class="social-links">
          <div class="social-icons">
            ${socialLinks}
          </div>
        </div>
      </div>
    </div>
    
    <div class="member-info">
      <h3 class="member-name">${member.name}</h3>
      <p class="member-role">${member.role}</p>
      <p class="member-bio">${member.bio}</p>
    </div>
  `

  return card
}

// Function to render team members with animation
function renderTeamMembers(filter = "all") {
  const teamGrid = document.getElementById("team-grid")

  // Fade out existing cards
  const existingCards = teamGrid.querySelectorAll(".team-member")
  existingCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
  })

  setTimeout(() => {
    teamGrid.innerHTML = ""

    const filteredMembers =
      filter === "all" ? teamMembers : teamMembers.filter((member) => member.department === filter)

    filteredMembers.forEach((member, index) => {
      const card = createTeamMemberCard(member)
      teamGrid.appendChild(card)

      // Trigger animation after a small delay
      setTimeout(() => {
        card.classList.add("visible")
      }, 100 * index)
    })
  }, 200)
}

// Function to handle filter button clicks
function setupFilterButtons() {
  const filterButtons = document.querySelectorAll(".filter-btn")

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      // Filter team members
      const filter = button.getAttribute("data-filter")
      renderTeamMembers(filter)
    })
  })
}

// Function to animate heading on scroll
function animateOnScroll() {
  const teamHeading = document.getElementById("team-heading")
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    },
    { threshold: 0.1 },
  )

  observer.observe(teamHeading)
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Animate heading
  setTimeout(() => {
    document.getElementById("team-heading").classList.add("visible")
  }, 100)

  // Setup filter functionality
  setupFilterButtons()

  // Render initial team members
  renderTeamMembers()

  // Setup scroll animations
  animateOnScroll()

  // Add smooth scrolling for better UX
  document.documentElement.style.scrollBehavior = "smooth"
})

// Handle image loading errors
document.addEventListener(
  "error",
  (e) => {
    if (e.target.tagName === "IMG") {
      e.target.src = "https://via.placeholder.com/400x400/10b981/ffffff?text=Team+Member"
    }
  },
  true,
)

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("keyboard-navigation")
  }
})

document.addEventListener("mousedown", () => {
  document.body.classList.remove("keyboard-navigation")
})
