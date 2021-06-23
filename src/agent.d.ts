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

type Collection = {
  url: string;
  name: string;
  description?: string;
  programme: string[];
};

type Collections = {
  collections: string[];
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
  collections?: Collection[];
  films: Film[];
  provider: Provider;
  sessions?: Session[];
  url: string;
};

type RegisterFn = () => Registration;
type ProvidersFn = () => Promise<Provider[]>;
type FeaturedFn = (provider: Provider) => Promise<string[]>;
type ProgrammeFn = (provider: Provider) => Promise<Programme>;

type CollectionsFn = (provider: Provider) => Promise<Collections>;

type CollectionOptions = { _data: unknown };
type CollectionFn = (
  url: string,
  options?: CollectionOptions
) => Promise<Collection>;

type PageFn = (
  url: string,
  provider: Provider,
  _data?: unknown
) => Promise<Page | null>;

type Agent = {
  collection?: CollectionFn;
  collections?: CollectionsFn;
  featured?: FeaturedFn;
  page: PageFn;
  programme: ProgrammeFn;
  providers: ProvidersFn;
  ref: string;
  register: RegisterFn;
};

type DispatchPage = {
  availability?: string;
  collections?: string[];
  films: string[];
  isFeatured: boolean;
  provider: string;
  sessions?: string[];
  url: string;
};

type DispatchCollection = {
  description?: string;
  image?: string;
  name: string;
  ref: string;
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
    collections?: Record<string, DispatchCollection>;
  };
  result: string[];
};
