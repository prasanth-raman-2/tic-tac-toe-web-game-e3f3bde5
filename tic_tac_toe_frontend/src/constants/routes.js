/**
 * Application route constants
 * Central location for all route paths used in the application
 */

export const ROUTES = {
  // Main routes
  HOME: '/',
  GAME: '/game',
  
  // Game mode routes
  TWO_PLAYER: '/game/two-player',
  VS_AI: '/game/vs-ai',
  
  // Additional routes
  LEADERBOARD: '/leaderboard',
  SETTINGS: '/settings',
  
  // Utility function to generate game room route
  gameRoom: (roomId) => `/game/room/${roomId}`,
};

// Route configurations with metadata
export const ROUTE_CONFIG = {
  [ROUTES.HOME]: {
    title: 'Home',
    isPublic: true,
  },
  [ROUTES.GAME]: {
    title: 'Game',
    isPublic: true,
  },
  [ROUTES.TWO_PLAYER]: {
    title: 'Two Player Game',
    isPublic: true,
  },
  [ROUTES.VS_AI]: {
    title: 'Play vs AI',
    isPublic: true,
  },
  [ROUTES.LEADERBOARD]: {
    title: 'Leaderboard',
    isPublic: true,
  },
  [ROUTES.SETTINGS]: {
    title: 'Settings',
    isPublic: true,
  },
};
