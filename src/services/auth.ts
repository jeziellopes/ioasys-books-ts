import { AuthUserType } from 'interfaces/auth';

/**
 * Authentication services
 */
class Auth {
  /**
   * Return user with calculated attributes
   */
  static getUserFrom(data: AuthUserType) {
    return {
      ...data,
      shortName: data.name.split(' ')[0],
    };
  }
}

export default Auth;
