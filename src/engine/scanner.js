import axios from 'axios';
import { getGhostUA } from '../utils/ghost-ua.js';

/**
 * Logika inti untuk mengecek ketersediaan username.
 */
export const checkUsername = async (platform, username) => {
  const url = platform.url.replace('{}', username);
  const userAgent = getGhostUA();

  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': userAgent
      },
      validateStatus: (status) => status < 500, // Handle non-500 errors manually
      timeout: 5000
    });

    if (response.status === 200) {
      return { platform: platform.name, status: 'TAKEN', url };
    } else if (response.status === 404) {
      return { platform: platform.name, status: 'AVAILABLE', url };
    } else {
      return { platform: platform.name, status: 'UNKNOWN', url, code: response.status };
    }
  } catch (error) {
    return { platform: platform.name, status: 'ERROR', url, message: error.message };
  }
};

/**
 * Memindai semua platform secara asinkron.
 */
export const scanAll = async (platforms, username) => {
  const tasks = platforms.map(p => checkUsername(p, username));
  return await Promise.allSettled(tasks);
};
