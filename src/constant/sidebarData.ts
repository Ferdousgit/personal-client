import { BookOpenText, Github, Home, Mail, MapPin } from "lucide-react";

export const sidebarData = [
  {
    label: "Earth",
    link: "",
    Icon: MapPin,
  },
  {
    label: "Red Brick University",
    link: "",
    Icon: Home,
  },
  {
    label: "Email",
    link: "mailto:tanvin@gmail.com",
    Icon: Mail,
  },
  {
    label: "Google Schoolers",
    link: "https://scholar.google.com/citations?user=PS_CX0AAAAAJ",
    src: "./icons/google-scholar.svg",
  },
  {
    label: "ORCID",
    link: "http://orcid.org/yourorcidurl",
    src: "./icons/orcid.svg",
  },
  {
    label: "PubMed",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/?term=john+snow",
    Icon: BookOpenText,
  },
  {
    label: "Github",
    link: "https://github.com/Tanvin-Ahmed",
    Icon: Github,
  },
];
