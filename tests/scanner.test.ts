import { expect } from 'chai';
import { checkUsername } from '../src/engine/scanner.js';
import { Platform } from '../src/data/platforms.js';

describe('Scanner Engine', () => {
  const mockPlatform: Platform = {
    name: 'GitHub',
    url: 'https://github.com/{}',
    validationType: 'status'
  };

  it('should detect a taken username', async () => {
    // GitHub 'google' is definitely taken
    const result = await checkUsername(mockPlatform, 'google');
    expect(result.status).to.equal('TAKEN');
  });

  it('should detect an available username', async () => {
    // A very long random username that likely doesn't exist
    const randomUser = 'ghosos_random_user_' + Math.random().toString(36).substring(7);
    const result = await checkUsername(mockPlatform, randomUser);
    expect(result.status).to.equal('AVAILABLE');
  });
});
