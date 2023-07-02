import { EventInterface } from 'interfaces/event';
import { LeaderboardInterface } from 'interfaces/leaderboard';
import { ResourceInterface } from 'interfaces/resource';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  event?: EventInterface[];
  leaderboard?: LeaderboardInterface[];
  resource?: ResourceInterface[];
  user?: UserInterface;
  _count?: {
    event?: number;
    leaderboard?: number;
    resource?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
