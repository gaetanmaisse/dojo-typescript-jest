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

  describe('getSlug', () => {
    it('should create slug based on firstname and lastname', () => {
      const slug = user.getSlug();
      expect(slug).toEqual('john-doe');
    });
  });
});
