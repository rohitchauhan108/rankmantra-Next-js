import { Circle, Link, OrigamiIcon, Search, WebhookIcon, Server, Cloud, Layout, Users, Zap, Database, Globe, ArrowRightLeft } from "lucide-react";
import { DraftingCompass } from "lucide-react";
import { MdDesignServices, MdDeveloperBoard, MdEco, MdLogoDev } from "react-icons/md";
import { SiErpnext, SiShopify, SiWebstorm, SiWix, SiWordpress } from "react-icons/si";
import { FaCode, FaSearch, FaShareAlt } from "react-icons/fa";

const websiteServiceColumns = [
  {
    heading: "DEVELOPMENT",
    items: [
      {
        name: "Web Development",
        icon: MdDeveloperBoard,
        link:"/web-develop"
      },
      {
        name: "E-Commerce Development",
        icon: MdEco,
        link:"/ecommerce-develop"
      },
      {
        name: "Logo Designing",
        icon: MdLogoDev,
        link:"/logo-design"
      },
    ],
  },
  {
    heading: "DESIGNING",
    items: [
      {
        name: "Website Designing",
        icon: SiWebstorm,
        link:"/website-designing"
      },
      {
        name: "Website Redesigning",
        icon: MdDesignServices,
        link:"/website-redesign",
      },
      {
        name: "Shopify Development",
        icon: SiShopify,
        link:"/shopify-development"
      },
    ],
  },
  {
    heading: "CMS DEVELOPMENT",
    items: [
      {
        name: "Wordpress Development",
        icon: SiWordpress,
        link:"/wordpress-development"
      },
      {
        name: "Wix Development",
        icon: SiWix,
        link:"/wix-development"
      },
    ],
  },
  {
    heading: "SEO",
    items: [
      {
        name: "SEO Services",
        icon: FaSearch,
        link:"/seo"
      },
    ],
  },
];

export const Menus = [
  /*
  {
    name: "HOSTING",
    subMenu: [
      {
        name: "Cheap Hosting",
        icon: Server,
        link: "/cheap-hosting"
      },
      {
        name: "Cloud Hosting - In",
        icon: Cloud,
        link: "/cloud-hosting-in"
      },
      {
        name: "Cloud Hosting",
        icon: Cloud,
        link: "/cloud-hosting"
      },
      {
        name: "cPanel Hosting",
        icon: Layout,
        link: "/cpanel-hosting"
      },
      {
        name: "Reseller Hosting",
        icon: Users,
        link: "/reseller-hosting"
      },
      {
        name: "Wordpress Hosting",
        icon: SiWordpress,
        link: "/wordpress-hosting"
      },
      {
        name: "Litespeed Hosting",
        icon: Zap,
        link: "/litespeed-hosting"
      },
      {
        name: "VPS Hosting",
        icon: Database,
        link: "/vps-hosting"
      },
    ],
    gridCols: 2,
  },
  {
    name: "DOMAINS",
    subMenu: [
      {
        name: "Register a new domain",
        icon: Globe,
        link: "/register-domain"
      },
      {
        name: "Transfer a domain to us",
        icon: ArrowRightLeft,
        link: "/transfer-domain"
      },
    ],
    gridCols: 1,
  },
  */
  {
    name: "WEBSITE SERVICES",
    subMenu: websiteServiceColumns.flatMap(({ items }) => items),
    subMenuColumns: websiteServiceColumns,
    gridCols: 4,
  },
  {
    name: "PACKAGES",
    subMenu: [
      {
        name: "SEO Packages",
        icon: Search,
        link:"/seo-package"
      },
      {
        name: "SMM Packages",
       icon: Circle,
       link:"/smm"
      },
      {
        name: "PPC Packages",
        icon: DraftingCompass,
        link:"/pay-per-click"
      },
      {
        name: "ORM Packages",
        icon: OrigamiIcon,
        link:"/online-reputation"
      },
      {
        name: "WEB Hosting packages",
        icon: WebhookIcon,
        link:"https://rankmantra.com/hosting/"
      },
    ],
    gridCols: 1,
  },
  {
    name: "SOCIAL MEDIA",
    link:"/social-media"
  },
  {
    name:"OUR PORTFOLIO",
    subMenu:[
      {
        name:"Web Development",
        icon: FaCode,
        target:"_blank",
        rel:"noopener noreferrer",
        link:"/our-work/web-development.pdf"
      },
      {
        name:"SEO",
        icon: FaSearch,
        target:"_blank",
        rel:"noopener noreferrer",
        link:"/our-work/seo.pdf"
      },
      {
        name:"Social Media Marketing",
        icon: FaShareAlt,
        target:"_blank",
        rel:"noopener noreferrer",
        link:"/our-work/social-media-marketing.pdf"
      }
    ]
  },
  {
    name: "ABOUT US",
    link:"/about-us"
  },
  {
    name: "GALLERY",
    link:"/gallery"
  },
  {
    name: "FAQS",
    link:"/faqs"
  },
];
