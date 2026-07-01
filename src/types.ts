export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  iconName: string;
}

export interface CoreValue {
  title: string;
  description: string;
  iconName: string;
}

export interface StatsBlock {
  value: string;
  label: string;
  description: string;
}

export interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  spaceRequired: string;
  message: string;
  status: 'Received' | 'In Review' | 'Quoted';
  timestamp: string;
}

export interface JobApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  cvName: string;
  cvSize: string;
  message: string;
  status: 'Submitted' | 'Screening' | 'Interview Scheduled';
  timestamp: string;
}
