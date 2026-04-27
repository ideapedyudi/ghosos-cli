import axios from 'axios';
import { getGhostUA } from '../utils/ghost-ua.js';
import { Platform } from '../data/platforms.js';

export interface ScanResult {
  platform: string;
  status: 'TAKEN' | 'AVAILABLE' | 'UNKNOWN' | 'ERROR';
  url: string;
  code?: number;
  message?: string;
}

/**
 * Logika inti untuk memeriksa ketersediaan username.
 */
export const checkUsername = async (platform: Platform, username: string): Promise<ScanResult> => {
  const url = platform.url.replace('{}', username);
  const userAgent = getGhostUA();

  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': userAgent
      },
      validateStatus: (status) => status < 500, // Menangani error non-500 secara manual
      timeout: 5000
    });

    if (response.status === 200) {
      return { platform: platform.name, status: 'TAKEN', url };
    } else if (response.status === 404) {
      return { platform: platform.name, status: 'AVAILABLE', url };
    } else {
      return { platform: platform.name, status: 'UNKNOWN', url, code: response.status };
    }
  } catch (error: any) {
    return { platform: platform.name, status: 'ERROR', url, message: error.message };
  }
};

/**
 * Memindai semua platform secara asinkron.
 */
export const scanAll = async (platforms: Platform[], username: string): Promise<PromiseSettledResult<ScanResult>[]> => {
  const tasks = platforms.map(p => checkUsername(p, username));
  return await Promise.allSettled(tasks);
};
