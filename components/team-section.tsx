"use client"

import { useState } from "react"
import { motion, useReducedMotion, MotionConfig } from "framer-motion"
import TeamMember from "./team-member"

import {demoTeam, filterTeam,departmentsFor,type TeamProfile} from "@/lib/team";
export default function TeamSection({teamMembers=demoTeam}:{teamMembers?:TeamProfile[]}) {
  const reduced=useReducedMotion();
  const [activeFilter, setActiveFilter] = useState("all")


  const departments=departmentsFor(teamMembers).map(id=>({id,name:id==='all'?'All':id.charAt(0).toUpperCase()+id.slice(1)}));
  const selected=departments.some(d=>d.id===activeFilter)?activeFilter:'all';
  const filteredMembers=filterTeam(teamMembers,selected);
  return (
    <MotionConfig reducedMotion="user"><section className="py-16" aria-label="Team showcase">
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduced ? 0 : 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Team Showcase Demo</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Fictional profiles demonstrate category filtering and reusable team cards.
        </p>
      </motion.div>

      <div role="group" aria-label="Filter by department" className="flex justify-center mb-12 pb-4">
        <div className="flex flex-wrap justify-center gap-2">
          {departments.map((dept) => (
            <button
              key={dept.id}
              aria-pressed={selected === dept.id} aria-controls="team-grid"
              onClick={() => setActiveFilter(dept.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selected === dept.id
                  ? "bg-emerald-700 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>
      </div>

      <p role="status" className="text-center mb-4">{filteredMembers.length} profiles shown</p>
      {!filteredMembers.length && <p>No profiles configured.</p>}
      <motion.div id="team-grid" layout={!reduced} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredMembers.map((member, index) => (
          <TeamMember key={member.id} member={member} index={index} />
        ))}
      </motion.div>
    </section></MotionConfig>
  )
}
