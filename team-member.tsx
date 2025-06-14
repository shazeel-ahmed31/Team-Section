"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface SocialLinks {
  twitter?: string
  linkedin?: string
  github?: string
  email?: string
}

interface TeamMemberProps {
  member: {
    id: number
    name: string
    role: string
    department: string
    bio: string
    image: string
    socials: SocialLinks
  }
  index: number
}

export default function TeamMember({ member, index }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      layout
    >
      <Card
        className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          <motion.div
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.4 }}
            className="aspect-square"
          >
            <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent flex items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 w-full">
              <div className="flex justify-center space-x-3 mb-2">
                {member.socials.twitter && (
                  <motion.a
                    href={member.socials.twitter}
                    whileHover={{ y: -3 }}
                    className="bg-white rounded-full p-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <Twitter size={16} />
                  </motion.a>
                )}
                {member.socials.linkedin && (
                  <motion.a
                    href={member.socials.linkedin}
                    whileHover={{ y: -3 }}
                    className="bg-white rounded-full p-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <Linkedin size={16} />
                  </motion.a>
                )}
                {member.socials.github && (
                  <motion.a
                    href={member.socials.github}
                    whileHover={{ y: -3 }}
                    className="bg-white rounded-full p-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <Github size={16} />
                  </motion.a>
                )}
                {member.socials.email && (
                  <motion.a
                    href={`mailto:${member.socials.email}`}
                    whileHover={{ y: -3 }}
                    className="bg-white rounded-full p-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <Mail size={16} />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        <CardContent className="p-5">
          <motion.div
            animate={{
              y: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-bold text-xl text-slate-800">{member.name}</h3>
            <p className="text-emerald-600 font-medium mb-2">{member.role}</p>
            <p className="text-slate-600 text-sm">{member.bio}</p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
