import type { Country, AgentType, Language } from './common';

type Registration = {
  agent: string;
  country: Country;
  type: AgentType;
  language: Language;
};

type TempData = Record<string, unknown>;

type Venue = {
  ref?: string;
  address?: string;
  chain?: string;
  email?: string;
  name: string;
  phone?: string;
  url?: string;
  _data?: TempData;
};

type Programme = {
  programme: string[];
  _data?: TempData;
};

type Film = {
  title?: string;
  titleTranslated?: string;
  director?: string[];
  cast?: string[];
  year?: number;
};

type BookingRequest = {
  url: string;
  method: 'POST' | 'GET';
  formUrlEncoded?: Record<string, string>;
  jsonData?: Record<string, string>;
};

type Session = {
  dateTime: string;
  bookingLink: string | BookingRequest | null;
  attributes: string[];
};

type SessionAttribute = {
  tag: string;
};

type Page = {
  url: string;
  venue: Venue;
  films: Film[];
  sessions: Session[];
};

type RegisterFn = () => Registration;
type VenuesFn = () => Promise<Venue[]>;
type ProgrammeFn = (venue: Venue) => Promise<Programme>;
type PageFn = (
  url: string,
  venue: Venue,
  tempData?: TempData
) => Promise<Page | null>;

type Agent = {
  ref: string;
  register: RegisterFn;
  venues: VenuesFn;
  programme: ProgrammeFn;
  page: PageFn;
};

type Dispatch = {
  entities: {
    venues: Record<string, Venue>;
    films: Record<string, Film>;
    pages: Record<string, Page>;
    sessions: Record<string, Session>;
    sessionAttributes: Record<string, SessionAttribute>;
  };
  result: string[];
};
