/**
 * Interface untuk definisi Platform sosial media.
 */
export interface Platform {
  name: string;
  url: string;
  validationType: 'status' | 'content';
}

/**
 * Daftar platform sosial media untuk dipindai.
 */
export const platforms: Platform[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/{}',
    validationType: 'status'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/{}/',
    validationType: 'status'
  },
  {
    name: 'Twitter (X)',
    url: 'https://twitter.com/{}',
    validationType: 'status'
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@{}',
    validationType: 'status'
  },
  {
    name: 'Pinterest',
    url: 'https://www.pinterest.com/{}/',
    validationType: 'status'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/{}',
    validationType: 'status'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@{}',
    validationType: 'status'
  },
  {
    name: 'Reddit',
    url: 'https://www.reddit.com/user/{}',
    validationType: 'status'
  },
  {
    name: 'Twitch',
    url: 'https://www.twitch.tv/{}',
    validationType: 'status'
  },
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/{}',
    validationType: 'status'
  },
  {
    name: 'Behance',
    url: 'https://www.behance.net/{}',
    validationType: 'status'
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/{}',
    validationType: 'status'
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@{}',
    validationType: 'status'
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/user/{}',
    validationType: 'status'
  },
  {
    name: 'Steam',
    url: 'https://steamcommunity.com/id/{}',
    validationType: 'status'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/{}',
    validationType: 'status'
  },
  {
    name: 'Snapchat',
    url: 'https://www.snapchat.com/add/{}',
    validationType: 'status'
  },
  {
    name: 'Linktree',
    url: 'https://linktr.ee/{}',
    validationType: 'status'
  }
];
