import type {
  AgentType,
  Availability,
  Country,
  Film,
  Language,
  Provider,
  Season,
  Session,
} from './common';

interface Registration {
  agent: string;
  country: Country;
  type: AgentType;
  language: Language;
}

interface Programme {
  programme: string[];
  _data?: unknown;
}

interface SeasonsData {
  seasonUrls: string[];
  _data?: unknown;
}

interface Page {
  availability?: Availability;
  seasons?: string[] | Season[];
  films: Film[];
  provider: Provider;
  sessions?: Session[];
  url: string;
}

type RegisterFn = () => Registration;

type ProvidersFn = () => Promise<Provider[]>;
type FeaturedFn = (provider: Provider) => Promise<string[]>;
type ProgrammeFn = (provider: Provider) => Promise<Programme>;

type SeasonsFn = (provider: Provider) => Promise<SeasonsData>;
type SeasonOptions = { _data: unknown };
type SeasonFn = (url: string, options?: SeasonOptions) => Promise<Season>;

type PageFn = (
  url: string,
  provider: Provider,
  _data?: unknown
) => Promise<Page | null>;

interface Agent {
  season?: SeasonFn;
  seasons?: SeasonsFn;
  featured?: FeaturedFn;
  page: PageFn;
  programme: ProgrammeFn;
  providers: ProvidersFn;
  ref: string;
  register: RegisterFn;
}
