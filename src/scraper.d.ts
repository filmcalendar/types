import { AgentType } from './common';

type Action = 'list' | 'scrape';

type Options = {
  action: Action;
  agent: string;
  type?: AgentType;
};
