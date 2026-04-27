import UserAgent from 'user-agents';

/**
 * Generates a random User-Agent for stealth mode.
 * @returns {string} User-Agent string.
 */
export const getGhostUA = () => {
  const userAgent = new UserAgent();
  return userAgent.toString();
};
