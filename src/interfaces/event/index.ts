import { TeamInterface } from 'interfaces/team';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface EventInterface {
  id?: string;
  name: string;
  date: any;
  theme: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  team?: TeamInterface[];
  organization?: OrganizationInterface;
  _count?: {
    team?: number;
  };
}

export interface EventGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  theme?: string;
  organization_id?: string;
}
