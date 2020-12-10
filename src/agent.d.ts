import type { Country, AgentType, Language } from './common';

type Registration = {
  agent: string;
  country: Country;
  type: AgentType;
  language: Language;
};

type ProviderType = 'cinema' | 'live-tv' | 'streaming';

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

type Programme = {
  programme: string[];
  _data?: unknown;
};

type Film = {
  cast?: string[];
  director?: string[];
  title?: string;
  titleTranslated?: string;
  year?: number;
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

type Availability = {
  start: string;
  end: string;
  attributes: string[];
};

type SessionAttribute = {
  tag: string;
};

type Page = {
  availability?: Availability;
  films: Film[];
  provider: Provider;
  sessions?: Session[];
  url: string;
};

type RegisterFn = () => Registration;
type ProvidersFn = () => Promise<Provider[]>;
type ProgrammeFn = (provider: Provider) => Promise<Programme>;
type FeaturedFn = (provider: Provider) => Promise<string[]>;
type PageFn = (
  url: string,
  provider: Provider,
  _data?: unknown
) => Promise<Page | null>;

type Agent = {
  featured: FeaturedFn;
  page: PageFn;
  programme: ProgrammeFn;
  providers: ProvidersFn;
  ref: string;
  register: RegisterFn;
};

type DispatchPage = {
  availability?: string;
  films: string[];
  isFeatured: boolean;
  provider: string;
  sessions?: string[];
  url: string;
};

type Dispatch = {
  entities: {
    availability?: Record<string, Availability>;
    films: Record<string, Film>;
    pages: Record<string, DispatchPage>;
    providers: Record<string, Provider>;
    sessionAttributes?: Record<string, SessionAttribute>;
    sessions?: Record<string, Session>;
  };
  result: string[];
};
