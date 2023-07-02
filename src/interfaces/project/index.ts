import { TeamInterface } from 'interfaces/team';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  description?: string;
  team_id: string;
  created_at?: any;
  updated_at?: any;

  team?: TeamInterface;
  _count?: {};
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  team_id?: string;
}
