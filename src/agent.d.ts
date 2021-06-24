import type {
  AgentType,
  Availability,
  Country,
  Film,
  Language,
  Provider,
  Session,
} from './common';

type Registration = {
  agent: string;
  country: Country;
  type: AgentType;
  language: Language;
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
