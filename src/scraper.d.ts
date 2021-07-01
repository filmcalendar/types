import { AgentType } from './common';

type Action = 'list' | 'scrape';

interface Options {
  action: Action;
  agent: string;
  type?: AgentType;
}
