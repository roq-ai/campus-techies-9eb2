const mapping: Record<string, string> = {
  events: 'event',
  leaderboards: 'leaderboard',
  organizations: 'organization',
  projects: 'project',
  resources: 'resource',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
