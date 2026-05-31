import LinkedInIcon from '@/components/icons/LinkedInIcon.astro';
import devTermsCover from '@/images/projects/devterms.jpg';
import iconKitCover from '@/images/projects/iconkit.jpg';
import PuzzleIcon from '@lucide/astro/icons/puzzle';
import RSSIcon from '@lucide/astro/icons/rss';
import AstroIcon from 'simple-icons-astro/Astro';
import CloudflarePagesIcon from 'simple-icons-astro/Cloudflarepages';
import GitHubIcon from 'simple-icons-astro/Github';
import MdxIcon from 'simple-icons-astro/Mdx';
import PythonIcon from 'simple-icons-astro/Python';
import TailwindCSSIcon from 'simple-icons-astro/Tailwindcss';
import ThreeDotJSIcon from 'simple-icons-astro/Threedotjs';
import YouTubeIcon from 'simple-icons-astro/Youtube';

import type { Experience, GemGroup, Project, SocialMediaProfile } from './types';

export const socials: SocialMediaProfile[] = [
  { icon: GitHubIcon, href: 'https://github.com/christian-j174' },
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/christian-jrn/' },
  { icon: YouTubeIcon, href: 'https://www.youtube.com/channel/UCMIWpA-ODfBGJ5eQO07e2RA' }
];

export const experience: Experience[] = [];

export const projects: Project[] = [
  {
    name: 'Stadium',
    description:
      'Baseball-themed portfolio with scroll-driven animation where a baseball travels from pitcher to catcher while navigating sections.',
    openSource: true,
    status: 'In progress',
    cover: devTermsCover,
    link: { type: 'GitHub', href: 'https://github.com/christian-j174' },
    icons: [AstroIcon, ThreeDotJSIcon, TailwindCSSIcon, CloudflarePagesIcon, MdxIcon]
  },
  {
    name: 'Options Trading Analysis System',
    description:
      'Strategy-aware options analysis tool to evaluate long calls, long puts, spreads, and verticals based on thesis and risk tolerance.',
    openSource: false,
    status: 'Planning',
    cover: iconKitCover,
    icons: [PythonIcon]
  }
];

export const gems: GemGroup[] = [
  {
    icon: RSSIcon,
    title: 'Certification Roadmap',
    slug: 'certification-roadmap',
    items: [
      {
        title: 'FE Exam',
        description: 'Fundamentals of Engineering pathway',
        href: 'https://ncees.org/exams/fe-exam/'
      },
      {
        title: 'AWS Certified Developer',
        description: 'Developer Associate certification track',
        href: 'https://aws.amazon.com/certification/certified-developer-associate/'
      },
      {
        title: 'Google Associate Cloud Engineer',
        description: 'Cloud engineering certification path',
        href: 'https://cloud.google.com/learn/certification/cloud-engineer'
      },
      {
        title: 'CompTIA Security+',
        description: 'Core security certification',
        href: 'https://www.comptia.org/certifications/security'
      },
      {
        title: 'PE Exam',
        description: 'Professional Engineer licensure step',
        href: 'https://ncees.org/exams/pe-exam/'
      }
    ]
  },
  {
    icon: PuzzleIcon,
    title: 'Technical Resources',
    slug: 'technical-resources',
    items: [
      {
        title: 'Astro Documentation',
        description: 'Web framework reference',
        href: 'https://docs.astro.build/'
      },
      {
        title: 'Three.js Documentation',
        description: '3D graphics and scene systems',
        href: 'https://threejs.org/docs/'
      },
      {
        title: 'Python Documentation',
        description: 'Language and standard library docs',
        href: 'https://docs.python.org/3/'
      },
      {
        title: 'Cloudflare Pages',
        description: 'Deployment and hosting docs',
        href: 'https://developers.cloudflare.com/pages/'
      },
      {
        title: 'Thinkorswim Learning Center',
        description: 'Options and market platform training',
        href: 'https://toslc.thinkorswim.com/'
      }
    ]
  }
];
