import UserAgent from 'user-agents';

/**
 * Menghasilkan User-Agent acak untuk mode stealth.
 * @returns {string} String User-Agent.
 */
export const getGhostUA = (): string => {
  const userAgent = new UserAgent();
  return userAgent.toString();
};
