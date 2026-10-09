export type TeamProfile={id:number;name:string;role:string;department:string;bio:string;image:string;socials:{twitter?:string;linkedin?:string;github?:string;email?:string}};
export const demoTeam: TeamProfile[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CEO & Founder",
      department: "leadership",
      bio: "Visionary leader with 15+ years of industry experience.",
      image: "/placeholder.svg",
      socials: {
        email: "alex@example.com",
      },
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "CTO",
      department: "leadership",
      bio: "Tech innovator specializing in scalable architecture.",
      image: "/placeholder.svg",
      socials: {
        email: "sarah@example.com",
      },
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Lead Developer",
      department: "engineering",
      bio: "Full-stack developer with expertise in React and Node.js.",
      image: "/placeholder.svg",
      socials: {
        email: "michael@example.com",
      },
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "UX Designer",
      department: "design",
      bio: "Creating intuitive user experiences through research-driven design.",
      image: "/placeholder.svg",
      socials: {
        email: "emily@example.com",
      },
    },
    {
      id: 5,
      name: "David Kim",
      role: "Marketing Director",
      department: "marketing",
      bio: "Strategic marketer with a passion for brand storytelling.",
      image: "/placeholder.svg",
      socials: {
        email: "david@example.com",
      },
    },
    {
      id: 6,
      name: "Priya Patel",
      role: "Backend Engineer",
      department: "engineering",
      bio: "Database expert specializing in high-performance systems.",
      image: "/placeholder.svg",
      socials: {
        email: "priya@example.com",
      },
    },
    {
      id: 7,
      name: "James Wilson",
      role: "Product Manager",
      department: "product",
      bio: "Bridging the gap between business needs and technical solutions.",
      image: "/placeholder.svg",
      socials: {
        email: "james@example.com",
      },
    },
    {
      id: 8,
      name: "Olivia Martinez",
      role: "UI Designer",
      department: "design",
      bio: "Creating beautiful interfaces with attention to detail.",
      image: "/placeholder.svg",
      socials: {
        email: "olivia@example.com",
      },
    },
  ]

export function filterTeam(members:TeamProfile[],department:string){return department==='all'?members:members.filter(member=>member.department===department);}
export function departmentsFor(members:TeamProfile[]){return ['all',...new Set(members.map(member=>member.department).filter(d=>d && d!=='all'))];}
export function safeSocial(value?:string,email=false){if(!value)return undefined;if(email)return /^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(value)?`mailto:${value}`:undefined;try{const url=new URL(value);return url.protocol==='https:' && !url.username && !url.password ? url.href:undefined;}catch{return undefined;}}
