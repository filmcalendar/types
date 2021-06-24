export type Country = 'uk';

export type Language = 'en-GB';

export type AgentType = 'films' | 'reviews' | 'age-ratings';

type ProviderType = 'cinema' | 'live-tv' | 'streaming';

export type Availability = {
  start: string;
  end: string;
  attributes: string[];
};

type Film = {
  cast?: string[];
  director?: string[];
  title?: string;
  titleTranslated?: string;
  year?: number;
};

type Provider = {
  _data?: unknown;
  address?: string;
  chain?: string;
  email?: string;
  name: string;
  phone?: string;
  ref?: string;
  type: ProviderType;
  url: string;
};

type BookingRequest = {
  formUrlEncoded?: Record<string, string>;
  jsonData?: Record<string, string>;
  method: 'POST' | 'GET';
  url: string;
};

type Session = {
  attributes: string[];
  dateTime: string;
  link: string | BookingRequest | null;
};

type Season = {
  description?: string;
  image?: string;
  name: string;
  programme?: string[];
  ref?: string;
  url: string;
};
