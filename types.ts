import React from 'react';

export type Language = 'ar' | 'en';

export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  GALLERY = 'gallery',
  CONTACT = 'contact',
  ADMIN = 'admin'
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: string; // Changed from ReactNode to string for storage
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

// Deep partial for updating translations
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export interface WebsiteContent {
  translations: any; // Using any for flexibility with the translation structure
  projects: ProjectItem[];
  services: ServiceItem[];
  heroImage: string;
}

export interface ContentContextType {
  content: WebsiteContent;
  updateTranslation: (lang: Language, section: string, key: string, value: string) => void;
  updateNestedTranslation: (lang: Language, path: string[], value: string) => void;
  updateHeroImage: (url: string) => void;
  addProject: (project: Omit<ProjectItem, 'id'>) => void;
  deleteProject: (id: number) => void;
  updateProject: (project: ProjectItem) => void;
  resetToDefaults: () => void;
  saveChanges: () => void;
}