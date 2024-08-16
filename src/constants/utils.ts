/**
 * The isDev variable is used to determine if the application is running in development mode
 * @type {boolean} isDev
 */

export const isDev: boolean = import.meta.env.DEV

/**
 * The URL of the backend server changes based on the environment
 * @type {string} BACKEND_SERVER_URL
 */

export const BACKEND_SERVER_URL: string = isDev //
  ? import.meta.env.VITE_DEV_SERVER_URL
  : import.meta.env.VITE_PRODUCTION_SERVER_URL
