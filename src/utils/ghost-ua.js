import UserAgent from 'user-agents';

/**
 * Menghasilkan User-Agent acak untuk mode siluman.
 * @returns {string} User-Agent string.
 */
export const getGhostUA = () => {
  const userAgent = new UserAgent();
  return userAgent.toString();
};
