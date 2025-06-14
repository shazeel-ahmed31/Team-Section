"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import TeamMember from "./team-member"

export default function TeamSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CEO & Founder",
      department: "leadership",
      bio: "Visionary leader with 15+ years of industry experience.",
      image: "/placeholder.svg?height=400&width=400",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "alex@example.com",
      },
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "CTO",
      department: "leadership",
      bio: "Tech innovator specializing in scalable architecture.",
      image: "/placeholder.svg?height=400&width=400",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "sarah@example.com",
      },
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Lead Developer",
      department: "engineering",
      bio: "Full-stack developer with expertise in React and Node.js.",
      image: "/placeholder.svg?height=400&width=400",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "michael@example.com",
      },
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "UX Designer",
      department: "design",
      bio: "Creating intuitive user experiences through research-driven design.",
      image: "/placeholder.svg?height=400&width=400",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "emily@example.com",
      },
    },
    {
      id: 5,
      name: "David Kim",
      role: "Marketing Director",
      department: "marketing",
      bio: "Strategic marketer with a passion for brand storytelling.",
      image: "/placeholder.svg?height=400&width=400",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "david@example.com",
      },
    },
    {
      id: 6,
      name: "Priya Patel",
      role: "Backend Engineer",
      department: "engineering",
      bio: "Database expert specializing in high-performance systems.",
      image: "/placeholder.svg?height=400&width=400",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "priya@example.com",
      },
    },
    {
      id: 7,
      name: "James Wilson",
      role: "Product Manager",
      department: "product",
      bio: "Bridging the gap between business needs and technical solutions.",
      image: "/placeholder.svg?height=400&width=400",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "james@example.com",
      },
    },
    {
      id: 8,
      name: "Olivia Martinez",
      role: "UI Designer",
      department: "design",
      bio: "Creating beautiful interfaces with attention to detail.",
      image: "/placeholder.svg?height=400&width=400",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "olivia@example.com",
      },
    },
  ]

  const departments = [
    { id: "all", name: "All" },
    { id: "leadership", name: "Leadership" },
    { id: "engineering", name: "Engineering" },
    { id: "design", name: "Design" },
    { id: "marketing", name: "Marketing" },
    { id: "product", name: "Product" },
  ]

  const filteredMembers =
    activeFilter === "all" ? teamMembers : teamMembers.filter((member) => member.department === activeFilter)

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          We're a diverse group of passionate individuals working together to create amazing experiences.
        </p>
      </motion.div>

      <div className="flex justify-center mb-12 overflow-x-auto pb-4">
        <div className="flex space-x-2">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setActiveFilter(dept.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === dept.id
                  ? "bg-emerald-500 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredMembers.map((member, index) => (
          <TeamMember key={member.id} member={member} index={index} />
        ))}
      </motion.div>
    </section>
  )
}
