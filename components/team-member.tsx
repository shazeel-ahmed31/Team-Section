"use client";
import {useState} from 'react';import {motion,useReducedMotion} from 'framer-motion';import {Github,Linkedin,Twitter,Mail} from 'lucide-react';import {Card,CardContent} from '@/components/ui/card';import {safeSocial,type TeamProfile} from '@/lib/team';
export default function TeamMember({member,index}:{member:TeamProfile;index:number}){
 const reduced=useReducedMotion();const [hovered,setHovered]=useState(false);const [focused,setFocused]=useState(false);const [imageFailed,setImageFailed]=useState(false);
 const icons={twitter:Twitter,linkedin:Linkedin,github:Github,email:Mail};
 return <motion.article initial={false} animate={{opacity:1,y:0}} transition={{duration:reduced?0:.4,delay:reduced?0:index*.05}} layout={!reduced}>
 <Card className="team-card overflow-hidden h-full hover:shadow-xl" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} onFocusCapture={()=>setFocused(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget as Node))setFocused(false);}}>
 <div className="relative overflow-hidden"><motion.div animate={{scale:!reduced&&(hovered||focused)?1.05:1}} transition={{duration:reduced?0:.3}} className="aspect-square bg-slate-100">
 {imageFailed?<div className="h-full flex items-center justify-center text-slate-700" role="img" aria-label={`${member.name}: image unavailable`}>{member.name.split(' ').map(n=>n[0]).join('')}</div>:<img src={member.image||'/placeholder.svg'} alt={`${member.name}, fictional demonstration profile`} loading="lazy" width="400" height="400" onError={()=>setImageFailed(true)} className="w-full h-full object-cover"/>}
 </motion.div></div><CardContent className="p-5"><h3 className="font-bold text-xl text-slate-800">{member.name}</h3><p className="text-emerald-700 font-medium mb-2">{member.role}</p><p className="text-slate-600 text-sm">{member.bio}</p>
 <div className="flex flex-wrap gap-3 mt-4" aria-label={`Contact ${member.name}`}>
 {(Object.keys(icons) as (keyof typeof icons)[]).map(key=>{const href=safeSocial(member.socials[key],key==='email');const Icon=icons[key];return href?<a key={key} href={href} aria-label={`${member.name} ${key}`} target={key==='email'?undefined:'_blank'} rel={key==='email'?undefined:'noopener noreferrer'} className="p-2 rounded-full border text-emerald-800"><Icon size={18} aria-hidden="true"/></a>:null;})}
 </div></CardContent></Card></motion.article>;
}
