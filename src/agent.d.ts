import type { Country, AgentType, Language } from './common';

type Registration = {
  agent: string;
  country: Country;
  type: AgentType;
  language: Language;
};

type TempData = Record<string, unknown>;

type ProviderType = 'cinema' | 'live-tv' | 'streaming';

type Provider = {
  _data?: TempData;
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
  _data?: TempData;
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
  url: string;
  provider: Provider;
  films: Film[];
  sessions?: Session[];
  availability?: Availability;
};

type RegisterFn = () => Registration;
type ProvidersFn = () => Promise<Provider[]>;
type ProgrammeFn = (provider: Provider) => Promise<Programme>;
type PageFn = (
  url: string,
  provider: Provider,
  tempData?: TempData
) => Promise<Page | null>;

type Agent = {
  ref: string;
  register: RegisterFn;
  providers: ProvidersFn;
  programme: ProgrammeFn;
  page: PageFn;
};

type DispatchPage = {
  films: string[];
  provider: string;
  sessions?: string[];
  availability?: string;
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
