import { describe, it, expect, beforeEach } from 'vitest';
import { User } from './User';

describe('User', () => {
  let user: User;

  beforeEach(() => {
    user = new User('Doe', 'John');
  });

  describe('getFullName', () => {
    it('should concat firstname and lastname', () => {
      const fullName = user.getFullName();
      expect(fullName).toEqual('John Doe');
    });
  });
});
