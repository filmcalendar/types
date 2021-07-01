import type {
  Availability,
  Film,
  Provider,
  Season,
  Session,
  Tag,
} from './common.d';

interface Page {
  availability?: string;
  films: string[];
  isFeatured: boolean;
  provider: string;
  seasons?: string[];
  sessions?: string[];
  url: string;
}

interface Dispatch {
  entities: {
    availability?: Record<string, Availability>;
    films: Record<string, Film>;
    pages: Record<string, Page>;
    providers: Record<string, Provider>;
    tags?: Record<string, Tag>;
    sessions?: Record<string, Session>;
    seasons?: Record<string, Season>;
  };
  result: string[];
}
