import {
  ConsultlyLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Carlos A. Wong",
  initials: "CW",
  location: "Orlando, FL, USA",
  locationLink: "https://www.google.com/maps/place/Orlando",
  about:
    "Detail-oriented Software Engineer dedicated to building high-quality systems.",
  summary:
    "A highly skilled and versatile software engineer with extensive experience in Generative AI, Large Language Models (LLMs), and rapid prototyping. My expertise lies in leading technical teams, developing secure and compliant processes for technology uptake, and driving innovation through cutting-edge solutions. I thrive in dynamic environments, consistently delivering high-impact results and fostering collaborative team cultures.",
  avatarUrl: "https://avatars.githubusercontent.com/u/14238078?v=4",
  personalWebsiteUrl: "https://carloswong.co",
  contact: {
    email: "carloswong54@gmail.com",
    tel: "+7865161988",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/clxyder",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/carlosawong/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Carlos_A_Wong",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Florida State University",
      degrees: [
        {
          degree: "Master's of Science in Electrical Engineering",
          start: "Aug 2018",
          end: "Dec 2020",
          notes: [
            "Thesis: An adaptable signal interface to enable a fault management development process for a medium voltage DC microgrid",
          ],
        },
        {
          degree: "Bachelor's of Science in Computer Engineering",
          start: "Aug 2014",
          end: "Apr 2018",
          notes: [
            "Minor in Physics",
          ],
        },
      ]
    },
  ],
  work: [
    {
      company: "L3Harris Technologies Inc.",
      link: "https://l3harris.com",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: ConsultlyLogo,
      start: "Feb 2021",
      end: null,
      description: [
        "Led the deployment of an on-prem NVIDIA compute cluster, providing enterprise-wide LLM inferencing services for open-source models.",
        "Helped drive millions in savings by assisting in project planning for Retrieval Augmented Generation (RAG) assistants, and interviewed & onboarded software engineers specializing in rapid prototyping.",
        "Performed a threat vector analysis, orchestrated containers for inferencing of open-source LLMs achieving over 90% service uptime, and developed a Technology Control Plan ensuring ITAR/EAR compliance.",
        "Designed an extensible RPC framework for Python, conducted successful customer demonstrations, and reviewed over 100 pull requests for Python, TypeScript, C++ and Java baselines.",
      ],
    },
    {
      company: "Center for Advanced Power System",
      link: "https://www.caps.fsu.edu",
      badges: ["Remote"],
      title: "Graduate Research Assistant",
      logo: ParabolLogo,
      start: "May 2018",
      end: "Jan 2021",
      roles: [],
      description: [
        "Maintained a real-time Python Fault Management (FM) control software that recovers power systems from electrical faults within 87 ms, utilizing real-time simulators, controller hardware-in-the-loop (CHIL), and test-driven development  for future naval shipboard power systems.",
      ],
    },
  ],
  skills: [
    "Python",
    "Docker",
    "LLMs",
    "Kubernetes",
    "TypeScript",
    "React/Next.js",
    "REST",
    "C++",
    "Java",
  ],
  projects: [
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
  ],
  publications: [
    {
      title: "An adaptable signal interface to enable a fault management development process for a medium voltage DC microgrid",
      authors: "Carlos A. Wong",
      date: "Dec 2020",
      link: {
        label: "Permalink",
        href: "https://purl.lib.fsu.edu/diginole/2020_Summer_Fall_Wong_fsu_0071N_16294",
      },
    },
    {
      title: "Multi-Model Resilient Observer under False Data Injection Attacks",
      authors: "Olugbenga Moses Anubi, Charalambos Konstantinou, Carlos A. Wong, Satish Vedula",
      date: "Aug 2020",
      link: {
        label: "DOI",
        href: "https://doi.org/10.1109/CCTA41146.2020.9206284",
      },
    },
    {
      title: "A Tree-Based Reconfiguration Algorithm for Zonal Shipboard Power Systems",
      authors: "Christopher Neuwirt, Jean D.H. Haslwanter, Mark Stanovich, Karl Schoder, Harsha Ravindra, Mischa Steurer, Carlos A. Wong",
      date: "Aug 2019",
      link: {
        label: "DOI",
        href: "https://doi.org/10.1109/ESTS.2019.8847792",
      },
    },
  ],
} as const;
