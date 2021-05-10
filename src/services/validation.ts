import { EMAIL_PATTERN, PASSWORD_PATTERN } from '../constants/regex';

class Validation {
  static isValidEmail = (value: string) => EMAIL_PATTERN.test(value);
  static isValidPassword = (value: string) => PASSWORD_PATTERN.test(value);
}

export default Validation;
