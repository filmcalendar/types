import type {
  Availability,
  Film,
  Provider,
  Session,
  SessionAttribute,
} from './common.d';

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
