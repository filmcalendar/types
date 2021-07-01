export type Country = 'uk';

export type Language = 'en-GB';

export type AgentType = 'films' | 'reviews' | 'age-ratings';

export type ProviderType = 'cinema' | 'live-tv' | 'streaming';

interface Availability {
  start: string;
  end: string;
  tags: string[];
}

interface Film {
  cast?: string[];
  director?: string[];
  title?: string;
  titleTranslated?: string;
  year?: number;
}

interface Provider {
  _data?: unknown;
  address?: string;
  chain?: string;
  email?: string;
  name: string;
  phone?: string;
  ref?: string;
  type: ProviderType;
  url: string;
}

interface BookingRequest {
  formUrlEncoded?: Record<string, string>;
  jsonData?: Record<string, string>;
  method: 'POST' | 'GET';
  url: string;
}

interface Session {
  tags: string[];
  dateTime: string;
  link: string | BookingRequest | null;
}

interface Season {
  description?: string;
  image?: string;
  name: string;
  programme?: string[];
  ref?: string;
  url: string;
}

interface Tag {
  tag: string;
}
