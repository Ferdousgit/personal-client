import * as FontIcon from "react-icons/fa";

export type Education = {
  _id: string;
  institution: string;
  degree: string;
};

export type Biography = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  fullName: string;
  shortBio: string;
  biography: string;
  avatar: string;
  interests: string[];
  educations: Education[];
};

export type ShortBio = {
  _id: string;
  fullName: string;
  shortBio: string;
  avatar: string;
};

export type SocialMediaLink = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  label: string;
  link: string;
  icon: keyof typeof FontIcon;
};

export type Publication = {
  _id: string;
  title: string;
  about: string;
  citation: string;
  description: string;
  publicationDate: Date;
  viewLink: string;
  downloadPdf?: string;
  downloadSlide?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Blog = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  about: string;
  blog: string;
  viewLink: string;
  publicationDate: Date;
  readingTime: string;
};

export type TeachingExperience = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  designation: string;
  course: string;
  department: string;
  institution: string;
  about: string;
  description: string;
  startDate: Date;
  endDate: Date | "current";
};

export type CategorizedBlogs = {
  [year: string]: Blog[];
};

export type CV = {
  _id: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
};
