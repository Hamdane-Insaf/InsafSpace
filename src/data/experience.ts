import type { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: "csc-president",
    role: "President – Computer Science Club (CSC)",
    organization: "ENSA Tangier",
    period: "2026 – Present",
    description: "Leading the club, organizing events, and fostering the tech community.",
    type: "leadership",
  },
  {
    id: "itdayz-sponsoring",
    role: "Sponsoring Team Member – IT Day’z",
    organization: "ENSA Tangier",
    period: "2025",
    description: "Contributed to sponsor outreach and partnerships for the IT Day’z event.",
    type: "leadership",
  },
  {
    id: "puerto-transit",
    role: "Intern – Puerto Transit",
    organization: "Tangier",
    period: "Jul – Sep 2026",
    description:
      "Built an internal RAG AI assistant (Ollama, Open WebUI, ChromaDB, Docker) with Active Directory/LDAP login, and deployed a PacketFence NAC system (VLAN, RADIUS, 802.1X) with a Cisco Catalyst switch.",
    type: "internship",
  },
  {
    id: "ensa-student",
    role: "Student at ENSA Tangier",
    organization: "Computer Science Engineering",
    period: "2023 – Present",
    description: "Engineering studies in computer science.",
    type: "education",
  },
];