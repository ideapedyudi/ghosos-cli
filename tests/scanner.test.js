import { expect } from 'chai';
import { checkUsername } from '../src/engine/scanner.js';

describe('Scanner Engine', () => {
  it('should return TAKEN for a known existing user (e.g., github)', async () => {
    const platform = {
      name: 'GitHub',
      url: 'https://github.com/{}'
    };
    const result = await checkUsername(platform, 'github');
    expect(result.status).to.equal('TAKEN');
    expect(result.platform).to.equal('GitHub');
  });

  it('should return AVAILABLE for a highly unlikely random username', async () => {
    const platform = {
      name: 'GitHub',
      url: 'https://github.com/{}'
    };
    const randomUser = `ghost_${Math.random().toString(36).substring(7)}_${Date.now()}`;
    const result = await checkUsername(platform, randomUser);
    expect(result.status).to.equal('AVAILABLE');
  });
});
