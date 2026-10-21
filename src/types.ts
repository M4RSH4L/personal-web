export type BusinessModel = 'ecommerce' | 'b2b' | 'infoproducts' | 'retail';

export type GrowthChallenge = 
  | 'low_roas' 
  | 'high_cpl' 
  | 'low_conversion' 
  | 'retention' 
  | 'scale_bottleneck';

export interface DiagnosticResult {
  title: string;
  verdict: string;
  leakIdentified: string;
  potentialUpside: string;
  recommendedActions: string[];
  keyMetric: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  tagline?: string;
  companyPhoto: string;
  companyLogoUrl?: string;
  channels: string[];
  headline: string;
  description: string;
  metrics: {
    label: string;
    before: string;
    after: string;
    delta: string;
  }[];
  quote: string;
  author: string;
  role: string;
}

export interface BookingSubmission {
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  businessName: string;
  websiteOrSocial: string;
  monthlyAdSpend: string;
  mainGoal: string;
}

export interface VideoLesson {
  id: string;
  title: string;
  duration: string;
  summary: string;
  videoPlaceholderUrl?: string;
}

export interface VideoInfoproduct {
  id: string;
  title: string;
  subtitle: string;
  category: 'ecommerce' | 'creativos' | 'automatizacion' | 'tracking';
  categoryLabel: string;
  thumbnail: string;
  totalDuration: string;
  lessonsCount: number;
  level: 'Intermedio' | 'Avanzado' | 'Mastery';
  instructor: string;
  description: string;
  lessons: VideoLesson[];
  resources: string[];
}

export interface StudentUser {
  name: string;
  email: string;
  membershipPlan: string;
  avatarUrl?: string;
}
