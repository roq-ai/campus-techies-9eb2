import { ProjectInterface } from 'interfaces/project';
import { EventInterface } from 'interfaces/event';
import { GetQueryInterface } from 'interfaces';

export interface TeamInterface {
  id?: string;
  name: string;
  event_id: string;
  created_at?: any;
  updated_at?: any;
  project?: ProjectInterface[];
  event?: EventInterface;
  _count?: {
    project?: number;
  };
}

export interface TeamGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  event_id?: string;
}
